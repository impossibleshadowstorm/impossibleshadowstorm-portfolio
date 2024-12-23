// Define Experience Interface
export interface Experience {
  designation: string;
  organization: string;
  description: string[];
  location: string;
  badge: string;
  image: string;
}

export const experienceHistory: Experience[] = [
  {
    designation: "System Engineer",
    organization: "Tata Consultancy Services Limited (TCS)",
    description: [
      "Completed a 45-day training program, gaining hands-on experience in Java and PL/SQL and knowledge in Spring Boot for backend development.",
      "Developed automated reports by writing complex Impala SQL queries, improving the accuracy and timeliness of data analysis for various decision-making.",
    ],
    location: "Bangalore",
    badge: "27 June 2024 - Present",
    image: "/images/logos/employment/tcs.png",
  },
  {
    designation: "Full Stack Consultant",
    organization: "Cognify Digital Private Limited",
    description: [
      "Enhanced an Audit System using React.js, Redux, Django, and Docker adding RESTful web services for document management and budget tracking.",
      "Built a private NPM package with React for code reusability and easy integration across projects.",
      "Implemented an ETL system using Python and PostgreSQL for data extraction and transformation, visualizing results with Grafana.",
    ],
    location: "Remote",
    badge: "07 October 2022 - 27 March 2024",
    image: "/images/logos/employment/cognify-light.png",
  },
  {
    designation: "Full Stack Intern",
    organization: "AG Technologies",
    description: [
      "Automated financial reports using Automation Anywhere, improving data processing efficiency.",
      "Developed a web scraper with Python Playwright for organized data extraction.",
      "Built an HR Management System for resume parsing and dashboard visualization with React.js and Django.",
    ],
    location: "Rajasthan",
    badge: "07 June 2022 - 06 October 2022",
    image: "/images/logos/employment/agt.png",
  },
];

// Function to calculate total experience in years
// export function calculateTotalExperience(): number {
//   const currentDate = new Date();
//   const totalExperience = experienceHistory.reduce((total, experience) => {
//     const [start, end] = experience.badge.split(" - ");
//     const startDate = new Date(start);
//     console.log("Name: ", experience.organization);
//     const endDate = end === "Present" ? currentDate : new Date(end);
//     console.log("Start Date: ", startDate);
//     console.log("End Date: ", endDate);
//     const diffInTime = endDate.getTime() - startDate.getTime();
//     console.log("Difference in Time: ", diffInTime);
//     const diffInYears = diffInTime / (1000 * 3600 * 24 * 365);
//     console.log("Difference in Years: ", diffInYears);
//     return total + diffInYears;
//   }, 0);
//   console.log("Total Experience: ", totalExperience);
//   return parseFloat(totalExperience.toFixed(2));
// }

// Function to calculate total experience in years and months
export function calculateTotalExperience(): number {
  const currentDate = new Date();

  const totalMonths = experienceHistory.reduce((total, experience) => {
    const [start, end] = experience.badge.split(" - ");
    const startDate = new Date(start);
    const endDate = end === "Present" ? currentDate : new Date(end);

    const diffInTime = endDate.getTime() - startDate.getTime();

    const diffInMonths = diffInTime / (1000 * 3600 * 24 * 30.4375); // Average days in a month

    return total + Math.round(diffInMonths); // Round to the nearest month
  }, 0);

  const totalYears = totalMonths / 12;

  return parseFloat(totalYears.toFixed(2)); // Convert to years with one decimal
}
