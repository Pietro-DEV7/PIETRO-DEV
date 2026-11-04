
import {
  Mail,
  MessageCircle,
  ArrowUpRight,
  Code2
} from "lucide-react";

function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="contact-content">
        <span className="section-tag">CONTATO</span>

        <h2>
          Vamos construir algo <span>juntos?</span>
        </h2>

        <p>
          Tem um projeto em mente ou quer conversar sobre
          desenvolvimento? Entre em contato comigo.
        </p>

        <div className="contact-buttons">
          <a
            href="https://wa.me/5511945007556"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={19} />
            Conversar pelo WhatsApp
          </a>

          <a
            href="mailto:SEUEMAIL"
            className="btn-secondary"
          >
            <Mail size={19} />
            Enviar e-mail
          </a>
        </div>

        <div className="contact-socials">
          <a
            href="https://github.com/Pietro-DEV7"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 size={19} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
