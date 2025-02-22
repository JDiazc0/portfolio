import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <>
      <section className="contact">
        <div>
          <h1>{t("contact.title")}</h1>
        </div>
        <form action="submit">
          <div className="contact__fields">
            <div className="contact__fields__name">
              <label className="contact__fields__name--name" htmlFor="">
                {t("contact.name")}
                <input type="text" />
              </label>
              <label className="contact__fields__name--email" htmlFor="">
                {t("contact.email")}
                <input type="email" />
              </label>
            </div>
            <div className="contact__fields__message">
              <label htmlFor="">
                {t("contact.message")}
                <textarea name="" id=""></textarea>
              </label>
            </div>
            <div className="contact__fields__button">
              <button type="submit">{t("contact.send")}</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
