import { useLanguage } from "../context/LanguageContext";
import Logo from "../assets/images/Logo.png";
import GithubIcon from "../assets/icons/github-icon";
import CVIcon from "../assets/icons/cv-icon";
import LinkedinIcon from "../assets/icons/linkedin-icon";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <img src={Logo} alt="ZeroDev" />
          <p>
            {t("footer.intro")}{" "}
            <strong>
              <a href="/">{t("footer.name")}</a>
            </strong>{" "}
            {t("footer.stack")}
            <br /> {t("footer.thanks")}
          </p>
          <div className="footer__container__icons">
            <a href="https://github.com/JDiazc0">
              <GithubIcon
                styling={{ size: `24px`, fill: `var(--font-color)` }}
              />
            </a>
            <a href="https://www.linkedin.com/in/jhoan-andres-diaz-casta%C3%B1o/">
              <LinkedinIcon
                styling={{ size: `24px`, stroke: `var(--font-color)` }}
              />
            </a>
            <a href="/cv_Jhoan_Diaz.pdf" download="cv_Jhoan_Diaz.pdf">
              <CVIcon styling={{ size: `24px`, fill: `var(--font-color)` }} />
            </a>
          </div>
          <p>© Reserved JDiazc0</p>
        </div>
        <div className="footer__general">
          <ul>
            <strong>General</strong>
          </ul>
          <ul>
            <li>
              <a href="/">{t("footer.home")}</a>
            </li>
            <li>
              <a href="/aboutme">{t("navbar.aboutMe")}</a>
            </li>
            <li>
              <a href="/blog">{t("navbar.blog")}</a>
            </li>
          </ul>
        </div>
        <div className="footer__work">
          <ul>
            <strong>{t("footer.work")}</strong>
          </ul>
          <ul>
            <li>
              <a href="/curriculum">Curriculum</a>
            </li>
            <li>
              <a href="/aboutme">{t("navbar.projects")}</a>
            </li>
            <li>
              <a href="/blog">{t("navbar.contact")}</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
