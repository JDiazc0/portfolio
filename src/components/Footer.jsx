import { useLanguage } from "../context/LanguageContext";
import Logo from "../assets/images/Logo.png";

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
              <a href="/">Curriculum</a>
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
