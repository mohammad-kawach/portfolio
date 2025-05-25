import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const Projects = ({ display }) => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Project 1",
      description: t("project1.description"),
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/path-to-image1.jpg",
      liveLink: "https://project1.com",
      githubLink: "https://github.com/yourusername/project1",
    },
    {
      title: "Project 2",
      description: t("project2.description"),
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      image: "/path-to-image2.jpg",
      liveLink: "https://project2.com",
      githubLink: "https://github.com/yourusername/project2",
    },
    // Add more projects as needed
  ];

  return (
    <section className={`${display} resume-section`} id="projects">
      <div className="resume-section-content">
        <h2 className="mb-5">{t("projects.title")}</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card h-100">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="technologies mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="badge bg-primary me-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between">
                    <a
                      href={project.liveLink}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("projects.viewLive")}
                    </a>
                    <a
                      href={project.githubLink}
                      className="btn btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("projects.viewCode")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  display: PropTypes.string.isRequired,
};

export default Projects;
