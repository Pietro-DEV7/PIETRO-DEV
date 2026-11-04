
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="navbar">
      <a href="#inicio" className="logo">
        PIETRO<span>DEV7</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
