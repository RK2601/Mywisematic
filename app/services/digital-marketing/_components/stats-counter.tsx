"use client";
import { useEffect, useState } from "react";

export const StatCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const numValue = parseInt(value);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = numValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numValue) {
        setCount(numValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [numValue]);

  return (
    <span>
      {count}
      {value.includes("%") ? "%" : ""}
    </span>
  );
};
