"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ClipLoader } from "react-spinners";
import { baseURL } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Job {
  jobId: string;
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

export default function JobDetailsPage({
  params,
}: {
  params: { jobId: string };
}) {
  const { jobId } = params;
  const [job, setJob] = useState<Job | undefined>(undefined);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    coverLetterFile: null as File | null,
    resume: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [consentChecked, setConsentChecked] = useState(false);

  useEffect(() => {
    // Fetch job data from the backend
    fetch(`${baseURL}/api/jobs/getactive`, {})
      .then((response) => response.json())
      .then((data) => {
        const jobs = data.jobs.map(
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
        const foundJob: Job | undefined = jobs.find(
          (job: Job) => job.jobId === decodeURIComponent(jobId),
        ); // Use jobId for finding the job
        setJob(foundJob);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
        toast.error("Failed to load job details. Please try again later.");
      });
  }, [jobId]);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the other field if one is being filled
    if (name === "coverLetter" && value) {
      setFormData((prev) => ({ ...prev, coverLetterFile: null }));
    }
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData({ ...formData, [name]: files[0], coverLetter: "" }); // Clear text field if file is uploaded
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Validate that at least one cover letter field is filled
    if (!formData.coverLetter && !formData.coverLetterFile) {
      setSubmitError("Please provide either a cover letter or upload a file.");
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Form Submitted:", formData);
      const data = new FormData();

      // Append text data
      data.append("fullName", formData.fullName || "");
      data.append("jobName", job?.jobName || "");
      data.append("email", formData.email || "");
      data.append("phone", formData.phone || "");
      data.append("appliedAt", new Date().toISOString());

      // Append file data correctly
      if (formData.resume) {
        data.append("cvResume", formData.resume);
      }

      if (formData.coverLetterFile) {
        data.append("coverLetter", formData.coverLetterFile);
      } else {
        data.append("coverLetter", formData.coverLetter || "");
      }

      const response = await fetch(`${baseURL}/api/applications/add`, {
        method: "POST",
        body: data,
        // Don't set Content-Type header when using FormData
        // The browser will automatically set the correct multipart/form-data header
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      await response.json();
      // console.log("Application submitted successfully:", result);

      toast.success("Application submitted successfully!", {
        description:
          "Thank you for applying. We will review your application shortly.",
      });

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        coverLetter: "",
        coverLetterFile: null,
        resume: null,
      });
      setConsentChecked(false);
    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmitError("Failed to submit your application. Please try again.");

      toast.error("Application submission failed", {
        description:
          "There was an error submitting your application. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader size={50} color={"#123abc"} loading={true} />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      {/* Grid Layout: Left = Job Details, Right = Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Job Details */}
        <div className="w-full">
          <h1 className="text-4xl font-semibold">{job.jobName}</h1>
          <p className="text-gray-600 mt-2">
            <b>Job Category:</b> {job.jobCategory}
          </p>
          <p className="text-gray-600 mt-1">
            <b>Job Type:</b> {job.jobType}
          </p>
          <p className="text-gray-600 mt-1">
            <b>Job Location:</b> {job.jobLocation}
          </p>

          <h2 className="text-2xl font-semibold mt-6">About the Job</h2>
          <p className="mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm">
            {job.jobDescription.positionOverview}
          </p>

          <h2 className="text-2xl  font-semibold mt-6">Key Responsibilites</h2>
          <ul className="list-disc pl-5">
            {job.jobDescription.keyResponsibilities.map(
              (responsibility, index) => (
                <li key={index} className="mt-2 text-zinc-400 ">
                  {responsibility}
                </li>
              ),
            )}
          </ul>

          <h2 className="text-2xl  font-semibold mt-6">Qualifications</h2>
          <ul className="list-disc pl-5">
            {job.jobDescription.qualifications.map((qualification, index) => (
              <li key={index} className="mt-2 text-zinc-400 ">
                {qualification}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl  font-semibold mt-6">Prefrred Skills</h2>
          <ul className="list-disc pl-5">
            {job.jobDescription.preferredSkills.map((skill, index) => (
              <li key={index} className="mt-2 text-zinc-400 ">
                {skill}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-6">What we Offer</h2>
          <p className="mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm">
            {job.jobDescription.whatWeOffer}
          </p>

          <div className="mt-8">
            <Link href="/careers">
              <button className="text-gzinc-400 hover:text-zinc-500">
                ← Back to Careers
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full">
          <Card className="w-full">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Apply for this position
              </h2>

              {/* Job Application Form */}
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="fullName">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone">
                    Phone <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid gap-2 relative">
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    placeholder="Write a brief cover letter..."
                    rows={4}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    disabled={!!formData.coverLetterFile} // Disable if file is uploaded
                  />
                  {formData.coverLetterFile && (
                    <span className="absolute top-0 right-0 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                      Disabled
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-center mt-4 mb-0">
                  <span className="text-gray-500">or</span>
                </div>

                <div className="grid gap-2 mb-4 relative">
                  <Label htmlFor="coverLetterFile">
                    Upload Cover Letter <span className="text-red-500">*</span>
                  </Label>

                  {/* Custom File Upload Button */}
                  <div className="relative">
                    <input
                      id="coverLetterFile"
                      name="coverLetterFile"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      disabled={!!formData.coverLetter} // Disable if text is filled
                    />

                    <div className="flex items-center border p-2 rounded-md gap-x-2">
                      {!formData.coverLetterFile && (
                        <Button
                          type="button"
                          className="bg-muted text-black px-3 py-1 rounded-md hover:bg-blue-600"
                        >
                          Choose File
                        </Button>
                      )}

                      <span className="text-gray-500">
                        {formData.coverLetterFile
                          ? formData.coverLetterFile.name
                          : "No file chosen"}
                      </span>
                    </div>
                  </div>
                  {formData.coverLetter && (
                    <span className="absolute top-0 right-0 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                      Disabled
                    </span>
                  )}
                  <p className="text-xs text-gray-500">
                    Allowed Type(s): .pdf, .doc, .docx
                  </p>
                </div>

                <div className="grid gap-2 mt-0">
                  <Label htmlFor="resume">
                    Upload CV/Resume <span className="text-red-500">*</span>
                  </Label>

                  {/* Custom File Upload Button */}
                  <div className="relative">
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />

                    <div className="flex items-center border p-2 rounded-md gap-x-2">
                      {!formData.resume && (
                        <Button
                          type="button"
                          className="bg-muted text-black px-3 py-1 rounded-md hover:bg-blue-600"
                        >
                          Choose File
                        </Button>
                      )}

                      <span className="text-gray-500">
                        {formData.resume
                          ? formData.resume.name
                          : "No file chosen"}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500">
                    Allowed Type(s): .pdf, .doc, .docx
                  </p>
                </div>

                <div className="flex items-start gap-2 mt-4">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    className="w-4 h-4 accent-blue-500 mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    By using this form, you agree with the storage and handling
                    of your data by this website.{" "}
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Show error message if there's a submission error */}
                {submitError && (
                  <div className="text-red-500 text-sm mt-2">{submitError}</div>
                )}

                {/* Submit Button with Loading State */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <ClipLoader
                        size={16}
                        color={"#ffffff"}
                        loading={true}
                        className="mr-2"
                      />
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
