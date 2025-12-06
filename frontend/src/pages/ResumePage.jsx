// src/pages/ResumePage.jsx

import React from "react";
import resumeData from "data/resumeData";
import ResumeHeader from "components/resume/ResumeHeader";
import ResumeSection from "components/resume/ResumeSection";
import ExperienceItem from "components/resume/ExperienceItem";
import EducationItem from "components/resume/EducationItem";
import MilitaryItem from "components/resume/MilitaryItem";
import BulletList from "components/resume/BulletList";
import DownloadPDF from "components/resume/DownloadPDF";
import 'css/pages/resume.css';
import "css/pages/print.css";

export default function Resume() {
  const { person, sections } = resumeData;

  return (
    <div location="resume">
      <DownloadPDF />

      <div id="resume-print-area">

        <ResumeHeader person={person} />

        <ResumeSection title="Summary">
          {sections.summary.map((s, i) => (
            <p key={i}>{s.description}</p>
          ))}
        </ResumeSection>

        <ResumeSection title="Experience">
          {sections.experience.map((exp, i) => (
            <ExperienceItem key={i} data={exp} />
          ))}
        </ResumeSection>

        <ResumeSection title="Education">
          {sections.education.map((edu, i) => (
            <EducationItem key={i} data={edu} />
          ))}
        </ResumeSection>

        <ResumeSection title="Certifications">
          {sections.certifications.map((cert, i) => (
            <BulletList key={i} bullets={cert.bullets} />
          ))}
        </ResumeSection>

        <ResumeSection title="Military">
          {sections.military.map((mil, i) => (
            <MilitaryItem key={i} data={mil} />
          ))}
        </ResumeSection>

        <ResumeSection title="Skills">
          {sections.skills.map((skill, i) => (
            <BulletList key={i} bullets={skill.bullets} />
          ))}
        </ResumeSection>
      </div>
    </div>
  );
}