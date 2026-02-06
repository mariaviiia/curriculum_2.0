import type { ProjectExperience } from "./experience";
import "./experience.scss";

interface Props {
  project: ProjectExperience;
  isLast: boolean;
}

export const ExperienceItem: React.FC<Props> = ({
  project,
  isLast,
}) => {
  return (
    <div className="timeline-item">
      <div className="timeline-marker">
        <span className="dot" />
        {!isLast && <span className="line" />}
      </div>

      <div className="timeline-content">
        <h4>{project.title}</h4>
        <span className="period">{project.period}</span>

        <ul>
          {project.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="tech-list">
          {project.tech.map((tech) => (
            <span key={tech} className="tech">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
