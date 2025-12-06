// src/components/resume/EducationItem.jsx

export default function EducationItem({ data }) {
  const { business, description, duration, location } = data;

  return (
    <div className="item">
      <div className="item_heading">
        <div className="info">
          <h3>{business}</h3>
          <span>{description}</span>
        </div>

        <div className="details">
          <span className="duration">{duration}</span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
