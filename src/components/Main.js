import React from "react";

const Main = ({ content }) => {
  if (!content) {
    return <p>Loading...</p>;
  }

  const isArabic = content.personalInfo.name === "شوقي عاشوري";

  return (
    <main className={`container ${isArabic ? "arabic" : ""}`}>
      <header>
        <h1>{content.personalInfo.name}</h1>
        <h2>{content.personalInfo.jobTitle}</h2>
      </header>

      <section>
        <div className="contact-info">
          <div className="contact-item">
            <a href="mailto:achouriichawkii@gmail.com">
              <i className="fas fa-envelope"></i>
              <p>{content.personalInfo.contact.email}</p>
            </a>
          </div>
          <div className="contact-item">
            <a
              href={content.personalInfo.contact.github.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
              <p>{content.personalInfo.contact.github.title}</p>
            </a>
          </div>
          <div className="contact-item">
            <a
              href={content.personalInfo.contact.linkedin.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
              <p>{content.personalInfo.contact.linkedin.title}</p>
            </a>
          </div>
          <div className="contact-item">
            <a
              href={`https://wa.me/${content.personalInfo.contact.whatsapp.replace(
                /[^0-9]/g,
                ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-phone"></i>
              <p>{content.personalInfo.contact.whatsapp}</p>
            </a>
          </div>
        </div>
      </section>

      <section>
        <h3>{content.formation.title}</h3>
        {content.formation.list.map((edu, index) => (
          <div key={index}>
            <h4 className="formation-subtitle">
              {edu.degree || edu.selfEducation}
            </h4>
            {edu.period && (
              <p>
                <strong>{edu.period}</strong>
              </p>
            )}
            {edu.institution && <p>{edu.institution}</p>}
            {edu.average && <p>{edu.average}</p>}
            {edu.technologies && <p>{edu.technologies.join(", ")}</p>}
          </div>
        ))}
      </section>

      <section>
        <h3>{content.certifications.title}</h3>
        {content.certifications.list.map((cert, index) => (
          <div key={index}>
            <h4>{cert.title}</h4>
            {cert.certificates && (
              <>
                {Object.values(cert.certificates).map((certificate, i) => (
                  <p key={i}>
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {certificate.title}
                    </a>
                  </p>
                ))}
              </>
            )}
            {cert.description && <p>{cert.description}</p>}
          </div>
        ))}
      </section>

      <section>
        <h3>{content.experience.title}</h3>
        {content.experience.list.map((job, index) => (
          <div key={index}>
            <h4>
              {job.role} ({job.period})
            </h4>
            <ul>
              {job.tasks.map((task, taskIndex) =>
                typeof task === "string" ? (
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
                )
              )}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h3>{content.skills.title}</h3>
        <div className="skills-grid">
          {content.skills.list.map((skillCategory, index) => (
            <div key={index} className="skills-item">
              <h4>{skillCategory.category}</h4>
              <ul>
                {skillCategory.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>{content.projects.title}</h3>
        {content.projects.list.map((project, index) => (
          <div key={index}>
            <p>
              <a href={project.url}>{project.title}</a>
            </p>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      <section className="languages-interests">
        <div className="language-section">
          <h3>{content.languages.title}</h3>
          <ul>
            {content.languages.list.map((language, index) => (
              <li key={index}>
                <strong>{language.language}:</strong> {language.level}
              </li>
            ))}
          </ul>
        </div>

        <div className="interests-section">
          <h3>{content.interests.title}</h3>
          <ul>
            {content.interests.list.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Main;
