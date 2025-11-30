import React from "react";
import 'css/pages/resume.css';
import ResumeHeader from 'components/resume/ResumeHeader';
import resumeData from 'data/resumeData.js';


export default function ResumePage() {
  return (
    <>
      <ResumeHeader>Russ Ryness</ResumeHeader>
            <section className="summary">
              <h2>Summary</h2>
            </section>
            <section className="experience">
              <h2>Experience</h2>
              <div className="items">
                <div className="item">
                  <div className="item_heading">
                    <div className="info">
                      <h3>IT Consultant</h3>
                      <p>RG Consulting</p>
                    </div>
                    <div className="details">
                      <div className="duration">Feb 2023&mdash;present</div>
                      <div className="location">Aliso Viejo, CA</div>
                    </div>
                  </div>
                  <ul>
                    <li>Created and implemented an e-Commerce MVP (Minimum Viable Product) on AWS by employing automation using Terraform and Ansible (Infrastructure as Code).</li>
                    <li>Configured AWS Systems Manager to automate installation of security agents, and Simple Notification Service (SNS) to notify administrators of installation status.</li>
                    <li>Implemented an auto-scaling web application using AWS Elastic Beanstalk, an Elastic Load Balancer (ELB), and an auto-scaling group of EC2 instances to support 10k+ concurrent attendees of a large conference that used the app to enter a raffle for exam vouchers.</li>
                    <li>Deployed an e-learning and e-commerce web application using AWS LightSail, Route53, and CloudFront which enabled the business to sell their e-learning courses online.</li>
                    <li>Built out a satellite office with Ethernet LAN, redundant circuits, Juniper Mist wireless access points, Mitel VOIP phones, and a Zoom video conference room, enabling the business to expand operations to a new region.</li>
                    <li>Migrated from on-premises Cisco UCM to Zoom hosted VOIP solution, enhancing their communication capabilities with features such as call recording, live transcription, chat, and video conferencing.</li>
                  </ul>
                </div>
                <div className="item">
                  <div className="item_heading">
                    <div className="info">
                      <h3>Infrastructure Services Manager</h3>
                      <p>Covenant Care</p>
                    </div>
                    <div className="details">
                      <div className="duration">Jul 2015&mdash;Jan 2023</div>
                      <div className="location">Aliso Viejo, CA</div>
                    </div>
                  </div>
                  <div className="description">Covenant Care provides skilled nursing, physical therapy, and home health services throughout California and Nevada.</div>
                  <ul>
                    <li>Directed daily operations of a 5-person team, monitored KPIs and SLAs using Remedy IT Service Management tool and ensured services were delivered in accordance with company requirements.</li>
                    <li>Administered Data Centers in Irvine, CA and Las Vegas, NV; managed 100+ Windows & Linux server VMware virtual machines and utilized Veeam Backup with a GFS backup strategy for data retention and disaster recovery.</li>
                    <li>Hardened infrastructure security posture, configured and monitored Palo Alto firewalls, limited access using IAM tools, audited admin privileges using Privileged Access Management (PAM) tools, managed TLS/SSL certificates, and conducted security awareness training sessions and phishing campaigns.</li>
                    <li>Migrated 2,500 accounts from on-premises Exchange to Microsoft 365 & Azure Active Directory; audited security & distribution groups, scheduled migrations, authored end-user communications & training manuals, and provided follow-on support.</li>
                    <li>Optimized Microsoft 365 licensing upon renewal; shifted from E3 to a mix of E5 and F1 licenses and capitalized on synergies with M365 and Intune, Data Loss Prevention (DLP) and Defender for Endpoint, and eliminated the need for standalone MDM (MobileIron) and security solutions, resulting in $50K annual savings.</li> 
                    <li>Implemented OneLogin Unified Access Management (UAM) and enhanced network security, enforced MFA when accessing VPN, Cloud, PaaS & SaaS resources and enabled Single Sign-On (SSO) to simplify user workflows.</li>
                    <li>Monitored and optimized corporate LAN/WAN performance across 3 data centers, corporate HQ, and 40+ nursing facilities using VeloCloud SD-WAN Orchestrator, Cisco Prime Infrastructure & WLCs, Meraki Admin Portal, and SolarWinds; raised & escalated tickets with ISPs as necessary to optimize network availability.</li>
                    <li>Managed relationships with our managed service provider (MSP) and vendors via regular cadence meetings.</li>
                  </ul>
                </div>
                <div className="item">
                  <div className="item_heading">
                  <div className="info">
                    <h3>IT Manager</h3>
                    <p>Kevcomp Engineering</p>
                  </div>
                  <div className="details">
                    <div className="duration">Jul 2015&mdash;Jan 2023</div>
                    <div className="location">Carson, CA</div>
                  </div>
                  </div>
                  <div className="description">The Carson refinery Quality Assurance lab provides extensive testing for a range of petroleum fuels and products</div>
                  <ul>
                    <li>Planned and managed the annual IT budget ($200K) for BP/Tesoro’s Carson Refinery Quality Assurance Lab.</li>
                    <li>Strengthened the information security posture of Tesoro; designed and implemented information security capabilities for a remote access solution (VPN) into Tesoro networks.</li>
                    <li>Virtualized the QA lab server infrastructure; deployed VMware vSphere for resiliency, performance gains, and energy savings, resulting in $2.5K in power savings per year.</li>
                    <li>Administered domain controllers and file & print servers. Performed all functions of access control.</li>
                    <li>Managed Tesoro information system patch management program. Performed routine preventive maintenance activities to ensure availability of critical systems.</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="education">
              <h2>Education</h2>
              <div className="items">
                <div className="item">
                  <div className="item_heading">
                    <div className="info">
                      <h3>The Cloud Bootcamp</h3>
                      <p>1-year Intensive Cloud & DevOps bootcamp</p>
                    </div>
                    <div className="details">
                      <div className="location">Miami, FL</div>
                      <div className="duration">2023&mdash;2024</div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="item_heading">
                    <div className="info">
                      <h3>MTI College</h3>
                      <p>2-year AAS Degree: Microsoft Systems Engineer</p>
                    </div>
                    <div className="details">
                      <div className="location">Sacramento, CA</div>
                      <div className="duration">2000&mdash;2001</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="certifications">
              <h2>Certifications</h2>
                <div className="items">
                <ul>
                  <li>Security+, CompTIA, May 2025</li>
                  <li>AWS Certified AI Practitioner, Amazon Web Services, February 2025</li>
                  <li>Microsoft Certified: Security, Compliance, and Identity Fundamentals, Microsoft, May 2024</li>
                  <li>GitHub Foundations, GitHub, February 2024</li>
                  <li>AWS Certified Solutions Architect – Associate, Amazon Web Services, October 2023</li>
                  <li>Microsoft Certified: Azure Fundamentals, Microsoft, November 2022</li>
                  <li>Network +, CompTIA, June 2022</li>
                </ul>
                </div>
            </section>
            <section className="military">
              <h2>Military Service</h2>
                <div className="items">
                  <div className="item">
                    <div className="item_heading">
                      <div className="info">
                      <p>Veteran, United States Marine Corps, Non-Commissioned Officer, Honorable Discharge</p>
                      </div>
                      <div className="details">
                        <div className="duration">1990&mdash;1996</div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
            <section className="skills">
              <h2>Skills</h2>
            </section>
    </>
  );
}
