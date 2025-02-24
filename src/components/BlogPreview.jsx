import DateIcon from "../assets/icons/date-icon";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export default function BlogPreview({ props }) {
  const { title, date, preview, topics, url } = props;
  const { t } = useLanguage();

  return (
    <>
      <div className="preview">
        <div className="preview__date">
          <DateIcon
            styling={{ size: `24px`, stroke: `var(--secondary-color)` }}
          />
          <p>{date}</p>
        </div>
        <div className="preview__title">{title}</div>
        <div className="preview__preview">{preview}</div>
        <div className="preview__topics">
          {topics.map((topic, index) => (
            <span key={index}>{topic}</span>
          ))}
        </div>
        <div className="preview__read">
          <Link to={`/blog/${url}`}>{t("blog.read")} ➜</Link>
        </div>
      </div>
    </>
  );
}
