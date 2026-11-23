function Hero() {
    return (
        <section className="mx-auto max-w-6xl bg-white px-6 py-24 sm:px-8 sm:py-32">
            <div className="rounded-[32px] border border-zinc-200 bg-zinc-50/80 shadow-[0_30px_80px_-35px_rgba(24,24,27,0.35)] ring-1 ring-white">
                <div className="grid items-center gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-14 lg:py-14">
                    <div>
                        <p className="mb-5 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
                            Full-Stack Developer • Fresher
                        </p>
                        <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.05em] text-zinc-900 sm:text-5xl lg:text-7xl">
                            Building useful things with code.
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
                            I&apos;m Harsha, a graduate from a B.Tech CSE background, passionate about building clean,
                            practical web applications with React, TypeScript, JavaScript, Python, Java, PostgreSQL,
                            and FastAPI.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
                            >
                                Contact me
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-6 text-left shadow-sm">
                            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-500">
                                Currently
                            </p>
                            <h2 className="mt-4 text-2xl font-semibold text-zinc-900">Available for opportunities</h2>
                            <p className="mt-4 text-sm leading-6 text-zinc-600">
                                I build responsive interfaces and reliable backend systems with a focus on clarity,
                                performance, and maintainability.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-zinc-600">
                                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1.5">React</span>
                                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1.5">TypeScript</span>
                                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1.5">Python</span>
                                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1.5">FastAPI</span>
                            </div>
                            <div className="mt-6 flex items-center gap-2 text-sm text-zinc-700">
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                                Open to internships and junior roles
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;