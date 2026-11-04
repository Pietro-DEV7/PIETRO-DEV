
import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <a href="#inicio" className="footer-logo">
        PIETRO<span>DEV7</span>
      </a>

      <p>Desenvolvimento, criatividade e tecnologia.</p>

      <span className="footer-copy">
        © {new Date().getFullYear()} Pietro DEV7. Todos os direitos reservados.
      </span>

      <a href="#inicio" className="back-top" aria-label="Voltar ao início">
        <ArrowUp size={19} />
      </a>
    </footer>
  );
}

export default Footer;
