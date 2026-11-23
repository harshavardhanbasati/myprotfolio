type NavBarProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function NavBar({ theme, onToggleTheme }: NavBarProps) {
  return (
    <header className="site-header" id="top">
      <nav className="container nav" aria-label="Primary">
        <a href="#top" className="brand" aria-label="Harsha, home">
          HV<span>.</span>
        </a>
        <div className="nav-actions">
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a
            className="btn btn-small resume-link"
            href="/Harsha_Vardhan_Basati_Resume.pdf"
            download="Harsha_Vardhan_Basati_Resume.pdf"
          >
            Resume
          </a>
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
            <span className="theme-label">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
