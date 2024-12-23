import { Container } from "@/components/Container";
import { SingleProject } from "@/components/Project";
import { projects } from "@/constants/Projects/projects";
import { Project } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug) as Project | undefined;
  if (project) {
    return {
      title: project.title,
      description: project.description,
    };
  } else {
    return {
      title: "Projects | Sumit Saurav",
      description:
        "I'm Sumit Saurav, a developer and digital nomad who loves exploring the world while working remotely.",
    };
  }
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    redirect("/projects");
  }
  return (
    <Container>
      <SingleProject project={project} />
    </Container>
  );
}
