
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Casa de Brasa",
    category: "Landing Page • Restaurante",
    description:
      "Página desenvolvida para apresentar a identidade do restaurante, destacar seus produtos e facilitar o contato com os clientes.",
    image: "/projects/casa-de-brasa.png",
    link: "https://restaurante-previa.vercel.app",
  },
  {
    title: "Atelier Zaya",
    category: "Website • Beleza e Estética",
    description:
      "Projeto desenvolvido com foco em apresentação profissional, identidade visual e experiência de navegação.",
    image: "/projects/atelier-zaya.png",
    link: "https://atelier-zaya.vercel.app",
  },
  {
    title: "Estética Automotiva Roan",
    category: "Website • Automotivo",
    description:
      "Site demonstrativo para serviços de estética automotiva, com apresentação dos serviços e direcionamento para contato.",
    image: "/projects/estetica-roan.png",
    link: "https://estetica-automotiva-roan.vercel.app",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projetos">
      <div className="section-heading">
        <span className="section-tag">PORTFÓLIO</span>
        <h2>Projetos em <span>destaque.</span></h2>
        <p>Alguns dos projetos que desenvolvi.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-image"
              aria-label={`Visitar ${project.title}`}
            >
              <img src={project.image} alt={`Prévia do projeto ${project.title}`} />
              <span className="project-image-icon">
                <ExternalLink size={20} />
              </span>
            </a>

            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                Acessar projeto <ArrowUpRight size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
