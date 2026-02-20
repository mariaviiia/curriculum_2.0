import Logo from "../../assets/logo.svg";

import "./hero.scss";

interface HeroProps {
  preview?: boolean;
  onClick?: () => void;
}

export const Hero = ({ preview = false, onClick }: HeroProps) => {
  const isMobile = window.innerWidth < 1000;
  return (
    <section className="hero" onClick={onClick}>
      <div className="container">
        <div className="hero-container">
          {isMobile ? null : <img src={Logo} alt="Logo" className="hero-logo" />}
          <div className="hero-content">
            <p className="hero-intro">Hi, I’m</p>

            <h1 className="hero-name">
              Maria <span>Ochoa</span>
            </h1>

            <h2 className="hero-role">
              Frontend <span>Developer</span>
            </h2>
            {!preview && (
              <>
                <p className="hero-description">
                  I am a self-taught software developer with a strong passion
                  for coding and clean, well-styled code. My discipline and
                  focus have allowed me to learn quickly and adapt to new
                  challenges with ease. I enjoy collaborating in team
                  environments, where I contribute proactively and communicate
                  effectively. Driven, responsible, and committed to continuous
                  growth, I take pride in delivering high-quality work and
                  constantly expanding my technical skills.
                </p>

                <div className="hero-actions">
                  <a href="#projects" className="btn primary">
                    View Projects
                  </a>

                  <a href="#contact" className="btn secondary">
                    Contact Me
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
