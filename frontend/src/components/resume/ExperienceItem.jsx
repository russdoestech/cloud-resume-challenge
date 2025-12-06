// src/components/resume/ExperienceItem.jsx

export default function ExperienceItem({ data }) {
  const { role, business, duration, location, description, bullets } = data;

  return (
    <div className="item">
      <div className="item_heading">
        <div className="info">
          <h3>{role}</h3>
          <span>{business}</span>
        </div>

        <div className="details">
          <span className="duration">{duration}</span>
          <span>{location}</span>
        </div>
      </div>

      <p className="description">{description}</p>

      {bullets && (
        <ul>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
