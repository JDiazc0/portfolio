export default function TechStack({ title, children }) {
  return (
    <>
      <div className="techstack">
        <h3 className="techstack__title">{title}</h3>
        <div className="techstack__icons">{children}</div>
        <hr />
      </div>
    </>
  );
}
