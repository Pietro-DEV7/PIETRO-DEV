
import { Code2, Monitor, Rocket, Lightbulb } from "lucide-react";

function About() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Python", "Git", "GitHub"];

  return (
    <section className="about section" id="sobre">
      <div className="section-heading">
        <span className="section-tag">SOBRE MIM</span>
        <h2>Tecnologia com <span>propósito.</span></h2>
        <p>Conheça um pouco da minha trajetória e do meu trabalho.</p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <h3>Olá! Sou Pietro, desenvolvedor de sistemas.</h3>

          <p>
            Tenho interesse em tecnologia e desenvolvimento de software,
            com foco na criação de experiências digitais modernas,
            funcionais e intuitivas.
          </p>

          <p>
            Estou em constante aprendizado, desenvolvendo projetos
            práticos e aprimorando minhas habilidades em programação,
            desenvolvimento web e resolução de problemas.
          </p>

          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="about-features">
          <article className="feature-card">
            <Code2 />
            <h4>Código</h4>
            <p>Desenvolvimento organizado e funcional.</p>
          </article>

          <article className="feature-card">
            <Monitor />
            <h4>Experiência</h4>
            <p>Interfaces pensadas para diferentes dispositivos.</p>
          </article>

          <article className="feature-card">
            <Rocket />
            <h4>Evolução</h4>
            <p>Aprendizado contínuo e novos desafios.</p>
          </article>

          <article className="feature-card">
            <Lightbulb />
            <h4>Criatividade</h4>
            <p>Soluções digitais com identidade própria.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
