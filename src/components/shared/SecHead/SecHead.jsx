import "./SecHead.css";

export default function SecHead({ eyebrow, title, text }) {
  return (
    <div className="sec-head reveal">
      <div className="sec-eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
