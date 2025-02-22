import { useLanguage } from "../context/LanguageContext";
import aboutmeimg from "../assets/images/AboutImg.jpg";
import Experience from "../components/Experience";
import TechStack from "../components/TechStack";

import PHP from "../assets/icons/php-original";
import Java from "../assets/icons/java-original";
import CSharp from "../assets/icons/csharp-original";
import Spring from "../assets/icons/spring-original";
import Laravel from "../assets/icons/laravel-original";
import Dotnet from "../assets/icons/dotnetcore-original";
import Postman from "../assets/icons/postman-original";
import Insomnia from "../assets/icons/insomnia-original";
import Github from "../assets/icons/github-original";
import Unity from "../assets/icons/unity-original";
import Godot from "../assets/icons/godot-original";

export default function AboutMe() {
  const { t } = useLanguage();
  const paragraphs = t("aboutMe.description");
  const experience = t("experience");

  return (
    <>
      <section className="aboutme">
        <h1>{t("aboutMe.title")}</h1>
        <div className="aboutme__container">
          <div className="aboutme__container__text">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="aboutme__container__info">
            <img src={aboutmeimg} alt="RatProgrammer" />
            <div className="aboutme__container__info--contact">
              <div className="aboutme__container__info--contact--email">
                <p>
                  <strong>{t("aboutMe.email")}</strong>
                </p>
                <p>andres.diazc023@gmail.com</p>
              </div>
              <div className="aboutme__container__info--contact--phone">
                <p>
                  <strong>{t("aboutMe.phone")}</strong>
                </p>
                <p>+57 (318) 424 1544</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="experience_section">
        <h2>{t("aboutMe.experience")}</h2>
        {experience.map((exp, index) => (
          <Experience key={index} props={exp} />
        ))}
      </section>
      <section className="stack_section">
        <h2>{t("aboutMe.stack")}</h2>
        <div className="stack_section__icons">
          <TechStack title={t("aboutMe.languages")}>
            <PHP />
            <Java />
            <CSharp />
          </TechStack>
          <TechStack title={t("aboutMe.frameworks")}>
            <Laravel />
            <Spring />
            <Dotnet />
            <Postman />
            <Insomnia />
            <Github />
            <Unity />
          </TechStack>
          <TechStack title={t("aboutMe.extras")}>
            <Godot />
          </TechStack>
        </div>
      </section>
    </>
  );
}
