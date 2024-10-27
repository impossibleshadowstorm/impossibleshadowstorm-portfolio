import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  description: string;
  thumbnail: StaticImageData;
  images: StaticImageData[] | string[];
  href: string;
  repository?: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};

export type CategoryProject = {
  projects: Project[];
  title: string;
}
