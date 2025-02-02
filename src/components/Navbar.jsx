import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.png";
import { useLanguage } from "../hooks/useLanguage";

export default function Navbar() {
  const { t, setLang, currentLang } = useLanguage();
  return (
    <>
      <header>
        <nav>
          <div>
            <img src={Logo} alt="ZeroDev" />
          </div>
          <div>
            <a href="aboutme">{t("navbar.aboutMe")}</a>
            <a href="blog">{t("navbar.blog")}</a>
            <a href="projects">{t("navbar.projects")}</a>
            <a href="contact">{t("navbar.contact")}</a>
          </div>
          <div>
            <button>light mode</button>
            <button onClick={() => setLang(currentLang === "es" ? "en" : "es")}>
              {currentLang.toUpperCase()}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
