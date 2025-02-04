import Logo from "../assets/images/Logo.png";
import MoonIcon from "../assets/icons/moon-icon";
import SunIcon from "../assets/icons/sun-icon";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { t, setLang, currentLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <header className="navbar">
        <nav className="navbar__container">
          <div>
            <a href="/">
              <img src={Logo} alt="ZeroDev" className="navbar__logo" />
            </a>
          </div>
          <div className="navbar__links">
            <a href="aboutme" className="navbar__links--link">
              {t("navbar.aboutMe")}
            </a>
            <a href="blog" className="navbar__links--link">
              {t("navbar.blog")}
            </a>
            <a href="projects" className="navbar__links--link">
              {t("navbar.projects")}
            </a>
            <a href="contact" className="navbar__links--link">
              {t("navbar.contact")}
            </a>
          </div>
          <div className="navbar__settings">
            <button onClick={toggleTheme}>
              {theme === "light" ? (
                <SunIcon
                  styling={{ stroke: `var(--font-color)`, size: `24px` }}
                />
              ) : (
                <MoonIcon
                  styling={{ fill: `var(--font-color)`, size: `24px` }}
                />
              )}
            </button>
            <button onClick={() => setLang(currentLang === "es" ? "en" : "es")}>
              {currentLang.toUpperCase()}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
