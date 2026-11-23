import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import PortfolioSections from "./components/PortfolioSections";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [snowflakeImage, setSnowflakeImage] = useState<HTMLImageElement | null>(
    null,
  );
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const color = theme === "dark" ? "#f4f9ff" : "#547da6";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 5v54M8.6 18.5l46.8 27M8.6 45.5l46.8-27M32 5l-7 8m7-8 7 8M32 59l-7-8m7 8 7-8M8.6 18.5l10 .2m-10-.2 3.7 9.4M55.4 45.5l-10-.2m10 .2-3.7-9.4M8.6 45.5l10-.2m-10 .2 3.7-9.4M55.4 18.5l-10 .2m10-.2-3.7 9.4" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"/></svg>`;
    const image = new Image();

    image.onload = () => setSnowflakeImage(image);
    image.onerror = () =>
      console.error("Could not load the snowflake image for the snowfall.");
    image.src = `data:image/svg+xml,${encodeURIComponent(svg)}`;

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.colorScheme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0b0f1a" : "#f7f9fc");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = () =>
      setReduceMotion(motionPreference.matches);

    motionPreference.addEventListener("change", updateMotionPreference);
    return () =>
      motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  return (
    <div className="site" data-theme={theme}>
      {!reduceMotion && (
        snowflakeImage && (
          <Snowfall
            images={[snowflakeImage]}
            snowflakeCount={55}
            radius={[8, 16]}
            speed={[0.6, 1.8]}
            wind={[-0.5, 1.5]}
            opacity={[0.5, 0.9]}
            style={{
              position: "fixed",
              inset: 0,
              width: "100vw",
              height: "100vh",
              pointerEvents: "none",
              zIndex: 30,
            }}
          />
        )
      )}
      <NavBar
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))
        }
      />
      <main id="main">
        <Hero />
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {Array.from({ length: 2 }, (_, repeat) => (
              <span className="marquee-group" key={repeat}>
                {[
                  "Python",
                  "Java",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "FastAPI",
                  "PostgreSQL",
                  "MySQL",
                  "Docker",
                  "Redis",
                  "Git",
                  "Linux",
                ].map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <About />
        <PortfolioSections />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            &copy; {new Date().getFullYear()} Harsha Vardhan Basati. All rights
            reserved.
          </p>
          <a href="#top">Back to top &uarr;</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
