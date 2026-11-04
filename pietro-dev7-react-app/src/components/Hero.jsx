
import {
  ArrowDown,
  MessageCircle,
  Code2,
  ExternalLink
} from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">

        <span className="hero-tag">
          <span className="status-dot"></span>
          Desenvolvedor de Sistemas
        </span>

        <h1>
          Olá, eu sou <span>Pietro.</span>
          <br />
          Desenvolvo soluções
          <br />
          para o <span>mundo digital.</span>
        </h1>

        <p>
          Desenvolvedor focado na criação de sites modernos,
          funcionais e experiências digitais que conectam
          empresas aos seus clientes.
        </p>

        <div className="hero-buttons">
          <a href="#projetos" className="btn-primary">
            Ver projetos <ArrowDown size={18} />
          </a>

          <a href="#contato" className="btn-secondary">
            Entre em contato
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/Pietro-DEV7"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <ExternalLink />
          </a>

          <a
            href="https://wa.me/5511945007556"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle />
          </a>
        </div>

      </div>

      <div className="hero-decoration">
        <div className="hero-card">
          <span>PIETRO</span>
          <strong>DEV7</strong>
          <p>Desenvolvimento & Tecnologia</p>
          <div className="hero-card-line"></div>
          <span className="hero-card-code">
            {"< Code />"}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
