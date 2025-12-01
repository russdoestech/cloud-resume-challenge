function SectionItem({ item }) {
  return (
    <div className="section-item">
      {Object.entries(item).map(([key, value]) => {

        // If the field is a bullet list
        if (Array.isArray(value)) {
          return (
            <ul key={key}>
              {value.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          );
        }

        // Regular text field
        return (
          <p key={key}>{value}</p>
        );
      })}
    </div>
  );
}

function formatKey(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^\w/, c => c.toUpperCase());
}

export default SectionItem;