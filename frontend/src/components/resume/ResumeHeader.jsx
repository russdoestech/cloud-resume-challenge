import React from "react";
import resumeData from "data/resumeData";


export default function ResumeHeader() {
  const { name, email, phone, linkedin } = resumeData.person;
  
  return (
    <section className="header">
        <h1>{name}</h1>
        <p>
        <span className="email"><a href={`mailto:${email}`}>{email}</a></span>
        <span className="bull">&bull;</span>
        <span className="phone">{phone}</span>
        <span className="bull">&bull;</span>
        <span className="linkedin"><a href={linkedin}>LinkedIn</a></span>
        </p>
      </section>
  );
}