import { useEffect, useState } from "react";
import type { Skill } from "./skills";

interface Props {
  skill: Skill;
  animate: boolean;
}

export const SkillBar: React.FC<Props> = ({ skill, animate }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const duration = 800;
    const startTime = performance.now();

    const animateProgress = (time: number) => {
      const elapsed = time - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);

      setProgress(Math.round(eased * skill.level));

      if (t < 1) {
        requestAnimationFrame(animateProgress);
      }
    };

    requestAnimationFrame(animateProgress);
  }, [animate, skill.level]);

  return (
    <div className="skill">
      <div className="skill-header">
        <span>{skill.name}</span>
        <span className="skill-percent">{progress}%</span>
      </div>

      <div className="skill-bar-bg">
        <div className="skill-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};
