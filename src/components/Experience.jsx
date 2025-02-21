export default function Experience({ props }) {
  const { date, company, position, resume } = props;
  return (
    <>
      <div className="experience">
        <div className="experience__date">
          <p>{date}</p>
        </div>
        <div className="experience__data">
          <h3>
            <strong>{company}</strong>
          </h3>
          <h4>{position}</h4>
          {resume.text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {resume.list && (
            <ul>
              {resume.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <hr />
      </div>
    </>
  );
}
