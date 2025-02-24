import BlogPreview from "../components/BlogPreview";
import { useLanguage } from "../context/LanguageContext";

export default function Blog() {
  const { t } = useLanguage();
  const blogs = t("blog.blogs");

  return (
    <>
      <section className="blog">
        <h1>{t("blog.title")}</h1>
        <div className="blog__container">
          {blogs.map((blog, index) => (
            <BlogPreview key={index} props={blog} />
          ))}
        </div>
      </section>
    </>
  );
}
