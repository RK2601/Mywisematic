"use client";

import { Section } from "@/components/ui/section";
import { HoverEffect } from "@/components/ui/hover-effect";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import { baseURL } from "@/lib/utils";

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
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          {/* Search Box */}
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 rounded-lg border p-3 text-sm shadow-sm focus:outline-none focus:ring focus:ring-secondary bg-primary-foreground"
          />

          {/* Dropdown Filters */}
          <div className="flex flex-wrap gap-4">
            {/* Category Filter */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-lg border p-3 text-sm shadow-sm focus:outline-none focus:ring focus:ring-secondary bg-primary-foreground"
            >
              <option>All Categories</option>
              <option>Sales</option>
              <option>Full Stack Developer</option>
              <option>Digital Marketing</option>
              <option>Software Development</option>
            </select>

            {/* Type Filter */}
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-lg border p-3 text-sm shadow-sm focus:outline-none focus:ring focus:ring-secondary bg-primary-foreground"
            >
              <option>All Types</option>
              <option>Full Time</option>
              <option>Co-Op</option>
            </select>

            {/* Location Filter */}
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="rounded-lg border p-3 text-sm shadow-sm focus:outline-none focus:ring focus:ring-secondary bg-primary-foreground"
            >
              <option>All Locations</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-Site</option>
              <option>Toronto</option>
            </select>
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
