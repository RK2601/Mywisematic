"use client";

import { Section } from "@/components/ui/section";
import { HoverEffect } from "@/components/ui/hover-effect";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import { baseURL } from "@/lib/utils";
import { Search, ChevronDown, Layers, Briefcase, MapPin } from "lucide-react";

const controlClass =
  "h-12 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 hover:border-white/20 focus:border-[#399AD2]/60 focus:outline-none focus:ring-2 focus:ring-[#399AD2]/30";

const FILTERS = [
  {
    label: "Category",
    icon: Layers,
    options: ["All Categories", "Sales", "Full Stack Developer", "Digital Marketing", "Software Development"],
  },
  { label: "Job type", icon: Briefcase, options: ["All Types", "Full Time", "Co-Op"] },
  {
    label: "Location",
    icon: MapPin,
    options: ["All Locations", "Remote", "Hybrid", "On-Site", "Toronto"],
  },
];

// Define the interface for the job objects
interface Job {
  jobId: string; // Add jobId to the interface
  jobName: string;
  jobCategory: string;
  jobType: string;
  jobLocation: string;
  experienceLevel: string;
  validFrom: string;
  validTill: string;
  jobDescription: {
    positionOverview: string;
    keyResponsibilities: string[];
    qualifications: string[];
    whatWeOffer: string[];
    preferredSkills: string[];
  };
}

export default function CareerCardsSection() {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [type, setType] = useState("All Types");
  const [location, setLocation] = useState("All Locations");

  useEffect(() => {
    // Fetch job data from the backend
    setLoading(true); // Set loading to true before fetching
    fetch(`${baseURL}/api/jobs/getactive`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched job data:", data.jobs); // Debug log
        const jobsWithId = data.jobs.map(
          (job: {
            _id: string;
            jobName: string;
            jobCategory: string;
            jobType: string;
            jobLocation: string;
            experienceLevel: string;
            validFrom: string;
            validTill: string;
            jobDescription: {
              positionOverview: string;
              keyResponsibilities: string[];
              qualifications: string[];
              whatWeOffer: string[];
              preferredSkills: string[];
            };
          }) => ({
            ...job,
            jobId: job._id, // Map _id to jobId
          }),
        );

        setJobs(jobsWithId);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetching
      });
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.jobName.toLowerCase().includes(search.toLowerCase()) ||
      job.jobDescription.positionOverview
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesCategory =
      category === "All Categories" || job.jobCategory === category;
    const matchesType = type === "All Types" || job.jobType === type;
    const matchesLocation =
      location === "All Locations" || job.jobLocation === location;

    return matchesSearch && matchesCategory && matchesType && matchesLocation;
  });

  console.log("Filtered jobs:", filteredJobs); // Debug log

  return (
    <Section className="overflow-hidden pb-10">
      <div className="mx-auto flex max-w-container flex-col gap-12 sm:gap-24">
        {/* Filters Section */}
        <div className="relative z-10 rounded-2xl bg-gradient-to-br from-[#399AD2]/40 via-white/10 to-purple-500/30 p-px shadow-[0_0_60px_-25px_rgba(57,154,210,0.5)]">
          <div className="flex flex-col gap-3 rounded-2xl bg-background/80 p-3 backdrop-blur-xl lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                aria-label="Search jobs"
                placeholder="Search jobs by title or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`${controlClass} w-full pl-11`}
              />
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:flex">
              {FILTERS.map(({ label, options, icon: Icon }, i) => {
                const [value, setValue] = [
                  [category, setCategory],
                  [type, setType],
                  [location, setLocation],
                ][i] as [string, (v: string) => void];
                return (
                  <div key={label} className="relative">
                    <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#399AD2]" />
                    <select
                      aria-label={label}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      className={`${controlClass} w-full cursor-pointer appearance-none pl-10 pr-10 lg:w-48`}
                    >
                      {options.map((o) => (
                        <option key={o} className="bg-background">
                          {o}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Jobs Section */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <ClipLoader size={50} color={"#123abc"} loading={true} />
          </div>
        ) : filteredJobs.length > 0 ? (
          <HoverEffect
            items={filteredJobs.map((job) => ({
              key: job.jobId, // Ensure unique key for each job
              title: job.jobName,
              category: job.jobCategory,
              type: job.jobType,
              location: job.jobLocation,
              description: truncateText(
                job.jobDescription.positionOverview,
                150,
              ), // Truncate description
              link: `/careers/${encodeURIComponent(job.jobId)}`, // Use jobId for routing
              onClick: () =>
                router.push(`/careers/${encodeURIComponent(job.jobId)}`), // Use jobId for routing
            }))}
          />
        ) : (
          <p className="text-center text-gray-500">No Jobs Available.</p>
        )}
      </div>
    </Section>
  );
}
