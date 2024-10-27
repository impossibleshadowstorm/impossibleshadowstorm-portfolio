"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Heading } from "./Heading";
import { skills } from "@/constants/skills";

export function Skills() {
  return (
    <div>
      {skills.map((skill) => (
        <div className="mt-5" key={skill.category}>
          <Heading
            as="h2"
            className="text-gray-600 text-sm md:text-sm lg:text-sm mb-4"
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
