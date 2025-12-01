function SectionObject({ item }) {
  return (
    <div className="section-item">
      {Object.entries(item).map(([key, value]) => {

        if (Array.isArray(value)) {
          // Render bullet lists
          return (
            <ul key={key}>
              {value.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          );
        }

        return (
          <p key={key}>
            <strong>{formatKey(key)}:</strong> {value}
          </p>
        );
      })}
    </div>
  );
}

// Human-friendly key names
function formatKey(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/^\w/, c => c.toUpperCase());
}
