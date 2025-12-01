import React from "react";
import resumeData from "data/resumeData";


export default function ResumeSectionItem() {
  const { role, company, duration, location, description, bullets } = resumeData.item;
  
  return (
    <div className="item">
        <div className="item_heading">
          <div className="info">
              <h3>{role}</h3>
              <p>{company}</p>
          </div>
        <div className="details">
            <div className="duration">{duration}</div>
            <div className="location">{location}</div>
        </div>
        <div className="description">{description}</div>
        </div>
        <ul>
        <li>{bullets}Created and implemented an e-Commerce MVP (Minimum Viable Product) on AWS by employing automation using Terraform and Ansible (Infrastructure as Code).</li>
        <li>Configured AWS Systems Manager to automate installation of security agents, and Simple Notification Service (SNS) to notify administrators of installation status.</li>
        <li>Implemented an auto-scaling web application using AWS Elastic Beanstalk, an Elastic Load Balancer (ELB), and an auto-scaling group of EC2 instances to support 10k+ concurrent attendees of a large conference that used the app to enter a raffle for exam vouchers.</li>
        <li>Deployed an e-learning and e-commerce web application using AWS LightSail, Route53, and CloudFront which enabled the business to sell their e-learning courses online.</li>
        <li>Built out a satellite office with Ethernet LAN, redundant circuits, Juniper Mist wireless access points, Mitel VOIP phones, and a Zoom video conference room, enabling the business to expand operations to a new region.</li>
        <li>Migrated from on-premises Cisco UCM to Zoom hosted VOIP solution, enhancing their communication capabilities with features such as call recording, live transcription, chat, and video conferencing.</li>
        </ul>
        {Array.isArray(item.details) && item.details.length > 0 && (
          <ul>
            {items.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        )}
    </div>
  );
}