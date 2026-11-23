const facts = [
  { label: "Location", value: "Hyderabad, Telangana, India" },
  { label: "Degree", value: "B.Tech, Computer Science & Engineering" },
  { label: "Currently", value: "Application Developer Intern" },
  { label: "Looking for", value: "Entry-level software engineering roles" },
];

const learningTimeline = [
  { year: "2023", detail: "Started learning Python." },
  { year: "2026", detail: "Core Java, JDBC, and MySQL." },
  {
    year: "Aug 2026 – now",
    detail:
      "Application development with FastAPI, PostgreSQL, Git, Linux, React, Docker, and Redis.",
  },
];

function About() {
  return (
    <section className="section container" id="about">
      <h2 className="section-title">
        <span>01.</span> About Me
      </h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I&apos;m a Computer Science graduate (B.Tech, 2026) and Application
            Developer Intern with hands-on experience across Python, Java, and
            React. I work with relational databases, APIs, and containerized
            deployment, and I&apos;m comfortable with version control and
            collaborative development.
          </p>
          <p>
            I&apos;m currently building with Python, FastAPI, and PostgreSQL
            while exploring new technologies. I&apos;m open to working in any
            language or stack and eager to grow as a software engineer.
          </p>
          <ul className="facts">
            {facts.map((fact) => (
              <li key={fact.label}>
                <strong>{fact.label}</strong>
                {fact.value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="subhead">Continuous Learning</h3>
          <ol className="timeline">
            {learningTimeline.map((item) => (
              <li key={item.year}>
                <span className="year">{item.year}</span>
                <p>{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default About;
