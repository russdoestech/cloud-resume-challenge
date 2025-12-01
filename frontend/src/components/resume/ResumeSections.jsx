import React from "react";
import resumeData from "data/resumeData";
import SectionItem from "components/resume/SectionItem";



function Section({ name, items }) {
  const title = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <section className={`resume-section ${name}`}>
      <h2>{title}</h2>
      {items.map((item, i) => (
        <SectionItem key={i} item={item} />
      ))}
    </section>
  );
}

export default function ResumeSections({ sections }) {
  return (
    <div className="resume-sections">
      {Object.entries(sections).map(([sectionName, sectionItems]) => (
        <Section 
          key={sectionName}
          name={sectionName}
          items={sectionItems}
        />
      ))}
    </div>
  );
}
