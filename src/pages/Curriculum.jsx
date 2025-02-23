import { useLanguage } from "../context/LanguageContext";

export default function Curriculum() {
  const { t } = useLanguage();
  return (
    <>
      <div style={{ width: `100vw`, height: `100vh` }}>
        <embed
          src={t("cv.file")}
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}
