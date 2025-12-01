// src/data/ResumeData.js

const resumeData = {
  person: {
    name: "Russ Ryness",
    email: "russ.ryness@gmail.com",
    phone: "+1 949-123-1234",
    linkedin: "https://linkedin.com/in/russ-ryness"
  },

sections: {
    summary: [
      {
        description: "The summary should go here..." // You can fill this in later if needed
      }
    ],
  
  
    experience: [
      {
        role: "IT Consultant",
        business: "RG Consulting",
        duration: "Feb 2023—present",
        location: "Aliso Viejo, CA",
        description: "RG Consulting provides Cloud migration services to SMBs.",
        bullets: [
          "Created and implemented an e-Commerce MVP (Minimum Viable Product) on AWS by employing automation using Terraform and Ansible (Infrastructure as Code).",
          "Configured AWS Systems Manager to automate installation of security agents, and Simple Notification Service (SNS) to notify administrators of installation status.",
          "Implemented an auto-scaling web application using AWS Elastic Beanstalk, an Elastic Load Balancer (ELB), and an auto-scaling group of EC2 instances to support 10k+ concurrent attendees of a large conference that used the app to enter a raffle for exam vouchers.",
          "Deployed an e-learning and e-commerce web application using AWS LightSail, Route53, and CloudFront which enabled the business to sell their e-learning courses online.",
          "Built out a satellite office with Ethernet LAN, redundant circuits, Juniper Mist wireless access points, Mitel VOIP phones, and a Zoom video conference room, enabling the business to expand operations to a new region.",
          "Migrated from on-premises Cisco UCM to Zoom hosted VOIP solution, enhancing their communication capabilities with features such as call recording, live transcription, chat, and video conferencing."
        ]
      },
      {
        role: "Infrastructure Services Manager",
        business: "Covenant Care",
        duration: "Jul 2015—Jan 2023",
        location: "Aliso Viejo, CA",
        description:
          "Covenant Care provides skilled nursing, physical therapy, and home health services throughout California and Nevada.",
        bullets: [
          "Directed daily operations of a 5-person team, monitored KPIs and SLAs using Remedy IT Service Management tool and ensured services were delivered in accordance with company requirements.",
          "Administered Data Centers in Irvine, CA and Las Vegas, NV; managed 100+ Windows & Linux server VMware virtual machines and utilized Veeam Backup with a GFS backup strategy for data retention and disaster recovery.",
          "Hardened infrastructure security posture, configured and monitored Palo Alto firewalls, limited access using IAM tools, audited admin privileges using Privileged Access Management (PAM) tools, managed TLS/SSL certificates, and conducted security awareness training sessions and phishing campaigns.",
          "Migrated 2,500 accounts from on-premises Exchange to Microsoft 365 & Azure Active Directory; audited security & distribution groups, scheduled migrations, authored end-user communications & training manuals, and provided follow-on support.",
          "Optimized Microsoft 365 licensing upon renewal; shifted from E3 to a mix of E5 and F1 licenses and capitalized on synergies with M365 and Intune, Data Loss Prevention (DLP) and Defender for Endpoint, and eliminated the need for standalone MDM (MobileIron) and security solutions, resulting in $50K annual savings.",
          "Implemented OneLogin Unified Access Management (UAM) and enhanced network security, enforced MFA when accessing VPN, Cloud, PaaS & SaaS resources and enabled Single Sign-On (SSO) to simplify user workflows.",
          "Monitored and optimized corporate LAN/WAN performance across 3 data centers, corporate HQ, and 40+ nursing facilities using VeloCloud SD-WAN Orchestrator, Cisco Prime Infrastructure & WLCs, Meraki Admin Portal, and SolarWinds; raised & escalated tickets with ISPs as necessary to optimize network availability.",
          "Managed relationships with our managed service provider (MSP) and vendors via regular cadence meetings."
        ]
      },
      {
        role: "IT Manager",
        business: "Kevcomp Engineering",
        duration: "Jul 2015—Jan 2023",
        location: "Carson, CA",
        description:
          "The Carson refinery Quality Assurance lab provides extensive testing for a range of petroleum fuels and products",
        bullets: [
          "Planned and managed the annual IT budget ($200K) for BP/Tesoro’s Carson Refinery Quality Assurance Lab.",
          "Strengthened the information security posture of Tesoro; designed and implemented information security capabilities for a remote access solution (VPN) into Tesoro networks.",
          "Virtualized the QA lab server infrastructure; deployed VMware vSphere for resiliency, performance gains, and energy savings, resulting in $2.5K in power savings per year.",
          "Administered domain controllers and file & print servers. Performed all functions of access control.",
          "Managed Tesoro information system patch management program. Performed routine preventive maintenance activities to ensure availability of critical systems."
        ]
      }
    ],

    education: [
      {
        business: "The Cloud Bootcamp",
        description: "1-year Intensive Cloud & DevOps bootcamp",
        location: "Miami, FL",
        duration: "2023—2024"
      },
      {
        business: "MTI College",
        description: "2-year AAS Degree: Microsoft Systems Engineer",
        location: "Sacramento, CA",
        duration: "2000—2001"
      }
    ],

    certifications: [
      {
        bullets: [
        "Security+, CompTIA, May 2025",
        "AWS Certified AI Practitioner, Amazon Web Services, February 2025",
        "Microsoft Certified: Security, Compliance, and Identity Fundamentals, Microsoft, May 2024",
        "GitHub Foundations, GitHub, February 2024",
        "AWS Certified Solutions Architect – Associate, Amazon Web Services, October 2023",
        "Microsoft Certified: Azure Fundamentals, Microsoft, November 2022",
        "Network +, CompTIA, June 2022"
        ]
      }
    ],

    military: [
      {
      description: "Veteran, United States Marine Corps, Non-Commissioned Officer, Honorable Discharge",
      duration: "1990—1996"
      }
    ],

    skills: [
      {
        bullets: [
        "text",
        "text",
        "text"
        ]
      }
    ]
  }

};

export default resumeData;