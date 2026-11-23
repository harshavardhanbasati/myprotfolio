const navLinks = [
    {label: "About", href: "#about"},
    {label: "Skills", href: "skills"},
    {label: "Projects", href: "#projects"},
    {label: "Contact", href: "#contact"},
];

function NavBar(){
    return(
        <header className="ticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
            <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px- py-4">
                <a href="#home"
                className="text-lg font-bold tracking-light text-zinc-900">
                    HS<span className="text-indigo-600">.</span>
                </a>
                <div
                className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    {navLinks.map((link)=>(
                        <a
                        key={link.href} 
                        href={link.href}
                        className="text-sm font-medium text-zinc-600 transition hover:text-indigo-600"
                        >
                            {link.label}
                        </a>
                        ))}
                </div>
            </nav>
        </header>
    );
}
export default NavBar;