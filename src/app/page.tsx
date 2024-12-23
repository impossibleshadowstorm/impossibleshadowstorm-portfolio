import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Skills } from "@/components/Skills";
import { calculateTotalExperience } from "@/constants/experience";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Sumit</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m passionate about crafting{" "}
        <Highlight>innovative web solutions</Highlight> that balance
        functionality and visual appeal, optimizing both{" "}
        <Highlight>performance and design</Highlight>.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        With{" "}
        <Highlight>
          {calculateTotalExperience()} years of development experience
        </Highlight>
        , I thrive on solving complex problems that scale effortlessly.
      </Paragraph>
      <Heading as="h2" className="text-lg md:text-lg lg:text-lg mt-20 mb-4">
        My Skill sets
      </Heading>
      <Skills />
    </Container>
  );
}
