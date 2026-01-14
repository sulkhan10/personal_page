"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaStore,
  FaGithub,
  FaGlobe,
  FaCircle,
} from "react-icons/fa"; // Import React icons
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPhp,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiWordpress,
  SiAmazonwebservices,
  SiWhatsapp,
  SiGmail,
  SiRedux,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
  SiApollographql,
  SiSequelize,
  SiGraphql,
  SiMongodb,
  SiRedis,
  SiJest,
  SiDocker,
  SiSwagger,
} from "react-icons/si";

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const defaultProjectImages = [
    "/retro-card.svg",
    "/retro-card-2.svg",
    "/retro-card-3.svg",
  ];
  const defaultProjectImage = defaultProjectImages[0];
  const stackItemClass =
    "retro-chip hover:-translate-y-1 transition-transform duration-200 ease-out transform flex flex-col justify-center items-center text-base";
  const projectLinkConfig = [
    { key: "github", label: "GitHub", icon: FaGithub },
    { key: "showcase", label: "Showcase", icon: FaGlobe },
    { key: "ios", label: "iOS App Store", icon: FaStore },
    { key: "playstore", label: "Play Store", icon: FaStore },
  ];

  const getProjectImages = (project) => {
    if (!project) {
      return [];
    }
    if (Array.isArray(project.images) && project.images.length > 0) {
      return project.images;
    }
    if (Array.isArray(project.image) && project.image.length > 0) {
      return project.image;
    }
    if (project.image) {
      if (project.image === defaultProjectImage) {
        return defaultProjectImages;
      }
      return [project.image];
    }
    return defaultProjectImages;
  };

  const projectImages = getProjectImages(activeProject);
  const totalImages = projectImages.length;
  const hasMultipleImages = totalImages > 1;
  const currentImage =
    projectImages[activeImageIndex % Math.max(totalImages, 1)] ||
    defaultProjectImage;

  useEffect(() => {
    if (!activeProject) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
      if (event.key === "ArrowRight" && totalImages > 1) {
        event.preventDefault();
        setActiveImageIndex((prev) => (prev + 1) % totalImages);
      }
      if (event.key === "ArrowLeft" && totalImages > 1) {
        event.preventDefault();
        setActiveImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
      }
    };

    if (activeProject) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject, totalImages]);

  useEffect(() => {
    if (!activeProject) {
      return;
    }
    setActiveImageIndex(0);
  }, [activeProject]);

  const dataPorto = [
    {
      title: "KOSMO App iOS",
      desc: "Mobile app for home services and monthly billing payments.",
      techStack: "React Native, React, PHP, MySQL",
      period: "October 2024",
      note: "Showcase",
      image: [
        "/kosmoiosapp.png",

      ],
      links: {
        ios: "https://apps.apple.com/id/app/kosmo-komunitas-modern/id1540687660",
      },
    },
    {
      title: "KOSMO App Android",
      desc: "Mobile app for home services and monthly billing payments.",
      techStack: "React Native, React, PHP, MySQL",
      period: "October 2024",
      note: "Showcase",
      image: [
        "/kosmoandroid.png",
      ],
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.smartcommunityid&hl=id&pli=1",
      },
    },
    {
      title: "NutriCalc",
      desc: "Web app to count BMI, energy intake, and food calories.",
      techStack: "ReactJS, SQLite",
      period: "January 2025",
      note: "Repo",
      image: [
        "/nutricalc.png",
      ],
      links: {
        showcase:
          "https://nutri-calc-lwlnqs90e-gals-projects-8328d421.vercel.app/",
      },
    },
    {
      title: "The SG Times",
      desc: "Web-based news portal.",
      techStack: "ReactJS, SQLite",
      period: "November 2024",
      note: "Showcase",
      image: [
        "/sgtimes.png",
      ],
      links: {
        showcase: "https://news-portal-angular-zzie.vercel.app/",
      },
    },
    {
      title: "wilieeffendi.com",
      desc: "landing page untuk freelancer",
      techStack: "NextJS",
      image: defaultProjectImage,
      links: {
        showcase: "https://www.wilieeffendi.com/",
      },
    },
    {
      title: "UKM Go Digital",
      desc: "landing page untuk perusahaan",
      techStack: "NextJS",
      image: defaultProjectImage,
      links: {
        showcase: "https://ukmgodigital.com",
      },
    },
    {
      title: "JPM Jasa Web",
      desc: "landing page untuk perusahaan",
      techStack: "WordPress",
      image: defaultProjectImage,
      links: {
        showcase: "https://jpmjasaweb.com",
      },
    },
    {
      title: "DParagon (iOS/Android)",
      desc: "Mobile app to book exclusive boarding house.",
      techStack: "React Native",
      period: "January 2026",
      note: "App Store (iOS) / Play Store (Android)",
      image: [
        "/dpandroid.png",
        "/dpios.png"
      ],
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.dparagon.app&hl=id",
        ios: "https://apps.apple.com/id/app/dparagon/id1439995162",
      },
    },
    {
      title: "MyRDL (Android)",
      desc: "Mobile app to manage employees' attendance.",
      techStack: "React Native",
      period: "January 2026",
      note: "Play Store (Android)",
      image: [
        '/myrdlandroid.png'
      ],
      links: {
        playstore : 'https://play.google.com/store/apps/details?id=com.absensidparagon'
      },
    },
    {
      title: "Djurkam (iOS/Android)",
      desc: "Mobile app to book exclusive boarding house, hotels, villas.",
      techStack: "React Native",
      period: "January 2026",
      note: "App Store (iOS) / Play Store (Android)",
      image: [
        '/djurkamandroid.png',
        '/djurkamios.png'
      ],
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.djuragankamar.ids",
        ios: "https://apps.apple.com/id/app/djurkam/id1451477967",
      },
    },
    {
      title: "Djurkam Mitra (iOS/Android)",
      desc: "Mobile app to manage exclusive boarding house, hotels, villas.",
      techStack: "React Native",
      period: "January 2026",
      note: "App Store (iOS) / Play Store (Android)",
      image: [
        "/djurkammitraandroid.png",
        "/djurkammitraios.png"
      ],
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.aldrich.djurkammitras",
        ios: "https://apps.apple.com/id/app/djurkam-mitra/id1540687660",
      },
    },
    {
      title: "GORO Digital (iOS/Android)",
      desc: "Mobile local marketplace application.",
      techStack: "React Native",
      period: "January 2026",
      note: "App Store (iOS) / Play Store (Android)",
      image: [
        "/goroandroid.png",
        "/goroios.png"
      ],
      links: {
        playstore:
          "https://play.google.com/store/apps/details?id=com.djuraganvoucher.member",
        ios: "https://apps.apple.com/id/app/goro-digital/id1510869798",
      },
    },
    {
      title: "Livy Mobile Application",
      desc: "Mobile app for self-improvement counseling and AI chatbot.",
      techStack:
        "React Native, Jotai, React, Vue, Express JS, MongoDB, PostgreSQL, Jest",
      period: "March 2023",
      note: "Repo / Showcase",
      image: defaultProjectImage,
      links: {},
    },
    {
      title: "Sulkhans Food Web Application",
      desc: "Web app to display restaurant menus.",
      techStack: "ReactJS, Express.js, PostgreSQL, AWS",
      period: "February 2023",
      note: "Repo / Showcase",
      image: defaultProjectImage,
      links: {},
    },
    {
      title: "Sulkhans Food Mobile Application",
      desc: "Mobile app to display restaurant menus.",
      techStack:
        "React Native, Redux, React, Express JS, Apollo Server, PostgreSQL, AWS",
      period: "February 2023",
      note: "Repo",
      image: defaultProjectImage,
      links: {},
    },
  ];

  const educationData = [
    {
      school: "Hacktiv8",
      location: "Jakarta, Indonesia",
      program: "Full Stack JavaScript Immersive Program",
      period: "November 2022 - March 2023",
      note: "Score: 91/100 (Transcript)",
    },
    {
      school: "Universitas Gadjah Mada",
      location: "Yogyakarta, Indonesia",
      program: "Faculty of Medicine",
      period: "July 2013 - July 2018 (Unfinished)",
    },
    {
      school: "SMA Negeri 1 Muntilan",
      location: "Magelang, Indonesia",
      program: "Math and Science",
      period: "July 2010 - July 2013",
    },
  ];

  const experienceData = [
    {
      role: "Freelance Front End Developer",
      location: "Yogyakarta, Indonesia",
      period: "February 2023 - May 2023",
    },
    {
      role: "Full Stack Developer",
      company: "PT Transforme Indonesia",
      location: "Jakarta, Indonesia",
      period: "May 2023 - March 2025",
    },
    {
      role: "Mobile Developer",
      company: "PT Royal D'Paragon Land",
      location: "Yogyakarta, Indonesia",
      period: "March 2025 - February 2026",
    },
  ];

  const certificationData = [
    {
      issuer: "Dicoding",
      title: "Learn Basic Javascript Programming",
      issued: "September 2022",
      expires: "September 2025",
      credential: "ERZRM3OMWPYV",
    },
    {
      issuer: "Dicoding",
      title: "Learn Basic Web Programming",
      issued: "September 2022",
      expires: "September 2025",
      credential: "N9ZO7WQD6ZG5",
    },
    {
      issuer: "Dicoding",
      title: "Learn Basic Front-End Web Programming",
      issued: "September 2022",
      expires: "September 2025",
      credential: "1RXYMK121XVM",
    },
    {
      issuer: "Dicoding",
      title: "Learn Basic DevOps",
      issued: "September 2022",
      expires: "September 2025",
      credential: "MRZM43V1NXYQ",
    },
  ];

  return (
    <div className="min-h-screen text-[var(--retro-foreground)]">
      <main className="flex flex-col min-h-screen gap-12 row-start-2 items-center sm:items-start max-w-3xl mx-auto retro-frame retro-scanlines bg-[var(--retro-panel)]">
        <div
          className="w-full mx-auto px-6 py-16 retro-appear"
          style={{ animationDelay: "0.05s" }}
        >
          {/* Profile Section */}
          <div className="flex flex-col items-center space-x-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQE2PGTUJ9f-KQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693303072350?e=2147483647&v=beta&t=pCIqr-ImDrl203hpZzoasyvS5JsaH9ayd9StkH0yxr4"
              alt="Profile Picture"
              className="w-36 h-36 rounded-full object-cover border-2 border-[var(--retro-border)] shadow-[0_0_0_4px_#05070c]"
            />

            <div>
              <h2 className="retro-title text-center text-3xl sm:text-4xl mt-4 text-[var(--retro-accent)]">
                Sulkhan Galang Sakti
              </h2>
              <p className="text-[var(--retro-foreground)] text-center text-base tracking-[0.3em] uppercase mt-2">
                Software Developer
              </p>
              <p className="text-[var(--retro-muted)] text-center text-lg mt-2">
                Magelang, Indonesia |{" "}
                <a
                  href="tel:+6285858999264"
                  className="hover:text-[var(--retro-accent)]"
                >
                  +6285858999264
                </a>{" "}
                |{" "}
                <a
                  href="mailto:sulkhangalangsakti@gmail.com"
                  className="hover:text-[var(--retro-accent)]"
                >
                  sulkhangalangsakti@gmail.com
                </a>
              </p>
              {/* Social Icons */}
              <div className="mt-4 flex items-center justify-center space-x-4 text-[var(--retro-accent)]">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/sulkhangalangsakti/"
                  className="hover:text-[var(--retro-accent-2)]"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sulkhan10"
                  className="hover:text-[var(--retro-accent-2)]"
                >
                  <FaGithub className="text-3xl" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/6285858999264?text=Hi%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  className="hover:text-[var(--retro-accent-2)]"
                >
                  <SiWhatsapp className="text-3xl" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:sulkhangalangsakti@gmail.com?subject=Inquiry&body=Hi,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  className="hover:text-[var(--retro-accent-2)]"
                >
                  <SiGmail className="text-3xl" />
                </a>
                <a
                  href="/"
                  className="hover:text-[var(--retro-accent-2)]"
                  aria-label="Website"
                >
                  <FaGlobe className="text-3xl" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="mt-8 retro-panel px-8 py-4 transition-transform duration-200 ease-out hover:-translate-y-1 retro-appear"
            style={{ animationDelay: "0.12s" }}
          >
            <a
              href="#"
              className="flex items-center text-lg font-semibold text-[var(--retro-accent)] hover:text-[var(--retro-accent-2)]"
            >
              <span className="mr-2">👉</span>
              <span className="retro-title text-base">About Me</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 text-[var(--retro-muted)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5-5 5M6 12h12"
                />
              </svg>
            </a>
            <p className="mt-3 text-[var(--retro-muted)] text-lg">
              Driven and passionate software developer with over 2 years of
              experience as a Full Stack Web Developer and 1 year of experience
              as a Mobile Developer. I specialize in creating dynamic,
              user-centric web and mobile applications using JavaScript and PHP.
              My dedication to continuous learning and problem-solving allows me
              to deliver high-quality, efficient solutions for every project I
              undertake.
            </p>
          </div>
        </div>
        <div
          className="w-full px-6 pb-16 retro-appear"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="text-center">
            <h2 className="retro-title text-2xl text-[var(--retro-accent)]">
              Resume
            </h2>
            <p className="mt-2 text-lg text-[var(--retro-muted)]">
              Education, experience, and certifications.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6">
            <div className="retro-panel px-6 py-4 transition-transform duration-200 ease-out hover:-translate-y-1">
              <h3 className="retro-title text-lg text-[var(--retro-foreground)]">
                Education
              </h3>
              <div className="mt-4 space-y-4">
                {educationData.map((item) => (
                  <div key={`${item.school}-${item.period}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-lg font-semibold text-[var(--retro-foreground)]">
                        {item.school}
                      </p>
                      <span className="text-base text-[var(--retro-muted)]">
                        {item.location}
                      </span>
                    </div>
                    <p className="text-lg text-[var(--retro-muted)]">
                      {item.program}
                    </p>
                    <p className="text-base text-[var(--retro-muted)]">
                      {item.period}
                    </p>
                    {item.note && (
                      <p className="text-base text-[var(--retro-muted)]">
                        {item.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="retro-panel px-6 py-4 transition-transform duration-200 ease-out hover:-translate-y-1">
              <h3 className="retro-title text-lg text-[var(--retro-foreground)]">
                Work Experience
              </h3>
              <div className="mt-4 space-y-4">
                {experienceData.map((item) => (
                  <div key={`${item.role}-${item.period}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-lg font-semibold text-[var(--retro-foreground)]">
                        {item.role}
                      </p>
                      <span className="text-base text-[var(--retro-muted)]">
                        {item.location}
                      </span>
                    </div>
                    {item.company && (
                      <p className="text-lg text-[var(--retro-muted)]">
                        {item.company}
                      </p>
                    )}
                    <p className="text-base text-[var(--retro-muted)]">
                      {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="retro-panel px-6 py-4 transition-transform duration-200 ease-out hover:-translate-y-1">
              <h3 className="retro-title text-lg text-[var(--retro-foreground)]">
                Certifications
              </h3>
              <div className="mt-4 space-y-4">
                {certificationData.map((item) => (
                  <div key={`${item.title}-${item.credential}`}>
                    <p className="text-lg font-semibold text-[var(--retro-foreground)]">
                      {item.title}
                    </p>
                    <p className="text-lg text-[var(--retro-muted)]">
                      {item.issuer}
                    </p>
                    <p className="text-base text-[var(--retro-muted)]">
                      Issued {item.issued} | Expires {item.expires}
                    </p>
                    <p className="text-base text-[var(--retro-muted)]">
                      Certificate: {item.credential}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full bg-[#05080f] py-16 text-[var(--retro-foreground)] px-6 border-y-2 border-[var(--retro-border)] retro-appear"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="retro-title text-2xl text-[var(--retro-accent)]">
              Tech Stacks
            </h2>
            <p className="mt-4 text-xl text-[var(--retro-muted)]">
              tech stack and tools that i used to build the project
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center text-base">
              {/* Partnership Logos */}
              <div className={stackItemClass}>
                <SiJavascript className="text-3xl mb-2" />
                <div>Javasript</div>
              </div>
              <div className={stackItemClass}>
                <SiReact className="text-3xl mb-2" />
                <div>React JS</div>
              </div>
              <div className={stackItemClass}>
                <SiNextdotjs className="text-3xl mb-2" />
                <div>Next JS</div>
              </div>
              <div className={stackItemClass}>
                <SiReact className="text-3xl mb-2" />
                <div>React Native</div>
              </div>
              <div className={stackItemClass}>
                <SiNodedotjs className="text-3xl mb-2" />
                <div>Node JS</div>
              </div>
              <div className={stackItemClass}>
                <SiTailwindcss className="text-3xl mb-2" />
                <div>Tailwind CSS</div>
              </div>
              <div className={stackItemClass}>
                <SiPhp className="text-3xl mb-2" />
                <div>PHP</div>
              </div>
              <div className={stackItemClass}>
                <SiExpress className="text-3xl mb-2" />
                <div>Express JS</div>
              </div>
              <div className={stackItemClass}>
                <SiPostgresql className="text-3xl mb-2" />
                <div>PostgreSQL</div>
              </div>
              <div className={stackItemClass}>
                <SiMysql className="text-3xl mb-2" />
                <div>MySQL</div>
              </div>
              <div className={stackItemClass}>
                <SiWordpress className="text-3xl mb-2" />
                <div>WordPress</div>
              </div>
              <div className={stackItemClass}>
                <SiAmazonwebservices className="text-3xl mb-2" />
                <div>AWS</div>
              </div>
              <div className={stackItemClass}>
                <SiRedux className="text-3xl mb-2" />
                <div>Redux</div>
              </div>
              <div className={stackItemClass}>
                <SiVuedotjs className="text-3xl mb-2" />
                <div>Vue</div>
              </div>
              <div className={stackItemClass}>
                <FaCircle className="text-3xl mb-2" />
                <div>Pinia</div>
              </div>
              <div className={stackItemClass}>
                <SiHtml5 className="text-3xl mb-2" />
                <div>HTML5</div>
              </div>
              <div className={stackItemClass}>
                <SiCss3 className="text-3xl mb-2" />
                <div>CSS3</div>
              </div>
              <div className={stackItemClass}>
                <SiApollographql className="text-3xl mb-2" />
                <div>Apollo Client</div>
              </div>
              <div className={stackItemClass}>
                <SiApollographql className="text-3xl mb-2" />
                <div>Apollo Server</div>
              </div>
              <div className={stackItemClass}>
                <SiSequelize className="text-3xl mb-2" />
                <div>Sequelize</div>
              </div>
              <div className={stackItemClass}>
                <SiGraphql className="text-3xl mb-2" />
                <div>GraphQL</div>
              </div>
              <div className={stackItemClass}>
                <SiMongodb className="text-3xl mb-2" />
                <div>MongoDB</div>
              </div>
              <div className={stackItemClass}>
                <SiRedis className="text-3xl mb-2" />
                <div>Redis</div>
              </div>
              <div className={stackItemClass}>
                <SiSwagger className="text-3xl mb-2" />
                <div>REST API</div>
              </div>
              <div className={stackItemClass}>
                <SiJest className="text-3xl mb-2" />
                <div>Jest</div>
              </div>
              <div className={stackItemClass}>
                <SiDocker className="text-3xl mb-2" />
                <div>Docker</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="py-16 px-6 w-full mx-auto retro-appear"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="max-w-7xl mx-auto px-0">
            {/* Heading */}
            <h2 className="retro-title text-2xl text-center text-[var(--retro-accent)]">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-xl text-[var(--retro-muted)] text-center">
              my portofolio and project
            </p>
            {dataPorto.length > 0 &&
              dataPorto.map((item, index) => (
                <div
                  key={index}
                  className="mt-12 grid grid-cols-1 md:grid-cols-1 gap-8"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setActiveProject(item);
                      setActiveImageIndex(0);
                    }}
                    className="retro-panel w-full text-left p-6 transition-transform duration-200 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--retro-accent)]"
                    aria-haspopup="dialog"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-[var(--retro-foreground)]">
                        {item.title}
                      </h3>
                      {item.period && (
                        <span className="text-base text-[var(--retro-accent)]">
                          {item.period}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-lg text-[var(--retro-muted)]">
                      {item.desc}
                    </p>
                    {item.note && (
                      <p className="mt-2 text-base text-[var(--retro-accent-2)]">
                        {item.note}
                      </p>
                    )}
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-base font-semibold text-[var(--retro-foreground)]">
                        {item.techStack}
                      </span>
                      <span className="text-base text-[var(--retro-muted)]">
                        Press to view details
                      </span>
                    </div>
                  </button>
                </div>
              ))}
          </div>
        </div>
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title} details`}
          >
            <div
              className="absolute inset-0 bg-black/80"
              onClick={() => setActiveProject(null)}
            />
            <div
              className="relative z-10 w-full max-w-2xl retro-panel retro-scanlines p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="retro-title text-lg text-[var(--retro-accent)]">
                    {activeProject.title}
                  </h3>
                  {activeProject.period && (
                    <p className="mt-2 text-base text-[var(--retro-muted)]">
                      {activeProject.period}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="retro-button px-3 py-2 text-base"
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="mt-4">
                <div className="relative">
                  <img
                    src={currentImage}
                    alt={`${activeProject.title} preview ${activeImageIndex + 1}`}
                    className="w-full rounded-md border-2 border-[var(--retro-border)]"
                  />
                  {hasMultipleImages && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveImageIndex(
                            (prev) => (prev - 1 + totalImages) % totalImages
                          )
                        }
                        className="retro-button absolute left-3 top-1/2 -translate-y-1/2 px-2 py-2 text-base"
                        aria-label="Previous image"
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveImageIndex(
                            (prev) => (prev + 1) % totalImages
                          )
                        }
                        className="retro-button absolute right-3 top-1/2 -translate-y-1/2 px-2 py-2 text-base"
                        aria-label="Next image"
                      >
                        <FaChevronRight />
                      </button>
                    </>
                  )}
                </div>
                {hasMultipleImages && (
                  <div className="mt-3 flex items-center justify-center gap-2">
                    {projectImages.map((_, index) => (
                      <button
                        key={`${activeProject.title}-dot-${index}`}
                        type="button"
                        onClick={() => setActiveImageIndex(index)}
                        className={`h-2.5 w-2.5 rounded-full border border-[var(--retro-accent)] ${index === activeImageIndex
                            ? "bg-[var(--retro-accent)]"
                            : "bg-transparent"
                          }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              <p className="mt-4 text-lg text-[var(--retro-muted)]">
                {activeProject.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-base text-[var(--retro-foreground)]">
                <span className="rounded border border-[var(--retro-border)] px-2 py-1">
                  {activeProject.techStack}
                </span>
                {activeProject.note && (
                  <span className="rounded border border-[var(--retro-accent-2)] px-2 py-1 text-[var(--retro-accent-2)]">
                    {activeProject.note}
                  </span>
                )}
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {projectLinkConfig.map((item) => {
                  const Icon = item.icon;
                  const url = activeProject.links?.[item.key];
                  return url ? (
                    <a
                      key={item.key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-button flex items-center justify-between gap-3 px-4 py-3 text-base"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="text-lg" />
                        {item.label}
                      </span>
                      <span className="text-base">Open -&gt;</span>
                    </a>
                  ) : (
                    <div
                      key={item.key}
                      className="retro-button flex items-center justify-between gap-3 px-4 py-3 text-base opacity-40 cursor-not-allowed pointer-events-none"
                      aria-disabled="true"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="text-lg" />
                        {item.label}
                      </span>
                      <span className="text-base">Not set</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <footer className="row-start-3 py-16 px-6 flex gap-6 flex-wrap items-center justify-center text-[var(--retro-muted)]">
          <a
            href="https://wa.me/6285858999264?text=Hi%20I%20would%20like%20to%20inquire%20about%20your%20services."
            className="flex items-center gap-2 hover:text-[var(--retro-accent)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWhatsapp />
            Contact Me
          </a>
          <a
            href="mailto:sulkhangalangsakti@gmail.com?subject=Inquiry&body=Hi,%20I%20would%20like%20to%20inquire%20about%20your%20services."
            className="flex items-center gap-2 hover:text-[var(--retro-accent)]"
          >
            <SiGmail />
            Email
          </a>
          {/*
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Go to Top →
            </a>
             */}
          <a
            href="#"
            className="flex items-center gap-2 hover:text-[var(--retro-accent)]"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to Top →
          </a>
        </footer>
      </main>
    </div>
  );
}
