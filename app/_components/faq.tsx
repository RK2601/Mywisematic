import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    id: "item-1",
    question: "What services does WiseMatic provide?",
    answers: [
      "We specialize in AI & machine learning, data analytics, SaaS development, digital marketing & SEO, and IT infrastructure management to help businesses scale and innovate.",
      "WiseMatic Inc. helps you manage your business efficiently without compromising on quality.",
    ],
  },
  {
    id: "item-2",
    question: "How can AI and machine learning benefit my business?",
    answers: [
      "AI and ML can optimize your operations, automate processes, provide predictive insights, and enhance decision-making to keep you ahead of the competition.",
    ],
  },
  {
    id: "item-3",
    question: "What is SaaS development, and how can it help my business?",
    answers: [
      "SaaS (Software as a Service) allows you to create scalable, user-friendly software applications that improve your business operations and enhance customer experiences.",
    ],
  },
  {
    id: "item-4",
    question: "Can you help improve my business’s online presence?",
    answers: [
      "Yes, through our digital marketing and SEO services, we enhance your website’s visibility, drive targeted traffic, and help you connect with the right audience.",
    ],
  },
  {
    id: "item-5",
    question: "What industries do you serve?",
    answers: [
      "We work with a diverse range of industries, including tech, e-commerce, healthcare, finance, and more.",
    ],
    links: [
      {
        href: "/contact-us",
        text: "Contact us to know more.",
        className: "text-primary underline",
      },
    ],
  },
  {
    id: "item-6",
    question: "What makes WiseMatic different from other service providers?",
    answers: [
      "Our expertise in cutting-edge technology, commitment to measurable results, and personalized approach set us apart from the competition.",
    ],
    links: [
      {
        href: "/contact-us",
        text: "Contact us to know more.",
        className: "text-primary underline",
      },
    ],
  },
  {
    id: "item-7",
    question: "Do you provide ongoing support and maintenance?",
    answers: [
      "Yes, we offer continuous support and maintenance to ensure your solutions are always up-to-date and performing at their best.",
    ],
  },
];

export default function LandingPageFAQ() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8">
        <div className="text-center mb-20 space-y-4">
          <Badge variant="outline" className="mb-4 space-x-2 px-3 py-1">
            <span className="text-muted-foreground text-lg">FAQs</span>
          </Badge>
          <h2 className="text-center text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            You Asked,{" "}
            <span
              className="text-2xl text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-5xl"
              style={{
                fontFamily:
                  '"Instrument Serif", "Instrument Serif Placeholder", serif',
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "0em",
                color: "#399AD2",
              }}
            >
              We Answered
            </span>
            .
          </h2>

          {/* <p className="text-gray-400 text-center max-w-2xl mx-auto break-words text-base sm:text-lg -mt-3 sm:-mt-4">
          If you have any questions, don&#39;t hesitate to contact
          <br className="hidden sm:block" />
          our exceptional support team, available seven days a week.
        </p> */}

          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
            Got Questions? Our support team is here for you, seven days a week.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-[800px]">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-gray-300 dark:border-gray-700 rounded-lg mb-4 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6"
            >
              <AccordionTrigger className="text-sm font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answers.map((answer, index) => (
                  <p
                    key={index}
                    className="mb-4 max-w-[640px] text-muted-foreground"
                  >
                    {answer}
                  </p>
                ))}
                {faq.links && (
                  <div className="mt-2">
                    {faq.links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className={link.className}
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
