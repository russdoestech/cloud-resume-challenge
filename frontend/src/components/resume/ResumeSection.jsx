// src/components/resume/ResumeSection.jsx

import React from "react";
import resumeData from "data/resumeData";
import SectionItem from "components/resume/SectionItem";





export default function ResumeSection({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

