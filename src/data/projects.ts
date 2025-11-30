export interface Project {
    title: string;
    description: string;
    techTags: string[];
    achievements: string[];
    githubUrl: string;
    demoUrl?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        title: "E-commerce Automation Framework",
        description: "End-to-end regression automation for a large-scale e-commerce platform.",
        techTags: ["Cypress", "JavaScript", "Playwright", "Jenkins"],
        achievements: [
            "Automated 80% of regression test cases",
            "Reduced regression time by 60%",
            "Created suites for different environments",
            "Implemented data-driven testing",
            "Created regression and sanity test suites",
        ],
        githubUrl: "https://github.com/Hitesh372/Cypress-automation-",
    },
    {
        title: "API Testing Suite",
        description: "Comprehensive API testing suite for a fintech application.",
        techTags: ["Cypress", "JavaScript", "Playwright", "Jenkins"],
        achievements: [
            "Covered 100% of critical API endpoints",
            "Implemented data-driven testing",
            "Generated detailed execution reports",
        ],
        githubUrl: "",
    },
    {
        title: "Performance Test Framework",
        description: "Load testing framework using JMeter for high-traffic events.",
        techTags: ["JMeter", "blazemeter"],
        achievements: [
            "Simulated 10k+ concurrent users",
            "Identified critical bottlenecks in database queries",
            "Generated detailed execution reports",

        ],
        githubUrl: "https://github.com/Hitesh372/Performance-Testing-with-Jmeter",
    },
    {
        title: "Playwright E2E Suite",
        description: "Modern web automation using Playwright with TypeScript.",
        techTags: ["Playwright", "TypeScript", "Jenkins"],
        achievements: [
            "Implemented parallel execution reducing build time by 50%",
            "Cross-browser testing on Chromium, Firefox, and WebKit",
            "Visual regression testing integration",
        ],
        githubUrl: "https://github.com/Hitesh372/Playwright-scripts",
    },
];
