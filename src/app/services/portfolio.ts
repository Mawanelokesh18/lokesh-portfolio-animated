import { Injectable } from '@angular/core';

export interface Experience {
  title: string; company: string; period: string; type: string;
  bullets: string[]; tags: string[];
}
export interface Project {
  name: string; emoji: string; description: string; teamSize: number;
  bullets: string[]; tech: string[];
}
export interface Education {
  degree: string; institution: string; period: string; score: string; scoreLabel: string;
}
export interface Skill {
  category: string; icon: string; items: string[];
}

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly name = 'Lokesh Mawane';
  readonly initials = 'LM';
  readonly title = 'Associate Software Engineer';
  readonly subtitle = 'Backend · Full Stack · Security';
  readonly email = 'lokeshmawane@gmail.com';
  readonly phone = '+91 8319098275';
  readonly location = 'Indore, M.P., India';
  readonly github = 'https://github.com/Mawanelokesh18';
  readonly linkedin = 'https://www.linkedin.com/in/lokeshmawane/';
  readonly leetcode = 'https://leetcode.com/u/lokesh36/';

  readonly stats = [
    { label: 'Experience', value: '1+', unit: 'yr' },
    { label: 'Projects', value: '5+', unit: '' },
    { label: 'Tech Stack', value: '15+', unit: '' },
  ];

  readonly skills: Skill[] = [
    { category: 'Backend', icon: '⚙️', items: ['Java', 'Spring Boot', 'RESTful APIs', 'Microservices'] },
    { category: 'Frontend', icon: '🖥️', items: ['Angular', 'HTML5', 'CSS3', 'TypeScript'] },
    { category: 'Security', icon: '🔐', items: ['Keycloak', 'OAuth 2.0', 'OpenID Connect', 'JWT', 'RBAC'] },
    { category: 'Database', icon: '🗄️', items: ['MySQL', 'DBMS', 'SQL Optimization'] },
    { category: 'Tools', icon: '🛠️', items: ['Git', 'Docker', 'Postman', 'IntelliJ IDEA', 'VS Code', 'JMeter', 'DBeaver'] },
    { category: 'Soft Skills', icon: '🤝', items: ['Problem Solving', 'Analytical Thinking', 'Team Collaboration'] },
  ];

  readonly skillBars = [
    { name: 'Java / Spring Boot', level: 88 },
    { name: 'Angular / TypeScript', level: 78 },
    { name: 'OAuth 2.0 / Keycloak', level: 82 },
    { name: 'MySQL / SQL', level: 80 },
    { name: 'RESTful APIs', level: 90 },
    { name: 'Docker / Git', level: 75 },
    { name: 'Microservices', level: 80 },
  ];

  readonly allTechTags = [
    'Java','Spring Boot','Angular','TypeScript','Keycloak','OAuth 2.0','JWT',
    'MySQL','Docker','Git','Postman','REST API','Microservices','RBAC',
    'OpenID Connect','HTML5','SCSS','IntelliJ','JMeter','DBeaver',
    'Microsoft Graph API','AWS S3','Rate Limiting','Caching',
  ];

  readonly experiences: Experience[] = [
    {
      title: 'Associate Software Engineer', company: 'Arrayscript India',
      period: 'Aug 2024 – Present', type: 'Full-time',
      bullets: [
        'Contributed to Quotation Plus, a quotation management platform built using Spring Boot and Angular.',
        'Implemented centralized authentication using Keycloak to enable SSO across services.',
        'Configured auth flows, roles, and permissions for secure access control.',
        'Integrated backend microservices using OAuth 2.0 and JWT-based security.',
        'Customized Keycloak login/account UI themes to align with product branding.',
        'Secured REST APIs and protected frontend routes via token refresh mechanisms.',
        'Designed and maintained microservices architecture and optimized SQL queries.',
      ],
      tags: ['Spring Boot','Angular','Keycloak','OAuth 2.0','JWT','MySQL','Microservices'],
    },
    {
      title: 'Software Engineering Intern', company: 'Arrayscript India',
      period: 'May 2024 – Aug 2024', type: 'Internship',
      bullets: [
        'Assisted in backend development tasks using Spring Boot.',
        'Built and tested RESTful APIs and integrated them with frontend components.',
        'Supported implementation of authentication and authorization workflows.',
        'Participated in bug fixing, API testing, and documentation efforts.',
      ],
      tags: ['Spring Boot','REST APIs','Java','Postman'],
    },
  ];

  readonly projects: Project[] = [
    {
      name: 'Interpanely', emoji: '🎙️', teamSize: 4,
      description: 'End-to-end interview management platform to schedule, conduct, and track candidate interviews with panel members.',
      bullets: [
        'Designed and developed backend services using Spring Boot, exposing RESTful APIs for interview scheduling and panel management.',
        'Integrated Microsoft Graph API for calendar-based meeting scheduling and automated interview invitations.',
        'Implemented centralized authentication using Keycloak and OAuth 2.0 with SSO support across services.',
        'Applied rate limiting and caching strategies to ensure system stability and performance under load.',
        'Integrated AWS S3 for document and resource storage, and developed Angular-based frontend screens for panel workflows.',
      ],
      tech: ['Java', 'Spring Boot', 'Angular', 'Keycloak', 'OAuth 2.0', 'JWT', 'MySQL', 'Microsoft Graph API', 'AWS S3'],
    },
    {
      name: 'Quotation Plus', emoji: '📋', teamSize: 3,
      description: 'Full-stack quotation management platform enabling businesses to create, manage, and track quotations efficiently.',
      bullets: [
        'Built backend microservices using Spring Boot and designed RESTful APIs for quotation lifecycle management.',
        'Implemented role-based access control (RBAC) and SSO using Keycloak and OAuth 2.0 for secure multi-user access.',
        'Developed responsive frontend interfaces with Angular to streamline quotation creation and approval workflows.',
        'Optimized database queries and integrated caching to improve application performance.',
      ],
      tech: ['Java', 'Spring Boot', 'Angular', 'Keycloak', 'OAuth 2.0', 'JWT', 'MySQL', 'Microservices'],
    },
    {
      name: 'Smart Voting System', emoji: '🗳️', teamSize: 4,
      description: 'Secure web-based voting platform with facial recognition authentication to prevent duplicate voting.',
      bullets: [
        'Implemented facial recognition using CVZone for voter verification.',
        'Integrated real-time face matching and image capture.',
        'Designed responsive UI using HTML/CSS with Firebase backend.',
      ],
      tech: ['Python','Django','CVZone','Firebase','HTML','CSS'],
    },
    {
      name: 'ATM Simulator System', emoji: '🏧', teamSize: 2,
      description: 'Desktop-based ATM simulation with full transaction management and secure DB connectivity.',
      bullets: [
        'Implemented balance inquiry, cash deposit, withdrawal, and PIN change.',
        'Ensured secure transaction handling and database connectivity.',
      ],
      tech: ['Java','AWT','MySQL'],
    },
  ];

  readonly education = [
    {
      degree: 'B.Tech – Information Technology',
      institution: 'Chameli Devi Group Of Institution, Indore',
      period: '2020 – 2024', score: '7.9', scoreLabel: 'CGPA',
    },
    {
      degree: 'Higher Secondary School Certificate',
      institution: 'Garima Vidya Vihar',
      period: '2019 – 2020', score: '71.4%', scoreLabel: 'Score',
    },
  ];

  readonly contactInfo = [
    { icon: '✉️', label: 'Email', value: 'lokeshmawane@gmail.com', link: 'mailto:lokeshmawane@gmail.com' },
    { icon: '📞', label: 'Phone', value: '+91 8319098275', link: 'tel:+918319098275' },
    { icon: '📍', label: 'Location', value: 'Indore, M.P., India' },
    { icon: '💼', label: 'Status', value: 'Open to Opportunities' },
  ];
}
