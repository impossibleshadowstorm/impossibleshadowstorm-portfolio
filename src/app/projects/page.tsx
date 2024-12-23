import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Sumit Saurav",
  description:
    "I'm Sumit Saurav, a developer and digital nomad who loves exploring the world while working remotely.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10"> Things I&apos;ve Built</Heading>
      <Products />
    </Container>
  );
}
