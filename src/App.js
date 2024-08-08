import { useState } from "react";
import "./App.css";
import { uid } from "uid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="bg-amber-200">
      <Header />
      <HeroPage />
    </div>
  );
}

export default App;

function HeroPage() {
  const [skillMode, setSkillMode] = useState(false);
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "React JS",
    "Next.js",
    "Node.js",
    "Git",
    "Shell",
    "REST API",
    "MongoDB",
    "Backend Basics",
    "UI/UX Basics",
    "Styled Components",
    "Influencer Marketing",
    "Influencer Management",
    "Project Management",
    "Event Management",
    "Social Media Marketing",
    "Konzeption",
    "YouTube",
    "TikTok",
    "Instagram",
    "YouTube Shorts",
    "Social Media Strategie",
  ];

  function handleSkillMode() {
    setSkillMode(!skillMode);
  }

  return (
    <section className="text-center py-20 bg-[#fed9c2]">
      <div className="container mx-auto px-6 lg:px-10 text-center">
        <h1 className="text-5xl font-bold text-[#19676b] font-custom">
          Ana Pecic
        </h1>
        <p className="text-xl text-[#8C9C94] mt-4">
          Web Development & Social Media Marketing
        </p>
        {skillMode ? (
          <div className="mt-8 flex justify-center flex-wrap gap-4">
            {skills.map((skill) => {
              return <SkillCard skill={skill}>{skill}</SkillCard>;
            })}
          </div>
        ) : (
          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <div
              className="bg-[#19676b] text-[#f0ebe6] font-medium px-6 py-2 rounded-lg hover:bg-gray-800"
              onClick={handleSkillMode}
            >
              Skills
              <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <p className="bg-[#19676b] text-[#f0ebe6] font-medium px-6 py-2 rounded-lg hover:bg-gray-800">
      {skill}
    </p>
  );
}

function Header() {
  return (
    <>
      <Navigation />
    </>
  );
}

function Navigation() {
  const pages = ["Start", "Über mich", "Kontakt"];

  return (
    <nav className="space-x-6 bg-[#fed9c2] py-4 px-8 flex items-center justify-between shadow-md">
      <div className="space-x-6 items-center justify-end">
        {" "}
        <Logo />
      </div>
      <div className="flex space-x-6 items-center justify-end">
        {pages.map((page) => (
          <NavigationItem navItem={page} key={uid()} />
        ))}
      </div>
    </nav>
  );
}

function NavigationItem({ navItem }) {
  return (
    <a
      href={`#${navItem}`}
      className="text-[#19676b] hover:text-gray-900 font-medium"
    >
      {navItem}
    </a>
  );
}

function Logo() {
  return (
    <a href="www.anapecic.de" className="font-custom text-3xl text-[#19676b]">
      ap.
    </a>
  );
}
