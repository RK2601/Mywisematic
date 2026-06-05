import { ProcessSteps } from "./process-steps";

const steps = [
  {
    step: "Step 1",
    title: "Deep Dive Discovery",
    content: "Start your Web3 journey by learning the basics of blockchain.",
    image: "/#",
  },
  {
    step: "Step 2",
    title: "Strategic Blueprint",
    content:
      "Dive deep into blockchain fundamentals and smart contract development.",
    image: "/#",
  },
  {
    step: "Step 3",
    title: "Agile Execution and Development",
    content:
      "Graduate with hands-on Web3 experience through building decentralized applications.",
    image: "/#",
  },
  // {
  //     step: 'Step 4',
  //     title: 'Launch and Beyond',
  //     content: 'Graduate with hands-on Web3 experience through building decentralized applications.',
  //     image: '/#'
  // },
];

export function ProcessSection() {
  return (
    <ProcessSteps
      features={steps}
      title="Your Journey Starts Here"
      autoPlayInterval={4000}
      imageHeight="h-[500px]"
    />
  );
}
