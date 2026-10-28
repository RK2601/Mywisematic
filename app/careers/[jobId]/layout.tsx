import type { Metadata } from "next";
import { isValidObjectId } from "mongoose";
import { connectDB } from "@/lib/db/connect";
import { Job } from "@/lib/db/models/Job";

type JobDoc = {
  _id: unknown;
  jobName: string;
  jobType?: string;
  jobLocation?: string;
  validFrom?: Date;
  validTill?: Date;
  jobDescription?: {
    positionOverview?: string;
    keyResponsibilities?: string[];
    qualifications?: string[];
    preferredSkills?: string[];
    whatWeOffer?: string[];
  };
};

async function getJob(id: string): Promise<JobDoc | null> {
  if (!isValidObjectId(id)) return null;
  try {
    await connectDB();
    return (await Job.findOne({ _id: id, isActive: true }).lean()) as JobDoc | null;
  } catch {
    return null; // never break the page because SEO data failed to load
  }
}

const esc = (s: string) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]!);
const list = (title: string, items?: string[]) =>
  items?.length ? `<h3>${title}</h3><ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : "";

export async function generateMetadata({ params }: { params: { jobId: string } }): Promise<Metadata> {
  const job = await getJob(params.jobId);
  if (!job) return { title: "Careers" };
  const description = (job.jobDescription?.positionOverview || `${job.jobName} at WiseMatic, Toronto.`).slice(0, 160);
  return {
    title: `${job.jobName}, ${job.jobLocation || "Toronto"}`,
    description,
    alternates: { canonical: `/careers/${params.jobId}` },
    openGraph: { title: `${job.jobName} at WiseMatic`, description, url: `/careers/${params.jobId}` },
  };
}

export default async function JobLayout({ children, params }: { children: React.ReactNode; params: { jobId: string } }) {
  const job = await getJob(params.jobId);
  const d = job?.jobDescription;
  const jsonLd = job && {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.jobName,
    description:
      `<p>${esc(d?.positionOverview || "")}</p>` +
      list("Responsibilities", d?.keyResponsibilities) +
      list("Qualifications", d?.qualifications) +
      list("Preferred skills", d?.preferredSkills) +
      list("What we offer", d?.whatWeOffer),
    datePosted: job.validFrom ? new Date(job.validFrom).toISOString().slice(0, 10) : undefined,
    validThrough: job.validTill ? new Date(job.validTill).toISOString() : undefined,
    employmentType: /part/i.test(job.jobType || "") ? "PART_TIME" : /intern|co-?op/i.test(job.jobType || "") ? "INTERN" : "FULL_TIME",
    hiringOrganization: { "@type": "Organization", name: "WiseMatic", sameAs: "https://www.wisematic.ca", logo: "https://www.wisematic.ca/wisematic.png" },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "401, 180 Duncan Mills Road",
        addressLocality: "Toronto",
        addressRegion: "ON",
        postalCode: "M3B 1Z6",
        addressCountry: "CA",
      },
    },
    directApply: true,
  };
  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      )}
      {children}
    </>
  );
}
