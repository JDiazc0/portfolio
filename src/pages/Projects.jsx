import Project from "../components/Project";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const projects = t("projects.project");

  return (
    <>
      <section className="projects">
        <div>
          <h1>{t("projects.title")}</h1>
        </div>
        <div className="projects__project">
          {projects.map((projects, index) => (
            <Project key={index} props={projects} />
          ))}
        </div>
      </section>
    </>
  );
}
