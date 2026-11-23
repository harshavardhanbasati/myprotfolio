import { useEffect, useState } from "react";

const roles = [
  "Software Developer",
  "Python Developer",
  "Java Developer",
  "React Developer",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState(roles[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = (event: MediaQueryListEvent) => {
      setShouldAnimate(!event.matches);
      if (event.matches) setDisplayedRole(roles[0]);
    };

    motionPreference.addEventListener("change", updateMotionPreference);
    return () =>
      motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    const currentRole = roles[roleIndex];
    let timeout: number;

    if (!isDeleting && displayedRole === currentRole) {
      timeout = window.setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedRole.length === 0) {
      timeout = window.setTimeout(() => {
        setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
        setIsDeleting(false);
      }, 350);
    } else {
      timeout = window.setTimeout(
        () =>
          setDisplayedRole((current) =>
            isDeleting
              ? current.slice(0, -1)
              : currentRole.slice(0, current.length + 1),
          ),
        isDeleting ? 45 : 85,
      );
    }

    return () => window.clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex, shouldAnimate]);

  return (
    <section className="container hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Hello, I&apos;m</p>
        <h1 id="hero-title">Harsha Vardhan Basati</h1>
        <p
          className="role"
          aria-label="Software Developer, Python Developer, Java Developer, React Developer"
        >
          <span aria-hidden="true">{displayedRole}</span>
          <span className="typing-cursor" aria-hidden="true">
            |
          </span>
        </p>
        <p className="tagline">
          Computer Science graduate who learns new technologies quickly and
          enjoys building with APIs, databases, and containers.
        </p>
        <div className="hero-actions">
          <a
            className="btn"
            href="/Harsha_Vardhan_Basati_Resume.pdf"
            download="Harsha_Vardhan_Basati_Resume.pdf"
          >
            Download Resume
          </a>
          <a className="btn btn-ghost" href="#projects">
            View Projects
          </a>
          <a className="btn btn-ghost" href="#contact">
            Contact Me
          </a>
        </div>
        <ul className="social" aria-label="Social links">
          <li>
            <a
              href="https://github.com/harshavardhanbasati"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/harsha-vardhan-basati-01445527b"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:harshavardhanbasati2004@gmail.com">Email</a>
          </li>
        </ul>
      </div>
      <div className="hero-portrait">
        <div className="portrait-frame">
          <img
            src="/me.jpeg"
            alt="Harsha Vardhan Basati"
            width="420"
            height="420"
          />
        </div>
        <p className="portrait-caption">
          <span className="status-dot" aria-hidden="true" />
          Open to entry-level opportunities
        </p>
      </div>
    </section>
  );
}

export default Hero;
