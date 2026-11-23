function About() {
  return (
    <section
      id="about"
      className="border-t border-zinc-200 bg-white px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          About me
        </p>

        <div className="mt-5 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Learning, building, and improving one project at a time.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600">
              I'm Harsha Vardhan, a Computer Science graduate with a
              B.Tech in CSE from Swarna Bharati Institute of Science
              and Technology. I'm an Application Developer Intern at
              Resolence, working with Python, APIs, and PostgreSQL.</p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
             My experience spans React, Java, Python, relational
             databases, and machine learning projects. I enjoy learning
             new technologies, building practical applications, and
             improving my skills as a software developer.             </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
              I've explored React, TypeScript, JavaScript, Python, Java,
              PostgreSQL, Django, and FastAPI through learning and project
              work. I'm continuing to strengthen my fundamentals by
              building projects and improving my problem-solving skills.
            </p>
          </div>

          <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-medium text-zinc-500">
                Education
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                B.Tech — Computer Science
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Swarna Bharathi Institute of Science and Technology
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-medium text-zinc-500">
                Career focus
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                Full-Stack Development
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Building responsive interfaces, backend APIs, and
                database-driven applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;