import React from "react";

const Main = ({ content }) => {
  if (!content) {
    return <p>Loading...</p>; // Message d'attente en cas de contenu indisponible
  }

  // Détermine si la langue sélectionnée est l'arabe pour appliquer la classe 'arabic'
  const isArabic = content.personalInfo.name === "شوقي عاشوري"; // Remplace par ton prénom en arabe si nécessaire

  return (
    <main className={`container ${isArabic ? "arabic" : ""}`}>
      {/* En-tête avec le nom et le titre */}
      <header>
        <h1>{content.personalInfo.name}</h1>
        <h2>{content.personalInfo.jobTitle}</h2>
      </header>

      {/* Informations personnelles */}
      <section>
        <h3>{content.personalInfo.jobTitle}</h3>
        <ul>
          <li>Email: {content.personalInfo.contact.email}</li>
          <li>
            GitHub:{" "}
            <a href={content.personalInfo.contact.github}>
              {content.personalInfo.contact.github}
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href={content.personalInfo.contact.linkedin}>
              {content.personalInfo.contact.linkedin}
            </a>
          </li>
          <li>WhatsApp: {content.personalInfo.contact.whatsapp}</li>
        </ul>
      </section>

      {/* Formation */}
      <section>
        <h3>{content.formation.title}</h3>
        {content.formation.list.map((edu, index) => (
          <div key={index}>
            <h4>{edu.degree || edu.selfEducation}</h4>
            {edu.period && <p>Période: {edu.period}</p>}
            {edu.institution && <p>Institution: {edu.institution}</p>}
            {edu.average && <p>Moyenne Cumulative: {edu.average}</p>}
            {edu.technologies && (
              <p>Technologies: {edu.technologies.join(", ")}</p>
            )}
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section>
        <h3>{content.certifications.title}</h3>
        {content.certifications.list.map((cert, index) => (
          <div key={index}>
            <h4>{cert.title}</h4>
            {cert.certificates && (
              <ul>
                {cert.certificates.map((certificate, certIndex) => (
                  <li key={certIndex}>{certificate}</li>
                ))}
              </ul>
            )}
            {cert.description && <p>{cert.description}</p>}
          </div>
        ))}
      </section>

      {/* Expérience professionnelle */}
      <section>
        <h3>{content.experience.title}</h3>
        {content.experience.list.map((job, index) => (
          <div key={index}>
            <h4>
              {job.role} ({job.period})
            </h4>
            <ul>
              {job.tasks.map((task, taskIndex) => {
                return typeof task === "string" ? (
                  <li key={taskIndex}>{task}</li>
                ) : (
                  <li key={taskIndex}>
                    {task.title}:
                    <ul>
                      {task.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      {/* Compétences techniques */}
      <section>
        <h3>{content.skills.title}</h3>
        {content.skills.list.map((skillCategory, index) => (
          <div key={index}>
            <h4>{skillCategory.category}</h4>
            <ul>
              {skillCategory.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projets */}
      <section>
        <h3>{content.projects.title}</h3>
        {content.projects.list.map((project, index) => (
          <div key={index}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <p>
              Lien: <a href={project.url}>{project.url}</a>
            </p>
          </div>
        ))}
      </section>

      {/* Langues */}
      <section>
        <h3>{content.languages.title}</h3>
        {content.languages.list.map((language, index) => (
          <div key={index}>
            <h4>{language.language}</h4>
            <p>Niveau: {language.level}</p>
          </div>
        ))}
      </section>

      {/* Centres d'intérêt */}
      <section>
        <h3>{content.interests.title}</h3>
        <ul>
          {content.interests.list.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
