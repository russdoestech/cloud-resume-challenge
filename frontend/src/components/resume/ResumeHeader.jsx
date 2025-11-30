import React from "react";
import resumeData from "data/resumeData";


export default function ResumeHeader() {
  const { name, email, phone, linkedin } = resumeData.person;
  
  return (
    <section className="header">
        <h1>{name}</h1>
        <p>
        <a href="mailto:{email}">{email}</a>
        &bull;
        {phone}
        &bull;
        <a href={linkedin}>LinkedIn</a>
        </p>
      </section>
  );
}