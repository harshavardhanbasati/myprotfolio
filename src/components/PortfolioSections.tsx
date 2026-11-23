import { useState, type FormEvent } from "react";

const WEB3FORMS_ACCESS_KEY = "b9d9b9eb-a1b4-4575-885e-95a83c317360";

const experience = [
  {
    role: "Application Developer Intern",
    organization: "Resolence Pvt. Ltd. (a People Tech Group company)",
    date: "Aug 2026 – Present",
    details: [
      "Working as an application developer using Python, transitioning from Java into a new language and toolchain.",
      "Learning FastAPI and working with APIs and PostgreSQL databases.",
      "Using Git and GitHub for version control and Linux for day-to-day development.",
    ],
    skills: ["Python", "FastAPI", "PostgreSQL", "Git", "GitHub", "Linux"],
  },
  {
    role: "Java Programming Trainee",
    organization: "Codegnan IT Solutions, Hyderabad",
    date: "2026",
    details: [
      "Training in Core Java and object-oriented programming, with JDBC and MySQL for database integration.",
    ],
    skills: ["Core Java", "OOP", "JDBC", "MySQL"],
  },
];

const projects = [
  {
    name: "ServiceZone",
    date: "Full-stack platform",
    details: [
      "Built an appointment booking and repair-management platform for a computer and laptop service center.",
      "Includes a customer portal for service discovery, appointment scheduling, and repair progress tracking.",
      "Provides an operations dashboard for appointment management, service catalog updates, and repair workflows.",
    ],
    skills: ["React", "FastAPI", "SQLite", "PostgreSQL", "Vite", "Tailwind CSS"],
    url: "https://github.com/harshavardhanbasati/ServiceZone",
  },
  {
    name: "Live Weather Report Website",
    date: "2026",
    details: [
      "Built a live weather website in React that fetches real-time data from the Open-Meteo API.",
      "Added Redis caching to reduce repeated API calls and speed up responses for frequently requested locations.",
      "Containerized the application with Docker for consistent setup and deployment.",
    ],
    skills: ["React", "Open-Meteo API", "Redis", "Docker"],
    url: "https://github.com/harshavardhanbasati",
  },
  {
    name: "Hotel Reservation System",
    date: "2026",
    details: [
      "Developed a console-based hotel reservation application in Core Java using JDBC for database connectivity.",
      "Implemented room booking and cancellation with live availability checks against MySQL.",
      "Built CRUD operations for customer records on a normalized rooms, bookings, and customers schema.",
    ],
    skills: ["Core Java", "JDBC", "MySQL"],
    url: "https://github.com/harshavardhanbasati",
  },
  {
    name: "Employee Tracker",
    date: "Application",
    details: [
      "Built an employee tracking application to manage and organize employee records.",
      "Implemented operations to add, view, update, and delete employee details.",
      "Structured the code into reusable parts to keep the application maintainable.",
    ],
    skills: ["CRUD", "Modular code"],
    url: "https://github.com/harshavardhanbasati",
  },
];

const skillGroups = [
  {
    title: "Languages",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Frameworks & APIs",
    skills: ["React", "FastAPI", "REST APIs", "Open-Meteo"],
  },
  { title: "Databases", skills: ["PostgreSQL", "MySQL", "Redis"] },
  {
    title: "Tools & Platforms",
    skills: ["Docker", "Git", "GitHub", "Linux", "VS Code", "Office 365"],
  },
  {
    title: "Core Concepts",
    skills: [
      "OOP",
      "Data Structures & Algorithms",
      "DBMS",
      "Computer Networks",
      "Operating Systems",
    ],
  },
];

type ContactSubmissionStatus = {
  type: "success" | "error";
  message: string;
};

async function submitContactForm(
  event: FormEvent<HTMLFormElement>,
  setStatus: (status: ContactSubmissionStatus | null) => void,
  setIsSubmitting: (isSubmitting: boolean) => void,
) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
  setIsSubmitting(true);
  setStatus(null);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data: { success?: boolean; message?: string } = await response.json();

    if (!response.ok || !data.success) {
      setStatus({
        type: "error",
        message: data.message || "Your message could not be sent. Please try again.",
      });
      return;
    }

    form.reset();
    setStatus({
      type: "success",
      message: "Thanks! Your message has been sent.",
    });
  } catch {
    setStatus({
      type: "error",
      message: "Something went wrong. Please check your connection and try again.",
    });
  } finally {
    setIsSubmitting(false);
  }
}

function PortfolioSections() {
  const [submissionStatus, setSubmissionStatus] =
    useState<ContactSubmissionStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <section className="section container" id="experience">
        <h2 className="section-title">
          <span>02.</span> Work Experience
        </h2>
        <div className="card-list">
          {experience.map((job) => (
            <article className="card" key={job.role}>
              <header className="card-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="org">{job.organization}</p>
                </div>
                <span className="date">{job.date}</span>
              </header>
              <ul className="bullets">
                {job.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <ul className="tags" aria-label={`${job.role} technologies`}>
                {job.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="projects">
        <h2 className="section-title">
          <span>03.</span> Projects
        </h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="card project" key={project.name}>
              <span className="project-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{project.name}</h3>
              <p className="muted small">{project.date}</p>
              <ul className="bullets">
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <ul className="tags" aria-label={`${project.name} technologies`}>
                {project.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub &rarr;
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="skills">
        <h2 className="section-title">
          <span>04.</span> Skills
        </h2>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="tags">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="education">
        <h2 className="section-title">
          <span>05.</span> Education &amp; Certifications
        </h2>
        <article className="card">
          <header className="card-head">
            <div>
              <h3>B.Tech, Computer Science &amp; Engineering</h3>
              <p className="org">
                Swarna Bharati Institute of Science and Technology, Khammam
              </p>
            </div>
            <span className="date">May 2026</span>
          </header>
          <p>
            <strong>CGPA:</strong> 7.66
          </p>
          <p className="muted">
            Relevant coursework: Data Structures &amp; Algorithms, DBMS,
            Computer Networks, Operating Systems, OOP, and Web Technologies.
          </p>
        </article>
        <div className="two-col">
          <article className="card">
            <h3>Certifications</h3>
            <ul className="bullets">
              <li>Core Java, Codegnan (2026)</li>
              <li>HTML &amp; CSS Crash Course, Coursera / Scrimba (2025)</li>
              <li>Cybersecurity Essentials, Cisco Networking Academy (2025)</li>
              <li>Introduction to Python, Wingspan (2023)</li>
            </ul>
          </article>
          <article className="card">
            <h3>Activities</h3>
            <ul className="bullets">
              <li>
                Participated in a college-level Ideathon, presenting a
                technology-driven solution as part of a team.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section container" id="contact">
        <h2 className="section-title">
          <span>06.</span> Let&apos;s Connect
        </h2>
        <p className="lead">
          I&apos;m looking for entry-level software engineering opportunities.
          If you have a role, a question, or just want to say hello, send me a
          message.
        </p>
        <div className="contact-grid">
          <form
            className="card form"
            onSubmit={(event) =>
              void submitContactForm(event, setSubmissionStatus, setIsSubmitting)
            }
          >
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
            <label htmlFor="contact-email">Your email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows={5} required />
            <button className="btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {submissionStatus ? (
              <p
                className="form-note"
                role={submissionStatus.type === "error" ? "alert" : "status"}
              >
                {submissionStatus.message}
              </p>
            ) : null}
          </form>
          <aside className="card contact-info">
            <h3>Find me online</h3>
            <ul>
              <li>
                <strong>Email</strong>
                <a href="mailto:harshavardhanbasati2004@gmail.com">
                  harshavardhanbasati2004@gmail.com
                </a>
              </li>
              <li>
                <strong>LinkedIn</strong>
                <a
                  href="https://www.linkedin.com/in/harsha-vardhan-basati-01445527b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  harsha-vardhan-basati
                </a>
              </li>
              <li>
                <strong>GitHub</strong>
                <a
                  href="https://github.com/harshavardhanbasati"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  harshavardhanbasati
                </a>
              </li>
              <li>
                <strong>Location</strong>
                Hyderabad, Telangana, India
              </li>
              <li>
                <strong>Phone</strong>
                <span>+91 8008375839</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

export default PortfolioSections;
