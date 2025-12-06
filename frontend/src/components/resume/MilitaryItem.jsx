// src/components/resume/MilitaryItem.jsx

export default function MilitaryItem({ data }) {
  const {description, duration } = data;

  return (
    <div className="item">
      <div className="item_heading">
        <div className="info">
          <span>{description}</span>
        </div>
        <div className="details">
          <span className="duration">{duration}</span>
        </div>
      </div>
    </div>
  );
}
