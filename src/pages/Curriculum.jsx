import cv from "../data/cv_Jhoan_Diaz.pdf";

export default function Curriculum() {
  return (
    <>
      <div style={{ width: `100vw`, height: `100vh` }}>
        <embed src={cv} type="application/pdf" width="100%" height="100%" />
      </div>
    </>
  );
}
