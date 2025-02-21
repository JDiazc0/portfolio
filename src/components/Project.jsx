import GithubIcon from "../assets/icons/github-icon";

export default function Project({ props }) {
  const {
    projectImage,
    projectTitle,
    projectTechnologies,
    projectDescription,
    projectLink,
    projectRepository,
  } = props;
  return (
    <>
      <div className="project_component">
        <div className="project_component__image">
          <img src={projectImage} alt={projectTitle} />
        </div>
        <div className="project_component__info">
          <h3>{projectTitle}</h3>
          <div className="project_component__info__stack">
            {projectTechnologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
          <div className="project_component__info__description">
            <p>{projectDescription}</p>
          </div>
          <div className="project_component__info__links">
            {projectLink && (
              <a href={projectLink}>
                <GithubIcon
                  styling={{ size: `24px`, fill: `var(--font-color)` }}
                />
              </a>
            )}
            {projectRepository && (
              <a href={projectRepository}>
                <GithubIcon
                  styling={{ size: `24px`, fill: `var(--font-color)` }}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
