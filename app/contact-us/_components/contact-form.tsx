import * as React from "react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { baseURL } from "@/lib/utils";
import { toast } from "sonner";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null); // Create a ref for the form

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Validate that all fields are filled
    if (!email || !name || !phone || !message) {
      toast.error("Error!", {
        description: "All fields are required",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = { email, name, phone, message };

      const response = await fetch(`${baseURL}/api/contactus/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      const result = await response.json();
      if (result.success) {
        toast.success("Success!", {
          description:
            "Thank you for submitting your query we will get back to you soon",
        });
        formRef.current?.reset(); // Reset the form using the ref
      } else {
        throw new Error(result.error || "Failed to submit form");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error!", {
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="grid p-0 md:grid-cols-2">
        <div className="flex flex-col justify-center p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-muted-foreground mb-4">
            We&#39;d love to hear from you. <br /> Fill out the form and
            we&#39;ll get back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Our Office</h3>
              <p className="text-muted-foreground">
                401, 180 Duncan Mills Road
              </p>
              <p className="text-muted-foreground">Toronto, ON, M3B 1Z6</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <p className="text-muted-foreground">Email: info@wisematic.ca</p>
              <p className="text-muted-foreground">Phone: (+1) 437-600-3669</p>
            </div>
          </div>
        </div>
        <form
          ref={formRef}
          className="flex flex-col gap-4 p-6 md:p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Full Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email ID"
              className="relative z-10"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              pattern="\d{10,}"
              className="relative z-10"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your Message..."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="relative z-10"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full relative z-10"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
