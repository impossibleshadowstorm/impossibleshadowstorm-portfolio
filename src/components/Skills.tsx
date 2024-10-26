"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Heading } from "./Heading";
import { skills } from "@/constants/skills";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/images/logos/next.png",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/images/logos/aws.webp",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/images/logos/figma.png",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const stack = [
  {
    id: 1,
    title: "Next.js",
    src: "/images/logos/next.png",
    className: "h-10 w-14",
  },
  {
    id: 2,
    title: "AWS",
    src: "/images/logos/aws.webp",
    className: "h-10 w-10",
  },
  {
    id: 3,
    title: "Figma",
    src: "/images/logos/figma.png",
    className: "h-10 w-8",
  },
  {
    id: 4,
    title: "Framer Motion",
    src: "/images/logos/framer.webp",
    className: "h-10 w-10",
  },
  {
    id: 5,
    title: "Node",
    src: "/images/logos/node.png",
    className: "h-10 w-12",
  },
  {
    id: 6,
    title: "Tailwind",
    src: "/images/logos/tailwind.png",
    className: "h-10 w-24",
  },
  {
    id: 7,
    title: "Vercel",
    src: "/images/logos/vercel.png",
    className: "h-10 w-24",
  },
];

export function Skills() {
  return (
    <div>
      {skills.map((skill) => (
        <div className="mt-5" key={skill.category}>
          <Heading
            as="h2"
            className="font-black text-lg md:text-lg lg:text-lg mb-4"
          >
            {skill.category}
          </Heading>
          <div className="flex flex-row items-center mb-5 w-full">
            <AnimatedTooltip items={skill.skillSets} />
          </div>
        </div>
      ))}
    </div>
  );
}
