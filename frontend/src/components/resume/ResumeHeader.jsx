// src/components/resume/ResumeHeader.jsx

import React from "react";
import resumeData from "data/resumeData";


export default function ResumeHeader({ person }) {
  return (
    <section className="header">
        <h1>{person.name}</h1>
        <p>
        <span className="email">{person.email}</span>
        <span className="bull">&bull;</span>
        <span className="phone">{person.phone}</span>
        <span className="bull">&bull;</span>
        <span className="linkedin"><a href={person.linkedin}>LinkedIn</a></span>
        </p>
      </section>
  );
}