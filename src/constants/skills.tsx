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
        src: "/images/logos/python.svg",
        className: "h-10 w-14",
      },
      {
        id: 2,
        title: "Java",
        src: "/images/logos/java.svg",
        className: "h-10 w-10",
      },
      {
        id: 3,
        title: "Java Script",
        src: "/images/logos/js.svg",
        className: "h-10 w-10",
      },
      {
        id: 4,
        title: "Dart",
        src: "/images/logos/dart.svg",
        className: "h-20 w-10",
      },
      {
        id: 5,
        title: "HTML",
        src: "/images/logos/html.svg",
        className: "h-12 w-10",
      },
      {
        id: 6,
        title: "CSS",
        src: "/images/logos/css.svg",
        className: "h-12 w-10",
      },
    ],
  },
  {
    category: "Frontend Technologies",
    skillSets: [
      {
        id: 1,
        title: "React.js",
        src: "/images/logos/react.svg",
        className: "h-10 w-10",
      },
      {
        id: 2,
        title: "Next.js",
        src: "/images/logos/nextjs.svg",
        className: "h-10 w-20",
      },
      {
        id: 3,
        title: "Redux",
        src: "/images/logos/redux.svg",
        className: "h-10 w-10",
      },
      {
        id: 4,
        title: "MUI (Material-UI)",
        src: "/images/logos/mui.svg",
        className: "h-10 w-10",
      },
      {
        id: 5,
        title: "Ant Design",
        src: "/images/logos/antd.svg",
        className: "h-10 w-10",
      },
      {
        id: 6,
        title: "Tailwind CSS",
        src: "/images/logos/tailwind.svg",
        className: "h-10 w-10",
      },
      {
        id: 7,
        title: "Flutter",
        src: "/images/logos/flutter.svg",
        className: "h-10 w-10",
      },
      {
        id: 8,
        title: "Framer Motion",
        src: "/images/logos/framer.svg",
        className: "h-10 w-10",
      },
    ],
  },
  {
    category: "Backend Technologies",
    skillSets: [
      {
        id: 1,
        title: "Node.js",
        src: "/images/logos/node.svg",
        className: "h-10 w-12",
      },
      {
        id: 2,
        title: "Django",
        src: "/images/logos/django.svg",
        className: "h-10 w-10",
      },
      {
        id: 3,
        title: "Spring Boot",
        src: "/images/logos/spring.svg",
        className: "h-10 w-10",
      },
      {
        id: 4,
        title: "RESTful Web Services",
        src: "/images/logos/rest.svg",
        className: "h-10 w-10",
      },
    ],
  },
  {
    category: "Database Management",
    skillSets: [
      {
        id: 1,
        title: "Mongo DB",
        src: "/images/logos/mongodb.svg",
        className: "h-10 w-12",
      },
      {
        id: 2,
        title: "Firebase",
        src: "/images/logos/firebase.svg",
        className: "h-10 w-10",
      },
      {
        id: 3,
        title: "PostgresSQL",
        src: "/images/logos/postgresql.svg",
        className: "h-10 w-10",
      },
      {
        id: 4,
        title: "MySQL",
        src: "/images/logos/mysql.svg",
        className: "h-10 w-10",
      },
    ],
  },
  {
    category: "DevOps and Cloud",
    skillSets: [
      {
        id: 1,
        title: "Docker",
        src: "/images/logos/docker.svg",
        className: "h-10 w-12",
      },
      {
        id: 2,
        title: "Grafana",
        src: "/images/logos/grafana.svg",
        className: "h-10 w-10",
      },
      {
        id: 3,
        title: "Terraform",
        src: "/images/logos/terraform.svg",
        className: "h-10 w-10",
      },
      {
        id: 4,
        title: "AWS",
        src: "/images/logos/aws.svg",
        className: "h-10 w-10",
      },
      {
        id: 5,
        title: "GCP",
        src: "/images/logos/gcp.svg",
        className: "h-10 w-10",
      },
      {
        id: 6,
        title: "Azure",
        src: "/images/logos/azure.svg",
        className: "h-10 w-10",
      },
      {
        id: 7,
        title: "Vercel",
        src: "/images/logos/vercel.svg",
        className: "h-10 w-10",
      },
    ],
  },
  {
    category: "Version Control and Project Management",
    skillSets: [
      {
        id: 1,
        title: "Git",
        src: "/images/logos/github.svg",
        className: "h-10 w-12",
      },
      {
        id: 2,
        title: "Gitlab",
        src: "/images/logos/gitlab.svg",
        className: "h-10 w-10",
      },
      {
        id: 3,
        title: "Bitbucket",
        src: "/images/logos/bitbucket.svg",
        className: "h-10 w-10",
      },
      {
        id: 4,
        title: "Jira",
        src: "/images/logos/jira.svg",
        className: "h-10 w-10",
      },
    ],
  },
  {
    category: "Operating Systems",
    skillSets: [
      {
        id: 1,
        title: "Linux",
        src: "/images/logos/linux.svg",
        className: "h-10 w-12",
      },
      {
        id: 2,
        title: "macOS",
        src: "/images/logos/macos.svg",
        className: "h-10 w-10",
      },
      {
        id: 3,
        title: "Windows",
        src: "/images/logos/windows.svg",
        className: "h-10 w-10",
      },
    ],
  },
  {
    category: "Development Tools",
    skillSets: [
      {
        id: 1,
        title: "Visual Studio Code",
        src: "/images/logos/android-studio.svg",
        className: "h-10 w-12",
      },
      {
        id: 2,
        title: "Android Studio",
        src: "/images/logos/vs-code.svg",
        className: "h-10 w-10",
      },
      {
        id: 3,
        title: "IntelliJ IDEA",
        src: "/images/logos/intellij-idea.svg",
        className: "h-10 w-10",
      },
      {
        id: 4,
        title: "Xcode",
        src: "/images/logos/xcode.svg",
        className: "h-10 w-10",
      },
    ],
  },
  {
    category: "Design and Prototyping",
    skillSets: [
      {
        id: 1,
        title: "Figma",
        src: "/images/logos/figma.svg",
        className: "h-10 w-12",
      },
      {
        id: 2,
        title: "Adobe XD",
        src: "/images/logos/adobe-xd.svg",
        className: "h-10 w-10",
      },
    ],
  },
  {
    category: "CMS and Website Builders",
    skillSets: [
      {
        id: 1,
        title: "Wordpress",
        src: "/images/logos/wordpress.svg",
        className: "h-10 w-12",
      },
    ],
  },
];
