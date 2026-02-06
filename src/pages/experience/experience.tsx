import "./experience.scss";
import { ExperienceItem } from "./experienceItem";

export interface ProjectExperience {
  title: string;
  period: string;
  description: string[];
  tech: string[];
}

const projects: ProjectExperience[] = [
  {
    title: "Campus - internal learning platform",
    period: "2019 – 2020",
    description: [
      "Contributed to the development and design of an internal learning platform, creating and structuring interactive courses for employees.",
      "Worked with a CMS to build and integrate courses into the platform, collaborating closely with designers, managers, and teachers to deliver a high-quality and user-friendly learning experience.",
    ],

    tech: ["React", "JavaScript", "CSS", "OpenEdx"],
  },
  {
    title: "Lever",
    period: "2020 – 2021",
    description: [
      "Worked as a full-stack developer maintaining and improving the company website and its database, ensuring performance and stability.",
      "Learned and worked with a custom internal framework similar to React and CSS, and gained hands-on experience with MongoDB, PostgreSQL, and Docker in a production environment.",
    ],
    tech: ["React", "CSS", "PostgreSQL"],
  },
  {
    title: "Copa airlines",
    period: "2021 – 2025",
    description: [
      "Developed new features to improve and optimize the online check-in process, focusing on usability, performance, and user experience.",
      "Actively participated in technical and design decisions, working closely with the client and maintaining clear communication with designers, product managers, and developers.",
    ],
    tech: ["React", "TypeScript", "SASS"],
  },
];

export const Experience = () => {
  return (
    <section className="experience-section" id="projects">
      <div className="container">
        <h2 className="experience-title">Experience</h2>

        <div className="company-block">
          <h3 className="company-name">Epam Systems</h3>
          <p className="company-role">Frontend Developer · 2019 — 2025</p>

          <div className="timeline">
            {projects.map((project, index) => (
              <ExperienceItem
                key={project.title}
                project={project}
                isLast={index === projects.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
