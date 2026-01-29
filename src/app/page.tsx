"use client";
import Link from "next/link";
import { useState } from "react";
import { Github, Instagram, Linkedin, Send } from "lucide-react";

export default function Home() {
  const techIcons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
    "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
  ];

  const skills = [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 85 },
    { name: "JavaScript", percent: 80 },
    { name: "TypeScript", percent: 65 },
    { name: "Tailwind CSS", percent: 92 },
    { name: "React.js", percent: 85 },
    { name: "Next.js", percent: 82 },
    { name: "Tanstack Family", percent: 70 },
    { name: "Zustand", percent: 80 },
  ];

  const stackTechnologies = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "Frontend",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "Frontend",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "Frontend",
    },
    {
      name: "TanStack",
      icon: "https://raw.githubusercontent.com/TanStack/tanstack.com/main/public/images/logos/logo-white.svg",
      category: "Frontend",
    },
    {
      name: "Zustand",
      icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
      category: "Frontend",
    },
    {
      name: "i18n",
      icon: "https://www.vectorlogo.zone/logos/i18next/i18next-icon.svg",
      category: "Frontend",
    },
    {
      name: "Figma",
      icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      category: "Frontend",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "Frontend",
    },
    {
      name: "Shadcn UI",
      icon: "https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png",
      category: "Frontend",
    },
    {
      name: "React Native",
      icon: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
      category: "Mobile",
    },
    {
      name: "Expo Go",
      icon: "https://images.seeklogo.com/logo-png/45/1/expo-go-app-logo-png_seeklogo-457073.png",
      category: "Mobile",
    },
  ];

  const [activeCategory, setActiveCategory] = useState<"Frontend" | "Mobile">(
    "Frontend"
  );
  const filteredTech = stackTechnologies.filter(
    (tech) => tech.category === activeCategory
  );
  const containerKey = activeCategory;

  return (
    <main className="bg-[#00050a] text-[#e0ffe0] min-h-screen relative overflow-x-hidden">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes counter {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes glow {
          0%,
          100% {
            opacity: 0.65;
            filter: brightness(1);
          }
          50% {
            opacity: 1;
            filter: brightness(1.9);
          }
        }
        @keyframes appearUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes cardAppear {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.92);
          }
          60% {
            opacity: 0.7;
            transform: translateY(0) scale(1.03);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .spin {
          animation: spin 55s linear infinite;
        }
        .counter {
          animation: counter 55s linear infinite;
        }
        .glow {
          animation: glow 5s ease-in-out infinite;
        }
        .section-fade-in {
          opacity: 0;
          animation: appearUp 1s ease-out forwards;
        }
        .card {
          opacity: 0;
          animation: cardAppear 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .social-fade {
          opacity: 0;
          animation: appearUp 1.2s ease-out 0.3s forwards;
        }
        .cv-button {
          opacity: 0;
          animation: appearUp 1.2s ease-out 0.5s forwards;
        }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex items-center px-5 sm:px-8 pt-28 pb-16 md:pt-32 section-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-70">
          <div className="absolute -left-60 -top-40 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-3xl glow" />
          <div className="absolute -right-60 bottom-20 w-[900px] h-[900px] bg-lime-900/10 rounded-full blur-3xl glow [animation-delay:2.2s]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 xl:gap-24">
          <div className="text-center lg:text-left space-y-8 md:space-y-12 max-w-2xl">
            <p className="text-xl md:text-2xl text-emerald-400 font-medium tracking-widest glow">
              Hi I am AZIZBEK SAYDULLAYEV
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(52,211,153,0.8)]">
                FRONT-END
              </span>
              <br />
              <span className="bg-gradient-to-r from-lime-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(163,230,53,0.75)]">
                DEVELOPER
              </span>
            </h1>

            <div className="flex justify-center lg:justify-start gap-6 mt-8 social-fade">
              {[
                { Icon: Github, href: "https://github.com/A-Saydullayev" },
                {
                  Icon: Instagram,
                  href: "https://instagram.com/azizbek___saydullayev",
                },
                {
                  Icon: Linkedin,
                  href: "https://linkedin.com/in/azizbek-saydullayev",
                },
                { Icon: Send, href: "https://t.me/in_crease" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  className="group relative p-3.5 rounded-lg border border-emerald-700/40 hover:border-emerald-400/70 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(52,211,153,0.6)] hover:scale-110"
                >
                  <Icon
                    className="w-7 h-7 text-emerald-400/70 group-hover:text-emerald-200 transition-colors"
                    strokeWidth={2.2}
                  />
                </a>
              ))}
            </div>

            <a
              href="/CV/Azizbek_Saydullayev_CV_Resume_pdf"
              download
              className="inline-flex items-center gap-3 mt-8 px-10 py-5 rounded-lg font-bold text-lg tracking-wide bg-gradient-to-r from-emerald-700 via-emerald-600 to-lime-700 hover:from-emerald-600 hover:via-lime-600 hover:to-emerald-500 shadow-[0_0_25px_rgba(52,211,153,0.5)] hover:shadow-[0_0_45px_rgba(52,211,153,0.7)] transition-all duration-400 hover:scale-105 cv-button"
            >
              DOWNLOAD CV
            </a>
          </div>

          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] shrink-0">
            <div className="absolute inset-0 rounded-full border border-emerald-500/25 spin" />
            <div className="absolute inset-6 rounded-full border border-dashed border-lime-500/30 spin [animation-duration:42s]" />

            <div className="absolute inset-0 spin">
              {techIcons.map((src, i) => {
                const angle = (i * 360) / techIcons.length;
                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(${
                        src.includes("react-native") ? "-180px" : "-195px"
                      }) rotate(-${angle}deg)`,
                    }}
                  >
                    <div className="counter">
                      <img
                        src={src}
                        alt=""
                        width={64}
                        height={64}
                        className="rounded-lg bg-black/60 p-3 backdrop-blur-sm border border-emerald-600/30 shadow-[0_0_20px_rgba(52,211,153,0.4)]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-8xl md:text-[12rem] font-black text-transparent bg-gradient-to-r from-emerald-300 via-lime-300 to-emerald-400 bg-clip-text drop-shadow-[0_0_70px_rgba(52,211,153,0.9)] glow">
                &lt;/&gt;
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-32 px-5 sm:px-8 max-w-7xl mx-auto relative z-10 section-fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-300">
            ABOUT ME
          </h2>
          <p className="text-xl text-emerald-300/80 max-w-3xl mx-auto">
            Intern Front-End Developer • Terminal access granted
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 text-lg text-emerald-100/80 leading-relaxed">
            <p>
              <strong className="text-white text-2xl">
                Front-End Developer (Intern)
              </strong>
            </p>

            <p>
              Hi, I'm{" "}
              <span className="text-white font-bold">Azizbek Saydullayev</span>.
            </p>

            <p>
              Passionate about creating <strong>clean</strong>,{" "}
              <strong>fast</strong> and{" "}
              <strong className="text-lime-400">user-friendly</strong> web
              experiences.
            </p>

            <p>
              Trained at{" "}
              <span className="text-emerald-400 font-semibold">
                Mars IT School
              </span>{" "}
              →{" "}
              <span className="text-lime-400 font-semibold">Najot Ta'lim</span>.
            </p>

            <p>
              Currently Intern Front-End Developer at{" "}
              <a
                href="https://capma.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-400 font-semibold hover:text-lime-300 underline underline-offset-4 transition-colors"
              >
                Capma
              </a>
              , building modern React & Next.js applications.
            </p>

            <p className="text-emerald-300 font-medium">
              Stack:
              <br />
              HTML • CSS • Tailwind CSS • JavaScript • TypeScript • React •
              Next.js • Vue.js • React Native
            </p>

            <a
              href="/CV/Azizbek_Saydullayev_CV_Resume_pdf"
              download
              className="inline-block mt-8 px-10 py-5 rounded-lg font-bold text-lg bg-gradient-to-r from-emerald-700 via-emerald-600 to-lime-700 hover:from-emerald-600 hover:via-lime-600 hover:to-emerald-500 shadow-[0_0_25px_rgba(52,211,153,0.5)] hover:shadow-[0_0_45px_rgba(52,211,153,0.7)] transition-all duration-400"
            >
              DOWNLOAD CV
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-15">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center group"
              >
                <div className="relative w-32 h-32 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#0f2a1a"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#39ff14"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 56 * (1 - skill.percent / 100)
                      }`}
                      className="transition-all duration-1000 ease-out group-hover:drop-shadow-[0_0_15px_rgba(57,255,20,0.7)]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-black text-lime-300 drop-shadow-[0_0_10px_rgba(163,230,53,0.8)]">
                      {skill.percent}%
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-emerald-300/80 tracking-wider">
                  {skill.name.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative py-32 px-5 sm:px-8 max-w-7xl mx-auto z-10"
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block">
          <span className="text-[180px] font-black text-emerald-400/10 select-none">
            {"</>"}
          </span>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-lime-400">
            EXPERIENCE
          </h2>
          <p className="text-xl text-emerald-300/80 mt-4 max-w-3xl mx-auto">
            Hands-on experience with real production projects
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500/30 to-lime-500/30 hidden md:block" />

          <div className="relative md:ml-auto md:w-1/2 md:pl-12">
            <div className="absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-lime-600 flex items-center justify-center border-4 border-black z-10 shadow-[0_0_25px_rgba(52,211,153,0.6)]">
              <span className="text-black font-black text-xl">C</span>
            </div>

            <div className="relative bg-black/70 border border-emerald-800/60 rounded-2xl p-8 shadow-[0_0_40px_rgba(52,211,153,0.35)]">
              <span className="absolute -top-4 right-6 px-4 py-1 text-sm font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Currently working
              </span>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-300">
                  Front-End Developer Intern
                </h3>
                <span className="text-emerald-400/80 font-medium">
                  Jan 7, 2025 — Present
                </span>
              </div>

              <p className="text-lime-400 font-semibold mb-6">
                Capma • Tashkent
              </p>

              <ul className="space-y-4 list-disc pl-5 marker:text-lime-400 text-emerald-100/90">
                <li>
                  Development and maintenance of production web applications
                  using
                  <strong> Next.js</strong> and <strong>React</strong>
                </li>
                <li>
                  Worked on <strong>UI/UX improvements</strong>, layouts,
                  animations, and responsiveness
                </li>
                <li>
                  Assisted in{" "}
                  <strong>debugging and fixing frontend bugs</strong>
                </li>
                <li>
                  Styled modern, accessible interfaces with
                  <strong> Tailwind CSS</strong>
                </li>
                <li>
                  Collaborated with the team during stand-ups and code reviews
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="stack"
        className="py-24 px-5 sm:px-8 max-w-7xl mx-auto relative z-10 section-fade-in"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-900/50 to-lime-900/30 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.5)] glow">
              <span className="text-3xl font-bold text-emerald-300">⚙</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-300">
              My Stack
            </h2>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-black/60 backdrop-blur-xl border border-emerald-800/50 rounded-full p-2 shadow-[0_0_25px_rgba(0,0,0,0.6)]">
            <button
              onClick={() => setActiveCategory("Frontend")}
              className={`px-10 py-4 rounded-full text-lg font-semibold transition-all duration-500 ease-out ${
                activeCategory === "Frontend"
                  ? "bg-gradient-to-r from-emerald-600 to-lime-600 text-white shadow-[0_0_25px_rgba(52,211,153,0.7)] scale-105"
                  : "text-emerald-300 hover:text-white hover:bg-emerald-900/40"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveCategory("Mobile")}
              className={`px-10 py-4 rounded-full text-lg font-semibold transition-all duration-500 ease-out ${
                activeCategory === "Mobile"
                  ? "bg-gradient-to-r from-emerald-600 to-lime-600 text-white shadow-[0_0_25px_rgba(52,211,153,0.7)] scale-105"
                  : "text-emerald-300 hover:text-white hover:bg-emerald-900/40"
              }`}
            >
              Mobile
            </button>
          </div>
        </div>

        <div
          key={containerKey}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          {filteredTech.map((tech, index) => (
            <div
              key={tech.name}
              className="card group relative bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-xl border border-emerald-800/40 rounded-2xl p-6 transition-all duration-300 hover:border-emerald-500/70 hover:shadow-[0_0_30px_rgba(52,211,153,0.45)] hover:scale-[1.05] hover:bg-gradient-to-br hover:from-emerald-950/40 hover:to-black/40"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-black/70 p-4 flex items-center justify-center border border-emerald-700/40 group-hover:border-emerald-500/60 transition-all duration-300 shadow-inner">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/80?text=" + tech.name[0];
                  }}
                />
              </div>
              <p className="text-center text-emerald-200 font-medium text-base group-hover:text-emerald-100 transition-colors truncate">
                {tech.name}
              </p>
            </div>
          ))}
        </div>

        {filteredTech.length === 0 && (
          <p className="text-center text-emerald-400/70 text-2xl mt-16 font-medium">
            No technologies in this category yet...
          </p>
        )}
      </section>

      <section
        id="portfolio"
        className="py-24 px-5 sm:px-8 max-w-7xl mx-auto relative z-10 section-fade-in"
        style={{ animationDelay: "0.7s" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-300">
            My Projects
          </h2>
          <p className="text-xl text-emerald-300/80 mt-4">Some of my works</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 md:gap-8">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-2xl border border-emerald-800/40 hover:border-emerald-500/70 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(52,211,153,0.35)] hover:scale-[1.04] hover:-translate-y-3">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="https://nkpremices.com/content/images/2021/08/mih10uhu1464fx1kr0by-1.jpg"
                alt="StreamVibe - Movie & TV Discovery App"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-800 ease-out group-hover:scale-110 group-hover:rotate-[0.8deg]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-500" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/50 backdrop-blur-md">
                <div className="text-center px-8 max-w-xs">
                  <p className="text-emerald-200 font-semibold text-xl mb-4 tracking-wide">
                    Powered by
                  </p>
                  <div className="flex flex-wrap justify-center gap-2.5">
                    {[
                      "React",
                      "Next.js",
                      "TMDB API",
                      "Tailwind",
                      "Zustand",
                      "i18next",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 bg-emerald-950/70 rounded-full text-xs font-medium text-emerald-100 border border-emerald-700/60 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-3xl font-extrabold text-emerald-50 group-hover:text-white transition-colors tracking-tight">
                  StreamVibe
                </h3>
                <span className="shrink-0 px-4 py-1.5 text-sm font-bold rounded-full bg-gradient-to-r from-lime-800/60 to-emerald-800/60 text-lime-200 border border-lime-700/50">
                  Movie & TV
                </span>
              </div>

              <p className="text-emerald-300/90 text-base leading-relaxed font-light">
                Real-time movie & TV series explorer powered by TMDB API.
                Trending / popular / top-rated, powerful search with debounce,
                detailed pages (cast, trailer, recommendations),
                watchlist/favorites, multilingual (i18next), Excel
                import/export, full responsive + dark mode.
              </p>

              <div className="flex flex-wrap gap-5 pt-2">
                <a
                  href="https://stream-vibe-two-lovat.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-lime-700 hover:from-emerald-600 hover:to-lime-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-2xl border border-emerald-800/40 hover:border-emerald-500/70 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(52,211,153,0.35)] hover:scale-[1.04] hover:-translate-y-3">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&auto=format&fit=crop&q=80"
                alt="Texnomart - Electronics E-commerce Store"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-800 ease-out group-hover:scale-110 group-hover:rotate-[0.8deg]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-500" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/50 backdrop-blur-md">
                <div className="text-center px-8">
                  <p className="text-emerald-200 font-semibold text-xl mb-4">
                    Built with
                  </p>
                  <div className="flex flex-wrap justify-center gap-2.5">
                    <span className="px-4 py-1.5 bg-emerald-950/70 rounded-full text-xs font-medium text-emerald-100 border border-emerald-700/60">
                      React
                    </span>
                    <span className="px-4 py-1.5 bg-emerald-950/70 rounded-full text-xs font-medium text-emerald-100 border border-emerald-700/60">
                      Tailwind
                    </span>
                    <span className="px-4 py-1.5 bg-emerald-950/70 rounded-full text-xs font-medium text-emerald-100 border border-emerald-700/60">
                      Axios
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-3xl font-extrabold text-emerald-50 group-hover:text-white transition-colors">
                  Texnomart
                </h3>
                <span className="shrink-0 px-4 py-1.5 text-sm font-bold rounded-full bg-gradient-to-r from-lime-800/60 to-emerald-800/60 text-lime-200 border border-lime-700/50">
                  E-commerce
                </span>
              </div>
              <p className="text-emerald-300/90 text-base leading-relaxed font-light">
                Full online electronics store with product catalog, cart,
                filters, detailed pages and responsive design.
              </p>
              <a
                href="https://texnomart-topaz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-lime-700 hover:from-emerald-600 hover:to-lime-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Live Demo
              </a>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-2xl border border-emerald-800/40 hover:border-emerald-500/70 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(52,211,153,0.35)] hover:scale-[1.04] hover:-translate-y-3">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&auto=format&fit=crop&q=80"
                alt="World Books - Book Library Application"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-800 ease-out group-hover:scale-110 group-hover:rotate-[0.8deg]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-500" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/50 backdrop-blur-md">
                <div className="text-center px-8">
                  <p className="text-emerald-200 font-semibold text-xl mb-4">
                    Built with
                  </p>
                  <div className="flex flex-wrap justify-center gap-2.5">
                    <span className="px-4 py-1.5 bg-emerald-950/70 rounded-full text-xs font-medium text-emerald-100 border border-emerald-700/60">
                      React
                    </span>
                    <span className="px-4 py-1.5 bg-emerald-950/70 rounded-full text-xs font-medium text-emerald-100 border border-emerald-700/60">
                      Next.js
                    </span>
                    <span className="px-4 py-1.5 bg-emerald-950/70 rounded-full text-xs font-medium text-emerald-100 border border-emerald-700/60">
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-3xl font-extrabold text-emerald-50 group-hover:text-white transition-colors">
                  World Books
                </h3>
                <span className="shrink-0 px-4 py-1.5 text-sm font-bold rounded-full bg-gradient-to-r from-lime-800/60 to-emerald-800/60 text-lime-200 border border-lime-700/50">
                  Library
                </span>
              </div>
              <p className="text-emerald-300/90 text-base leading-relaxed font-light">
                Book library application with search, categories, favorites and
                modern responsive design.
              </p>
              <a
                href="https://world-books-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-lime-700 hover:from-emerald-600 hover:to-lime-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Live Demo
              </a>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-2xl border border-emerald-800/40 hover:border-emerald-500/70 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(52,211,153,0.35)] hover:scale-[1.04] hover:-translate-y-3">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80"
                alt="Admin Books - Admin Dashboard Panel"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-800 ease-out group-hover:scale-110 group-hover:rotate-[0.8deg]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-500" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/50 backdrop-blur-md">
                <div className="text-center px-8">
                  <p className="text-emerald-200 font-semibold text-xl mb-4">
                    Built with
                  </p>
                  <div className="flex flex-wrap justify-center gap-2.5">
                    <span className="px-4 py-1.5 bg-emerald-950/70 rounded-full text-xs font-medium text-emerald-100 border border-emerald-700/60">
                      Next.js
                    </span>
                    <span className="px-4 py-1.5 bg-emerald-950/70 rounded-full text-xs font-medium text-emerald-100 border border-emerald-700/60">
                      Tailwind
                    </span>
                    <span className="px-4 py-1.5 bg-emerald-950/70 rounded-full text-xs font-medium text-emerald-100 border border-emerald-700/60">
                      Zustand
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-3xl font-extrabold text-emerald-50 group-hover:text-white transition-colors">
                  Admin Books
                </h3>
                <span className="shrink-0 px-4 py-1.5 text-sm font-bold rounded-full bg-gradient-to-r from-lime-800/60 to-emerald-800/60 text-lime-200 border border-lime-700/50">
                  Dashboard
                </span>
              </div>
              <p className="text-emerald-300/90 text-base leading-relaxed font-light">
                Full-featured admin panel with CRUD operations, authentication,
                charts and responsive layout.
              </p>
              <a
                href="https://admin-ten-pi-20.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-lime-700 hover:from-emerald-600 hover:to-lime-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-32 px-5 sm:px-8 max-w-7xl mx-auto relative z-10 section-fade-in"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-400 to-emerald-300">
            Contact Me
          </h2>
          <p className="text-xl text-emerald-300/80 mt-4 max-w-3xl mx-auto">
            Cultivating Connections: Reach Out and Connect with Me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-6 py-5 bg-black/50 backdrop-blur-xl border border-emerald-800/50 rounded-xl text-emerald-100 placeholder-emerald-500/60 focus:outline-none focus:border-emerald-500/70 focus:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-500/60 peer-focus:text-emerald-400 peer-focus:text-sm peer-focus:-top-2 peer-focus:bg-black/80 peer-focus:px-2 transition-all duration-300 pointer-events-none"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-6 py-5 bg-black/50 backdrop-blur-xl border border-emerald-800/50 rounded-xl text-emerald-100 placeholder-emerald-500/60 focus:outline-none focus:border-emerald-500/70 focus:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-500/60 peer-focus:text-emerald-400 peer-focus:text-sm peer-focus:-top-2 peer-focus:bg-black/80 peer-focus:px-2 transition-all duration-300 pointer-events-none"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-full px-6 py-5 bg-black/50 backdrop-blur-xl border border-emerald-800/50 rounded-xl text-emerald-100 placeholder-emerald-500/60 focus:outline-none focus:border-emerald-500/70 focus:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300 peer"
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-500/60 peer-focus:text-emerald-400 peer-focus:text-sm peer-focus:-top-2 peer-focus:bg-black/80 peer-focus:px-2 transition-all duration-300 pointer-events-none"
              >
                Phone number
              </label>
            </div>

            <div className="relative md:col-span-2">
              <textarea
                name="message"
                id="message"
                required
                rows={6}
                className="w-full px-6 py-5 bg-black/50 backdrop-blur-xl border border-emerald-800/50 rounded-xl text-emerald-100 placeholder-emerald-500/60 focus:outline-none focus:border-emerald-500/70 focus:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300 peer resize-none"
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="absolute left-6 top-5 text-emerald-500/60 peer-focus:text-emerald-400 peer-focus:text-sm peer-focus:-top-2 peer-focus:bg-black/80 peer-focus:px-2 transition-all duration-300 pointer-events-none"
              >
                Project Details
              </label>
            </div>

            <div className="md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-12 py-6 rounded-2xl font-bold text-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-lime-700 hover:from-emerald-600 hover:via-lime-600 hover:to-emerald-500 shadow-[0_0_30px_rgba(52,211,153,0.5)] hover:shadow-[0_0_60px_rgba(163,230,53,0.8)] transition-all duration-500 hover:scale-105 text-white"
              >
                <Send className="w-6 h-6" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <a
        href="#home"
        className="fixed bottom-10 right-10 z-50 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-700 to-lime-700 flex items-center justify-center shadow-[0_0_30px_rgba(52,211,153,0.6)] hover:shadow-[0_0_60px_rgba(163,230,53,0.9)] transition-all duration-500 hover:scale-110 section-fade-in"
        style={{ animationDelay: "0.8s" }}
      >
        <svg
          className="w-8 h-8 text-emerald-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </a>
    </main>
  );
}
