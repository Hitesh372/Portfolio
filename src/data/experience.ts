export interface ProjectDetail {
    name: string;
    description: string;
    achievements: string[];
}

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description?: string;
    projects?: ProjectDetail[];
    skills?: string[];
}

export const experience: ExperienceItem[] = [
    {
        role: "Senior Automation Engineer",
        company: "Metacube Softwares Pvt Ltd",
        period: "August 2024 - Present",
        description: "Specialized in Salesforce automation and building advanced automation tools to enhance QA efficiency.",
        projects: [
            {
                name: "Automation Tools Development",
                description: "Developed internal tools to streamline the testing process for both manual and automation teams.",
                achievements: [
                    "Developed 'Smart Xpath' extension (similar to SelectorsHub), reducing script creation time by 30%.",
                    "Built 'Record and Play' application using Puppeteer to generate automatic XPaths and scripts for manual QAs.",
                    "Significantly reduced the time required for XPath creation and script maintenance.",
                ],
            },
            {
                name: "Salesforce Automation",
                description: "Focused on automated testing frameworks for Salesforce applications.",
                achievements: [
                    "Gained hands-on experience in Salesforce automation.",
                    "Automated complex websites using RSpec, Capybara, and Selenium.",
                    "Implemented robust test automation strategies ensuring high quality delivery.",
                ],
            },
        ],
    },
    {
        role: "Associate Quality Analyst",
        company: "Dotsquares Technology",
        period: "September 2022 - August 2024",
        projects: [
            {
                name: "Stubben Edge",
                description: "A sophisticated Multi-Tenant System functioning as an administrative hub for UK insurance domain, managing policy and customer data.",
                achievements: [
                    "Led manual and automated testing with Cypress and Cypress IO cloud.",
                    "Applied diverse testing techniques including functional, UI, and API testing.",
                    "Conducted regression, integration, and performance testing with JMeter.",
                    "Analyzed requirements to ensure effective test case alignment.",
                    "Worked with Cypress & Cucumber, reducing manual efforts by up to 90%.",
                    "Proactively communicated with clients and conducted product demos.",
                ],
            },
            {
                name: "BCX Pro & Jobcapper",
                description: "Cryptocurrency exchange and trading websites.",
                achievements: [
                    "Conducted penetration testing identifying and reporting vulnerabilities.",
                    "Enhanced security posture by 40% through meticulous analysis.",
                    "Used Metasploit, Nessus, Nmap, Hydra, OWASP ZAP, and SQL Map.",
                    "Produced detailed security reports and mitigation strategies.",
                    "Streamlined test case management using Selenium with Python.",
                ],
            },
        ],
    },
    {
        role: "Junior Engineer/Apprentice",
        company: "Genus Power Infra. Ltd.",
        period: "January 2021 - August 2022",
        description: "Specialized in manufacturing and distribution of power management solutions. Worked on ERP, CRM, and MES software.",
        projects: [
            {
                name: "Enterprise Systems (ERP, CRM, MES)",
                description: "Integrated business processes, customer management, and real-time manufacturing monitoring.",
                achievements: [
                    "Proficiently developed and maintained comprehensive test documentation (plans, scenarios, cases, reports).",
                    "Demonstrated expertise in manual testing (regression, smoke, sanity, cross-platform, mobile).",
                    "Leveraged advanced bug tracking tools to efficiently capture and resolve system issues.",
                ],
            },
        ],
    },
];
