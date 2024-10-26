interface SkillItem {
  category: string;
  skillSets: StackItem[];
}

interface StackItem {
  id: number;
  title: string;
  src: string;
  className: string;
}

export const skills: SkillItem[] = [
  {
    category: "Programming Languages",
    skillSets: [
      {
        id: 1,
        title: "Python",
        src: "/images/logos/python.webp",
        className: "h-10 w-14",
      },
      {
        id: 2,
        title: "Java",
        src: "/images/logos/java.png",
        className: "h-10 w-20",
      },
      {
        id: 3,
        title: "Java Script",
        src: "/images/logos/js.webp",
        className: "h-10 w-10",
      },
      {
        id: 4,
        title: "Dart",
        src: "/images/logos/dart.png",
        className: "h-20 w-20",
      },
    ],
  },
  {
    category: "Frontend Technologies",
    skillSets: [
      {
        id: 1,
        title: "React.js",
        src: "/images/logos/react.png",
        className: "h-10 w-14",
      },
      {
        id: 2,
        title: "Next.js",
        src: "/images/logos/nextjs.png",
        className: "h-10 w-20",
      },
      {
        id: 3,
        title: "Redux",
        src: "/images/logos/redux.png",
        className: "h-10 w-20",
      },
      {
        id: 4,
        title: "MUI (Material-UI)",
        src: "/images/logos/mui.png",
        className: "h-10 w-20",
      },
      {
        id: 5,
        title: "Ant Design",
        src: "/images/logos/antd.svg",
        className: "h-10 w-20",
      },
      {
        id: 6,
        title: "Tailwind CSS",
        src: "/images/logos/tailwind.svg",
        className: "h-10 w-20",
      },
    ],
  },
];
