"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { experienceHistory } from "@/constants/experience";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const heading = (
  <>
    <div className="text-4xl flex">
      <div className="mr-5">💼</div>
      <Heading className="text-black">Work History</Heading>
    </div>
    <Paragraph className="max-w-xl mt-4">
      I&apos;m a full-stack developer that loves{" "}
      <Highlight>building products</Highlight> and web apps that can impact
      millions of lives..
    </Paragraph>
  </>
);

export default function Experience() {
  return (
    <Container>
      <TracingBeam heading={heading}>
        <div className="max-w-2xl mx-auto antialiased pt-4 relative mb-40">
          {experienceHistory.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center justify-start">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt={item.organization}
                    height="100"
                    width="100"
                    style={{
                      height: "100px",
                      width: "100px",
                    }}
                    className="rounded-lg mr-10 object-contain"
                  />
                )}
                <div>
                  {/* <p
                  className={twMerge("text-xl mb-4")}
                >{`${item?.designation} - ${item?.organization}`}</p> */}
                  <p className={twMerge("text-lg mb-1 font-medium")}>
                    {item?.organization}
                  </p>
                  <p className={twMerge("text-md mb-1")}>{item?.designation}</p>
                  <p className={twMerge("text-sm")}>{item.location}</p>
                </div>
              </div>

              <div className="text-sm prose prose-sm dark:prose-invert mt-5">
                {/* {item?.image && (
                <Image
                  src={item.image}
                  alt={item.organization}
                  height="100"
                  width="100"
                  className="rounded-lg mb-10 object-cover"
                />
              )} */}
                {item.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </Container>
  );
}
