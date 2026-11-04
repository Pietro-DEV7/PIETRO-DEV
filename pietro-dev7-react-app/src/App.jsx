import logo from "./assets/logo.png";
import { useEffect, useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    category: "RESTAURANTE",
    name: "Casa de Brasa",
    type: "Landing page",
    description: "Cardápio, apresentação e contato para um restaurante.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
    url: "https://restaurante-previa.vercel.app"
  },
  {
    number: "02",
    category: "ESTÉTICA",
    name: "Atelier Zaya",
    type: "Website",
    description: "Uma presença digital elegante para serviços de estética.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85",
    url: "https://atelier-zaya.vercel.app"
  },
  {
    number: "03",
    category: "BARBEARIA",
    name: "Barbearia",
    type: "Website",
    description: "Serviços, identidade e informações para clientes.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85",
    url: "https://barbearia-portifolio.vercel.app/"
  },
  {
    number: "04",
    category: "IMOBILIÁRIA",
    name: "Imobiliária Prime",
    type: "Website",
    description: "Vitrine de imóveis com informações e contato direto.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85",
    url: null
  },
  {
    number: "05",
    category: "AUTOMOTIVO",
    name: "Estética Automotiva Roan",
    type: "Website",
    description: "Apresentação de serviços e soluções para cuidados automotivos.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1000&q=85",
    url: "https://estetica-automotiva-roan.vercel.app"
  }
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="#inicio">
          <img src={logo} alt="Logo Pietro Dev7" className="brand-logo" style={{ width: "40px" }} />
          <span>PIETRO <strong>DEV7</strong></span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          <a href="#inicio" onClick={() => setOpen(false)}>Início</a>
          <a href="#projetos" onClick={() => setOpen(false)}>Projetos</a>
          <a href="#sobre" onClick={() => setOpen(false)}>Sobre</a>
          <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
        </nav>

        <a className="header-contact" href="https://wa.me/5511945007556" target="_blank" rel="noreferrer">
          Fale comigo <span>↗</span>
        </a>
      </div>
    </header>
  );
}
 
function Hero() {
  return (
    <section className="hero container" id="inicio">
      <div className="hero-copy reveal">
        <p className="eyebrow">
          <span className="status-dot" />
          Desenvolvimento web
        </p>

        <h1>
          Ideias que ganham forma
          <span>na internet.</span>
        </h1>

        <p className="hero-description">
          Desenvolvo sites modernos e funcionais para negócios que querem
          fortalecer sua presença digital.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            Conheça meus projetos <span>↘</span>
          </a>
          <a className="button button-secondary" href="https://wa.me/5511945007556" target="_blank" rel="noreferrer">
            Fale comigo
          </a>
        </div>
      </div>

      <div className="hero-side reveal">
        <span className="hero-side-label">PIETRO DEV7</span>
        <span className="hero-monogram">P</span>
        <span className="hero-side-caption">Design claro. Código bem construído.</span>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects-section container" id="projetos">
      <div className="section-heading reveal">
        <div>
          <p className="section-kicker">Trabalhos selecionados</p>
          <h2>Projetos <span>em destaque</span></h2>
        </div>
        <p className="section-note">
          Algumas ideias transformadas em experiências digitais.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.number}>
            <div className="project-image">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={project.name} loading="lazy" />
                </a>
              ) : (
                <img src={project.image} alt={project.name} loading="lazy" />
              )}
              <span className="image-index">
                {project.number} / {project.category}
              </span>
            </div>

            <div className="project-info">
              <div>
                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>

              {project.url ? (
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                  Ver site <span>↗</span>
                </a>
              ) : (
                <span className="project-link unavailable">Em desenvolvimento</span>
              )}
            </div>
          </article>
        ))}
      </div>

      <p className="projects-disclaimer">
        Projetos demonstrativos e trabalhos desenvolvidos para apresentação de soluções digitais.
      </p>
    </section>
  );
}

function About() {
  return (
    <section className="about-section container" id="sobre">
      <div className="about-label reveal">
        {/* Imagem do logo inserida aqui com largura ajustada para combinar com o layout */}
        <img src={logo} alt="Logo Pietro Dev7" style={{ width: "90px", marginBottom: "20px" }} />
        <span className="about-label-text">
          Um pouco sobre<br />quem desenvolve.
        </span>
      </div>

      <div className="about-copy reveal">
        <p className="section-kicker">Sobre mim</p>
        <h2>
          Olá, sou <span>Pietro Bitencourt Alcantara.</span>
        </h2>

        <p>
          Sou estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor web.
          Minha trajetória na tecnologia é movida pela curiosidade e pela vontade
          constante de aprender. Além da formação no SENAI, busco ampliar meus
          conhecimentos por meio de cursos, estudos independentes e projetos práticos.
        </p>

        <p>
          Fora da programação, gosto de treinar, frequentar a igreja e aproveitar
          bons momentos com minha família. Criei o PIETRO DEV7 com o objetivo de
          transformar meu interesse por tecnologia em soluções digitais, construir
          projetos de qualidade e desenvolver uma empresa sólida, que cresça junto
          com minha evolução profissional.
        </p>

        <div className="about-tags">
          <span>Estudante de ADS</span>
          <span>Desenvolvimento web</span>
          <span>Aprendizado contínuo</span>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section container reveal" id="contato">
      <div>
        <p className="section-kicker">Vamos conversar?</p>
        <h2>Tem um projeto em mente?</h2>
        <p>
          Me conte sua ideia. Podemos pensar juntos em uma solução para o seu negócio.
        </p>
      </div>

      <a className="button button-primary" href="https://wa.me/5511945007556" target="_blank" rel="noreferrer">
        Conversar pelo WhatsApp <span>↗</span>
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <a className="brand" href="#inicio">
          {/* Logo inserida aqui no mesmo formato do Header */}
          <img src={logo} alt="Logo Pietro Dev7" className="brand-logo" style={{ width: "40px" }} />
          <span>PIETRO <strong>DEV7</strong></span>
        </a>
        <p>Desenvolvimento web com propósito.</p>
        <span className="copyright">
          © {new Date().getFullYear()} Pietro DEV7
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
