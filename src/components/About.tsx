"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/about/thinking.webp",
    "/images/about/about-me.webp",
    "/images/about/about-me.webp",
    "/images/about/thinking.webp",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={`${image}${index}`}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hello! I&apos;m Sumit Saurav, a passionate Full Stack Developer who
          thrives on tackling challenges and crafting innovative solutions. My
          journey in technology is fueled by a deep curiosity and a desire to
          create impactful products that enhance user experiences. Welcome to my
          corner of the digital world!
        </Paragraph>
        <Paragraph className=" mt-4">
          From a young age, I&apos;ve been fascinated by how things work—whether
          it&apos;s dissecting a gadget to understand its mechanics or coding a
          simple program to see how it operates. This curiosity has evolved into
          a love for software development, where I find immense satisfaction in
          transforming ideas into functional applications.
        </Paragraph>
        <Paragraph className=" mt-4">
          I believe that technology has the power to change the world, and I am
          excited to be a part of that change. My enthusiasm for product
          development drives me to stay updated with the latest trends and best
          practices in the tech industry. I enjoy working with various
          technologies, especially Python, JavaScript, and modern frameworks
          like React and Node.js. Each new project is an opportunity for me to
          learn, grow, and push the boundaries of what I can create.
        </Paragraph>
        <Paragraph className=" mt-4">
          What I love most about being a developer is the problem-solving
          aspect. I view every challenge as a puzzle waiting to be solved.
          Whether it&apos;s optimizing an application for better performance or
          brainstorming new features to enhance user engagement, I approach each
          task with an analytical mindset and a can-do attitude. My goal is
          always to deliver quality solutions that not only meet requirements
          but also exceed expectations.
        </Paragraph>
        <Paragraph className=" mt-4">
          Through this website, I&apos;m excited to connect with you by sharing
          my journey, insights, and projects. Whether you&apos;re a developer
          exploring new ideas, a creative looking for fresh inspiration, or
          simply someone with an eye for innovative design, I hope you find
          something here that resonates with you.
        </Paragraph>
        <Paragraph className=" mt-4">
          Come along as I share a world of ideas, where tech meets creativity
          and code blends with storytelling. Here, we&apos;ll uncover the
          endless potential of innovation and celebrate the art of design that
          makes it all come to life. Let&apos;s explore, learn, and be inspired
          together.
        </Paragraph>
        <Paragraph className=" mt-4">
          I&apos;m grateful to have you here and excited to share this journey
          with you. Let&apos;s dive into this world of ideas, creativity, and
          innovation together!
        </Paragraph>
      </div>
    </div>
  );
}
