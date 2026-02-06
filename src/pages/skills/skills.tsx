import { useEffect, useRef, useState } from "react";
import { SkillBar } from "./skillBar";
import "./skills.scss";

export interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
];

export const Skills = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className="skills-title">Skills</h2>

        <div className="skills-list">
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} animate={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};
