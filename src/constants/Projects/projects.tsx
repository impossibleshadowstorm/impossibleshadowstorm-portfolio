// ETL Project
import etlProjectBannerImage from "public/images/projects/etl-system/banner.png";
// Audit Tool
import auditToolBannerImage from "public/images/projects/audit-tool/banner.png";
// HR Management Tool
import hrManagementBannerImage from "public/images/projects/hr-management/banner.png";
// Cognify Digital Website
import cognifyDigitalBannerImage from "public/images/projects/cognify-digital/banner.png";
// Fery Rides
import feryRidesBannerImage from "public/images/projects/fery-rides/banner.png";
// Reusify UI
import reusifyUIBannerImage from "public/images/projects/reusify-ui/banner.png";
// NoQ
import noqBannerImage from "public/images/projects/noq/banner.png";
// Scrap Up
import scrapUpBannerImage from "public/images/projects/scrap-up/banner.png";
import scrapUpAboutImage from "public/images/projects/scrap-up/about.png";
// Zuluresh
import zulureshBannerImage from "public/images/projects/zuluresh/banner.png";
// Invoice Data Extractor
import invoiceDataExtractorBannerImage from "public/images/projects/invoice-data-extractor/banner.png";
// ALS App
import alsAppBannerImage from "public/images/projects/als-app/banner.png";
// Nri For Shaadi
import NriFrShaadiBannerImage from "public/images/projects/nri-for-shaadi/banner.png";
// Hydroponics Store
import hydroponicStoreBannerImage from "public/images/projects/hydroponic-store/banner.png";
// Single Page Portfolio
import singlePagePortfolioBannerImage from "public/images/projects/single-page-portfolio/banner.png";
import singlePagePortfolioWhiteImage from "public/images/projects/single-page-portfolio/white.png";
import singlePagePortfolioBlackImage from "public/images/projects/single-page-portfolio/black.png";
import singlePagePortfolioLightImage from "public/images/projects/single-page-portfolio/light.png";
import ETLSystem from "./etl-system";
import AuditTool from "./audit-tool";
import HRManagementTool from "./hr-management-tool";
import CognifyDigital from "./cognify-digital";
import ReusifyUI from "./reusify-ui";
import FeryRides from "./fery-rides";
import NoQ from "./noq";
import ScrapUp from "./scrap-up";
import Zuluresh from "./zuluresh";
import InvoiceDataExtractor from "./invoice-data-extractor";
import ALSApp from "./als-app";
import NRIForShaadi from "./nri-for-shaadi";
import HydroponicStore from "./hydroponic-store";
import SinglePagePortfolio from "./single-page-portfolio";

export const projects = [
  {
    href: "#",
    title: "ETL System",
    description:
      "Designed an ETL system, reducing data processing time by 70% and improving data accuracy, enabling faster decision-making.",
    thumbnail: etlProjectBannerImage,
    images: [etlProjectBannerImage],
    stack: [
      "Python",
      "PostgreSQL",
      "Grafana",
      "Docker",
      "AWS",
      "GCP",
      "Azure",
      "Terraform",
    ],
    slug: "etl-system",
    content: <ETLSystem />,
  },
  {
    href: "#",
    title: "Audit Tool",
    description:
      "Developed a secure document management and budget tracking system with role-based access and streamlined deployment using RESTful web services and Docker.",
    thumbnail: auditToolBannerImage,
    images: [auditToolBannerImage],
    stack: [
      "React.js",
      "MUI",
      "Python",
      "Django",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    slug: "audit-tool",
    content: <AuditTool />,
  },
  {
    href: "#",
    title: "HR Management Tool",
    description:
      "Automated resume extraction and created dashboards for efficient, data-driven HR decision-making.",
    thumbnail: hrManagementBannerImage,
    images: [hrManagementBannerImage],
    stack: ["React.js", "Python", "Django", "SQLite", "MUI", "Redux"],
    slug: "hr-management-tool",
    content: <HRManagementTool />,
  },
  {
    href: "https://cognifydigital.in",
    title: "Cognify Digital",
    description:
      "Developed a responsive and SEO-optimized website with an employee portal for automated document generation using Next.js, Prisma, and PostgreSQL.",
    thumbnail: cognifyDigitalBannerImage,
    images: [cognifyDigitalBannerImage],
    stack: [
      "Next.js",
      "Tailwind",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "CI/CD Pipeline",
    ],
    slug: "cognify-digital",
    content: <CognifyDigital />,
  },
  {
    href: "https://play.google.com/store/apps/details?id=com.feryrides.app.fery_rides",
    title: "Fery Rides: Women Scooty Taxi",
    description:
      "Developed a scooty taxi app for women with real-time geolocation, boosting ride bookings and customer satisfaction.",
    thumbnail: feryRidesBannerImage,
    images: [feryRidesBannerImage],
    stack: ["Flutter", "Firebase", "Google Maps SDK"],
    slug: "fery-rides-women-scooty-taxi",
    content: <FeryRides />,
  },
  {
    href: "#",
    title: "Reusify UI - NPM Package",
    description:
      "Built a reusable, scalable UI component library that standardized design across internal projects, enhancing development speed and consistency.",
    thumbnail: reusifyUIBannerImage,
    images: [reusifyUIBannerImage],
    stack: ["React.js", "CSS", "Rollup"],
    slug: "reusify-ui-npm-package",
    content: <ReusifyUI />,
  },
  {
    href: "#",
    title: "NoQ: QueueLess Shopping",
    description:
      "Built a personal queue-less shopping app concept, leveraging QR code scanning for seamless product identification.",
    thumbnail: noqBannerImage,
    images: [noqBannerImage],
    stack: ["Flutter", "Firebase", "OR Code Operations"],
    slug: "noq-queueLess-shopping",
    repository: "https://github.com/impossibleshadowstorm/NoQueue",
    content: <NoQ />,
  },
  {
    href: "https://waste2wealth-umber.vercel.app/",
    title: "Scrap Up",
    description:
      "Developed a waste pickup booking app where users can schedule pickups at preferred times, allowing agents to collect waste and process payments, simplifying eco-friendly disposal.",
    thumbnail: scrapUpBannerImage,
    images: [scrapUpBannerImage, scrapUpAboutImage],
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    slug: "scrap-up",
    repository: "https://github.com/impossibleshadowstorm/waste2wealth",
    content: <ScrapUp />,
  },
  // Zuluresh
  {
    href: "https://play.google.com/store/apps/details?id=com.zuluresh&hl=en_IN",
    title: "Zuluresh - Chicken Fish & Meat",
    description:
      "A mobile app for ordering premium poultry, seafood, and meat with doorstep delivery and secure, seamless transactions.",
    thumbnail: zulureshBannerImage,
    images: [zulureshBannerImage],
    stack: ["Flutter", "Firebase"],
    slug: "zuluresh-chicken-fish-meat",
    content: <Zuluresh />,
  },
  {
    href: "#",
    title: "Invoice Data Extractor",
    description:
      "A mobile app for ordering premium poultry, seafood, and meat with doorstep delivery and secure, seamless transactions.",
    thumbnail: invoiceDataExtractorBannerImage,
    images: [invoiceDataExtractorBannerImage],
    stack: ["Python", "Pytesseract", "PDFMiner", "Pdf2Image"],
    repository:
      "https://github.com/impossibleshadowstorm/invoice_data_extracter",
    slug: "invoice-data-extractor",
    content: <InvoiceDataExtractor />,
  },
  // ALS App
  {
    href: "https://play.google.com/store/apps/details?id=de.ambulanzpartner.alsapp&hl=en",
    title: "ALS App",
    description:
      "A comprehensive app for ALS patients to track disease progression, manage care, and receive tailored support and insights for a more autonomous treatment journey.",
    thumbnail: alsAppBannerImage,
    images: [alsAppBannerImage],
    stack: ["Flutter", "Firebase"],
    slug: "als-app",
    content: <ALSApp />,
  },
  // Nri
  {
    href: "https://play.google.com/store/apps/details?id=com.nrisingles&hl=en_IN",
    title: "NRIForShaadi - NRI Shaadi",
    description:
      "A global matchmaking app for NRI singles from Punjabi, Gujarati, Tamil, Telugu, Marathi, Sikh, and other Indian communities, enabling members worldwide to find their soulmate based on real-time proximity and shared interests.",
    thumbnail: NriFrShaadiBannerImage,
    images: [NriFrShaadiBannerImage],
    stack: ["Flutter", "Firebase"],
    slug: "nri-for-shaadi-nri-shaadi",
    content: <NRIForShaadi />,
  },
  // Hydroponic Store
  {
    href: "#",
    title: "Hydroponic Store",
    description:
      "A personal project connecting wholesale buyers, farmers, and transporters to streamline order requests, approvals, and deliveries, enabling efficient farm-to-buyer transactions via a Flutter and Firebase-powered app.",
    thumbnail: hydroponicStoreBannerImage,
    images: [hydroponicStoreBannerImage],
    stack: ["Flutter", "Firebase"],
    slug: "hydroponic-store",
    repository: "https://github.com/impossibleshadowstorm/Hydroponics-Store",
    content: <HydroponicStore />,
  },
  {
    href: "https://single-page-portfolio-gules.vercel.app/",
    title: "Single Page Portfolio",
    description:
      "A responsive, Dockerized React app featuring a theme switcher with four color options (light, black, grey, and white), built using Context API and styled with Tailwind CSS for seamless, dynamic user experience.",
    thumbnail: singlePagePortfolioBannerImage,
    images: [
      singlePagePortfolioBannerImage,
      singlePagePortfolioLightImage,
      singlePagePortfolioBlackImage,
      singlePagePortfolioWhiteImage,
    ],
    stack: ["React", "React Context API", "Tailwind CSS", "Docker"],
    repository:
      "https://github.com/impossibleshadowstorm/single-page-portfolio",
    slug: "single-page-portfolio",
    content: <SinglePagePortfolio />,
  },
];

export const categorizedProjects = [
  {
    title: "Tools",
    projects: [
      {
        href: "#",
        title: "ETL System",
        description:
          "Designed an ETL system, reducing data processing time by 70% and improving data accuracy, enabling faster decision-making.",
        thumbnail: etlProjectBannerImage,
        images: [etlProjectBannerImage],
        stack: [
          "Python",
          "PostgreSQL",
          "Grafana",
          "Docker",
          "AWS",
          "GCP",
          "Azure",
          "Terraform",
        ],
        slug: "etl-system",
        content: <ETLSystem />,
      },
      {
        href: "#",
        title: "Audit Tool",
        description:
          "Developed a secure document management and budget tracking system with role-based access and streamlined deployment using RESTful web services and Docker.",
        thumbnail: auditToolBannerImage,
        images: [auditToolBannerImage],
        stack: [
          "React.js",
          "MUI",
          "Python",
          "Django",
          "PostgreSQL",
          "Docker",
          "AWS",
        ],
        slug: "audit-tool",
        content: <AuditTool />,
      },
      {
        href: "#",
        title: "HR Management Tool",
        description:
          "Automated resume extraction and created dashboards for efficient, data-driven HR decision-making.",
        thumbnail: hrManagementBannerImage,
        images: [hrManagementBannerImage],
        stack: ["React.js", "Python", "Django", "SQLite", "MUI", "Redux"],
        slug: "hr-management-tool",
        content: <HRManagementTool />,
      },
      {
        href: "#",
        title: "Reusify UI - NPM Package",
        description:
          "Built a reusable, scalable UI component library that standardized design across internal projects, enhancing development speed and consistency.",
        thumbnail: reusifyUIBannerImage,
        images: [reusifyUIBannerImage],
        stack: ["React.js", "CSS", "Rollup"],
        slug: "reusify-ui-npm-package",
        content: <ReusifyUI />,
      },
      {
        href: "#",
        title: "Invoice Data Extractor",
        description:
          "A mobile app for ordering premium poultry, seafood, and meat with doorstep delivery and secure, seamless transactions.",
        thumbnail: invoiceDataExtractorBannerImage,
        images: [invoiceDataExtractorBannerImage],
        stack: ["Python", "Pytesseract", "PDFMiner", "Pdf2Image"],
        repository:
          "https://github.com/impossibleshadowstorm/invoice_data_extracter",
        slug: "invoice-data-extractor",
        content: <InvoiceDataExtractor />,
      },
    ],
  },
  {
    title: "Web Applications",
    projects: [
      {
        href: "https://cognifydigital.in",
        title: "Cognify Digital",
        description:
          "Developed a responsive and SEO-optimized website with an employee portal for automated document generation using Next.js, Prisma, and PostgreSQL.",
        thumbnail: cognifyDigitalBannerImage,
        images: [cognifyDigitalBannerImage],
        stack: [
          "Next.js",
          "Tailwind",
          "Prisma",
          "PostgreSQL",
          "Docker",
          "CI/CD Pipeline",
        ],
        slug: "cognify-digital",
        content: <CognifyDigital />,
      },
      {
        href: "https://waste2wealth-umber.vercel.app/",
        title: "Scrap Up",
        description:
          "Developed a waste pickup booking app where users can schedule pickups at preferred times, allowing agents to collect waste and process payments, simplifying eco-friendly disposal.",
        thumbnail: scrapUpBannerImage,
        images: [scrapUpBannerImage, scrapUpAboutImage],
        stack: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        slug: "scrap-up",
        repository: "https://github.com/impossibleshadowstorm/waste2wealth",
        content: <ScrapUp />,
      },
      {
        href: "https://single-page-portfolio-gules.vercel.app/",
        title: "Single Page Portfolio",
        description:
          "A responsive, Dockerized React app featuring a theme switcher with four color options (light, black, grey, and white), built using Context API and styled with Tailwind CSS for seamless, dynamic user experience.",
        thumbnail: singlePagePortfolioBannerImage,
        images: [
          singlePagePortfolioBannerImage,
          singlePagePortfolioLightImage,
          singlePagePortfolioBlackImage,
          singlePagePortfolioWhiteImage,
        ],
        stack: ["React", "React Context API", "Tailwind CSS", "Docker"],
        repository:
          "https://github.com/impossibleshadowstorm/single-page-portfolio",
        slug: "single-page-portfolio",
        content: <SinglePagePortfolio />,
      },
    ],
  },
  {
    title: "Android / iOS Applications",
    projects: [
      {
        href: "https://play.google.com/store/apps/details?id=com.feryrides.app.fery_rides",
        title: "Fery Rides: Women Scooty Taxi",
        description:
          "Developed a scooty taxi app for women with real-time geolocation, boosting ride bookings and customer satisfaction.",
        thumbnail: feryRidesBannerImage,
        images: [feryRidesBannerImage],
        stack: ["Flutter", "Firebase", "Google Maps SDK"],
        slug: "fery-rides-women-scooty-taxi",
        content: <FeryRides />,
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.zuluresh&hl=en_IN",
        title: "Zuluresh - Chicken Fish & Meat",
        description:
          "A mobile app for ordering premium poultry, seafood, and meat with doorstep delivery and secure, seamless transactions.",
        thumbnail: zulureshBannerImage,
        images: [zulureshBannerImage],
        stack: ["Flutter", "Firebase"],
        slug: "zuluresh-chicken-fish-meat",
        content: <Zuluresh />,
      },
      {
        href: "https://play.google.com/store/apps/details?id=de.ambulanzpartner.alsapp&hl=en",
        title: "ALS App",
        description:
          "A comprehensive app for ALS patients to track disease progression, manage care, and receive tailored support and insights for a more autonomous treatment journey.",
        thumbnail: alsAppBannerImage,
        images: [alsAppBannerImage],
        stack: ["Flutter", "Firebase"],
        slug: "als-app",
        content: <ALSApp />,
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.nrisingles&hl=en_IN",
        title: "NRIForShaadi - NRI Shaadi",
        description:
          "A global matchmaking app for NRI singles from Punjabi, Gujarati, Tamil, Telugu, Marathi, Sikh, and other Indian communities, enabling members worldwide to find their soulmate based on real-time proximity and shared interests.",
        thumbnail: NriFrShaadiBannerImage,
        images: [NriFrShaadiBannerImage],
        stack: ["Flutter", "Firebase"],
        slug: "nri-for-shaadi-nri-shaadi",
        content: <NRIForShaadi />,
      },
      {
        href: "#",
        title: "Hydroponic Store",
        description:
          "A personal project connecting wholesale buyers, farmers, and transporters to streamline order requests, approvals, and deliveries, enabling efficient farm-to-buyer transactions via a Flutter and Firebase-powered app.",
        thumbnail: hydroponicStoreBannerImage,
        images: [hydroponicStoreBannerImage],
        stack: ["Flutter", "Firebase"],
        slug: "hydroponic-store",
        repository: "https://github.com/impossibleshadowstorm/Hydroponics-Store",
        content: <HydroponicStore />,
      },
      {
        href: "#",
        title: "NoQ: QueueLess Shopping",
        description:
          "Built a personal queue-less shopping app concept, leveraging QR code scanning for seamless product identification.",
        thumbnail: noqBannerImage,
        images: [noqBannerImage],
        stack: ["Flutter", "Firebase", "OR Code Operations"],
        slug: "noq-queueLess-shopping",
        repository: "https://github.com/impossibleshadowstorm/NoQueue",
        content: <NoQ />,
      },
    ],
  }
];
