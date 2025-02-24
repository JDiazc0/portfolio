import { useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function BlogPost() {
  const blogName = useParams();
  const { t } = useLanguage();

  const blogs = t("blog.blogs");
  console.log(blogName);
  const blog = blogs.find((b) => b.url === blogName.blogName);

  if (!blog) {
    return (
      <section className="blogpost">
        <h1>{t("blog.notFound")}</h1>
      </section>
    );
  }
  return (
    <>
      <section className="blogpost">
        <div className="blogpost__title">
          <h1>{blog.title}</h1>
          <p>{blog.date}</p>
        </div>
        <div className="blogpost__content">
          {blog.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
    </>
  );
}
