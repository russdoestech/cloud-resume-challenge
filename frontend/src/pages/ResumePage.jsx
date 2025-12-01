import React from "react";
import 'css/pages/resume.css';
import ResumeHeader from 'components/resume/ResumeHeader';
import ResumeSections from "components/resume/ResumeSections";
import resumeData from "data/resumeData";

export default function ResumePage() {
  return (
    <>
    <div className="resume-page">
      <ResumeHeader person={resumeData.person}></ResumeHeader>
      <ResumeSections sections={resumeData.sections} />
    </div>
    </>
  );
}

