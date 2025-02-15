import Image from "next/image";
import {
  FaLinkedin,
  FaFileAlt,
  FaYoutube,
  FaTimes,
  FaStore,
  FaGithub,
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
} from "react-icons/si";

export default function Home() {
  let dataPorto = [
    {
      title: "KOSMO App iOS",
      desc: "aplikasi iOS untuk pengelolaan perumahan",
      link: "https://apps.apple.com/id/app/kosmo-komunitas-modern/id1540687660",
      // link : "https://nutri-calc-fhpwuhzn8-gals-projects-8328d421.vercel.app/",
      techStack: "React Native, React, PHP",
    },
    {
      title: "KOSMO App Android",
      desc: "aplikasi android untuk pengelolaan perumahan",
      link: "https://play.google.com/store/apps/details?id=com.smartcommunityid&hl=id&pli=1",
      // link : "https://nutri-calc-fhpwuhzn8-gals-projects-8328d421.vercel.app/",
      techStack: "React Native, React, PHP",
    },
    {
      title: "NutriCalc",
      desc: "aplikasi web untuk menghitung kebutuhan kalori dan jumlah kalori makanan",
      link: "https://nutri-calc-lwlnqs90e-gals-projects-8328d421.vercel.app/",
      // link : "https://nutri-calc-fhpwuhzn8-gals-projects-8328d421.vercel.app/",
      techStack: "React, SQLite",
    },
    {
      title: "The SG Times",
      desc: "web portal berita sederhana",
      link: "https://news-portal-angular-zzie.vercel.app/",
      // link : "https://nutri-calc-fhpwuhzn8-gals-projects-8328d421.vercel.app/",
      techStack: "NextJS",
    },
    {
      title: "wilieeffendi.com",
      desc: "landing page untuk freelancer",
      link: "https://www.wilieeffendi.com/",
      // link : "https://nutri-calc-fhpwuhzn8-gals-projects-8328d421.vercel.app/",
      techStack: "NextJS",
    },
    {
      title: "UKM Go Digital",
      desc: "landing page untuk perusahaan",
      link: "https://ukmgodigital.com",
      // link : "https://nutri-calc-fhpwuhzn8-gals-projects-8328d421.vercel.app/",
      techStack: "NextJS",
    },
    {
      title: "JPM Jasa Web",
      desc: "landing page untuk perusahaan",
      link: "https://jpmjasaweb.com",
      // link : "https://nutri-calc-fhpwuhzn8-gals-projects-8328d421.vercel.app/",
      techStack: "WordPress",
    },
  ];

  return (
    <div className=" bg-[#F5F3EA] text-gray-800 min-h-screen font-[family-name:var(--font-geist-mono)]">
      <main className="flex flex-col min-h-screen overflow  gap-8 row-start-2 items-center sm:items-start max-w-2xl mx-auto border-gray-800 border-2">
        <div className="w-full mx-auto  px-6 py-16  ">
          {/* Profile Section */}
          <div className="flex flex-col items-center space-x-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQE2PGTUJ9f-KQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693303072350?e=2147483647&v=beta&t=pCIqr-ImDrl203hpZzoasyvS5JsaH9ayd9StkH0yxr4"
              alt="Profile Picture"
              className="w-36 h-36 rounded-full object-cover"
            />

            <div>
              <h2 className="text-2xl text-center font-bold text-gray-800 mt-4">
                Sulkhan Galang Sakti
              </h2>
              <p className="text-gray-600 text-center">
                FullStack Web Developer
              </p>
              {/* Social Icons */}
              <div className="mt-2 flex items-center justify-center space-x-4 text-gray-600">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/sulkhangalangsakti/"
                  className="hover:text-blue-600"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/sulkhan10"
                  className="hover:text-gray-700"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/6285858999264?text=Hi%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  className="hover:text-green-700"
                >
                  <SiWhatsapp className="text-xl" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:sulkhangalangsakti@gmail.com?subject=Inquiry&body=Hi,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  className="hover:text-red-700"
                >
                  <SiGmail className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="mt-6 bg-[#fcfcf7]  border-gray-800 border-2 px-8 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
            style={{
              boxShadow: "5px 5px 0px 0px rgba(0, 0, 0, 1)", // Inline custom box-shadow
            }}
          >
            <a
              href="#"
              className="flex items-center text-sm font-semibold text-gray-800 hover:text-blue-600"
            >
              <span className="mr-2">👉</span>
              <span>About Me</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 text-gray-600"
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
            <p className="mt-1 text-gray-500 text-sm">
            Driven and passionate software developer with over 2 years of experience as a Fullstack Web Developer. I specialize in creating dynamic, user-centric web applications using JavaScript and PHP. My dedication to continuous learning and problem-solving allows me to deliver high-quality, efficient solutions for every project I undertake.            </p>
          </div>
        </div>
        <div className="bg-gray-900 py-16 text-white px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-xl font-bold">Tech Stacks</h2>
            <p className="mt-4 text-md text-gray-400">
              tech stack and tools that i used to build the project
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-center text-xs">
              {/* Partnership Logos */}
              <div className="hover:scale-105 hover:border-gray-50 ease-in-out transition-all duration-300  transform flex flex-col justify-center items-center">
                <SiJavascript className="text-3xl mb-2" />
                <div>Javasript</div>
              </div>
              <div className="hover:scale-105 hover:border-gray-50 ease-in-out transition-all duration-300  transform flex flex-col justify-center items-center">
                <SiReact className="text-3xl mb-2" />
                <div>React JS</div>
              </div>
              <div className="hover:scale-105 hover:border-gray-50 ease-in-out transition-all duration-300  transform flex flex-col justify-center items-center">
                <SiNextdotjs className="text-3xl mb-2" />
                <div>Next JS</div>
              </div>
              <div className="hover:scale-105 hover:border-gray-50 ease-in-out transition-all duration-300  transform flex flex-col justify-center items-center">
                <SiReact className="text-3xl mb-2" />
                <div>React Native</div>
              </div>
              <div className="hover:scale-105 hover:border-gray-50 ease-in-out transition-all duration-300  transform flex flex-col justify-center items-center">
                <SiNodedotjs className="text-3xl mb-2" />
                <div>Node JS</div>
              </div>
              <div className="hover:scale-105 hover:border-gray-50 ease-in-out transition-all duration-300  transform flex flex-col justify-center items-center">
                <SiTailwindcss className="text-3xl mb-2" />
                <div>Tailwind CSS</div>
              </div>
              <div className="hover:scale-105 hover:border-gray-50 ease-in-out transition-all duration-300  transform flex flex-col justify-center items-center">
                <SiPhp className="text-3xl mb-2" />
                <div>PHP</div>
              </div>
              <div className="hover:scale-105 hover:border-gray-50 ease-in-out transition-all duration-300  transform flex flex-col justify-center items-center">
                <SiExpress className="text-3xl mb-2" />
                <div>Express JS</div>
              </div>
              <div className="hover:scale-105 hover:border-gray-50 ease-in-out transition-all duration-300  transform flex flex-col justify-center items-center">
                <SiPostgresql className="text-3xl mb-2" />
                <div>PostgreSQL</div>
              </div>
              <div className="hover:scale-105 hover:border-gray-50 ease-in-out transition-all duration-300  transform flex flex-col justify-center items-center">
                <SiMysql className="text-3xl mb-2" />
                <div>MySQL</div>
              </div>
              <div className="hover:scale-105 hover:border-gray-50 ease-in-out transition-all duration-300  transform flex flex-col justify-center items-center">
                <SiWordpress className="text-3xl mb-2" />
                <div>WordPress</div>
              </div>
              <div className="hover:scale-105 hover:border-gray-50 ease-in-out transition-all duration-300  transform flex flex-col justify-center items-center">
                <SiAmazonwebservices className="text-3xl mb-2" />
                <div>AWS</div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 px-6 w-full mx-auto">
          <div className="max-w-7xl mx-auto px-0">
            {/* Heading */}
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-md text-gray-400 text-center">
              my portofolio and project
            </p>
            {dataPorto.length > 0 &&
              dataPorto.map((item, index) => (
                <div
                  key={index}
                  className="mt-12 grid grid-cols-1 md:grid-cols-1 gap-8"
                >
                  <div
                    className="bg-white border-2 rounded-lg p-6 border-gray-800  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
                    style={{
                      boxShadow: "5px 5px 0px 0px rgba(0, 0, 0, 1)", // Inline custom box-shadow
                    }}
                  >
                    <h3 className="text-md font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                    <div className="mt-2 flex items-baseline justify-between">
                      <span className="text-xs font-bold text-gray-900">
                        {" "}
                        {item.techStack}
                      </span>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        Go To Page
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2 text-gray-600"
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
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <footer className="row-start-3 py-16 px-6  flex gap-6 flex-wrap items-center justify-center">
          <a
            href="https://wa.me/6285858999264?text=Hi%20I%20would%20like%20to%20inquire%20about%20your%20services."
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWhatsapp />
            Contact Me
          </a>
          <a
            href="mailto:sulkhangalangsakti@gmail.com?subject=Inquiry&body=Hi,%20I%20would%20like%20to%20inquire%20about%20your%20services."
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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
