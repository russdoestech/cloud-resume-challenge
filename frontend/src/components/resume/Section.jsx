function Section({ name, data }) {

  // Title-case the section header (e.g., "experience" → "Experience")
  const title = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <section className={`section section-${name}`}>
      <h2>{title}</h2>

      {Array.isArray(data) ? (
        // CASE 1: Array of objects or strings
        data.map((item, i) => (
          typeof item === "string"
            ? <p key={i}>{item}</p>               // array of strings (certifications, skills)
            : <SectionObject key={i} item={item} /> // array of objects (experience, education)
        ))
      ) : typeof data === "object" ? (
        // CASE 2: Single object (military)
        <SectionObject item={data} />
      ) : (
        // CASE 3: Anything else
        <p>{data}</p>
      )}
    </section>
  );
}

