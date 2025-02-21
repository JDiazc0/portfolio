import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import GithubIcon from "../assets/icons/github-icon";
import CVIcon from "../assets/icons/cv-icon";
import LinkedinIcon from "../assets/icons/linkedin-icon";
import ItchioIcon from "../assets/icons/itchio-icon";

export default function Home() {
  const { t } = useLanguage();
  const [isBack, setIsBack] = useState(true);
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFade("fade-out");

      setTimeout(() => {
        setIsBack((prev) => !prev);
        setFade("fade-in");
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="home__title">
        <h1>{t("home.title")}</h1>
        <h2 className={fade}>
          {isBack ? t("home.stackBack") : t("home.stackGame")}
        </h2>
      </div>
      <div className="home__description">
        <p className={fade}>
          {isBack ? t("home.descriptionBack") : t("home.descriptionGame")}
        </p>
      </div>
      <div className="home__buttons">
        <a href="https://github.com/JDiazc0">
          <GithubIcon styling={{ size: `24px`, fill: `var(--font-color)` }} />
        </a>
        <a href="https://www.linkedin.com/in/jhoan-andres-diaz-casta%C3%B1o/">
          <LinkedinIcon
            styling={{ size: `24px`, stroke: `var(--font-color)` }}
          />
        </a>
        <a href="https://itch.io/profile/cerodev">
          <ItchioIcon styling={{ size: `24px`, fill: `var(--font-color)` }} />
        </a>
      </div>
    </div>
  );
}
