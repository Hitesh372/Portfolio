export interface TechItem {
    name: string;
    description: string;
    githubUrl?: string;
    icon?: string;
}

export interface TechCategory {
    category: string;
    items: TechItem[];
}

export const techStack: TechCategory[] = [
    {
        category: "Automation Tools",
        items: [
            { name: "Playwright", description: "Modern end-to-end testing", githubUrl: "https://github.com/Hitesh372/Playwright-scripts" },
            { name: "Cypress", description: "Modern web testing", githubUrl: "https://github.com/Hitesh-jangid372?tab=repositories&q=cypress" },
            { name: "Selenium", description: "Browser automation", githubUrl: "https://github.com/Hitesh-jangid372?tab=repositories&q=selenium" },
            { name: "Cucumber", description: "BDD framework", githubUrl: "https://github.com/Hitesh-jangid372?tab=repositories&q=cucumber" },
            { name: "Appium", description: "Mobile automation", githubUrl: "https://github.com/Hitesh372/Appium-scripts" },
            { name: "Pytest", description: "Python testing framework", githubUrl: "https://github.com/Hitesh-jangid372?tab=repositories&q=pytest" },
            { name: "WebdriverIO", description: "Next-gen browser automation", githubUrl: "" },
            { name: "Capybara", description: "Acceptance test framework", githubUrl: "" },
            { name: "RSpec", description: "Behavior Driven Development", githubUrl: "" },
        ],
    },
    {
        category: "Languages",
        items: [
            { name: "Java", description: "Object-oriented programming", githubUrl: "https://github.com/Hitesh-jangid372?tab=repositories&q=java" },
            { name: "TypeScript", description: "Typed JavaScript", githubUrl: "https://github.com/Hitesh372/Typescript-practice" },
            { name: "Ruby", description: "Dynamic, open source language", githubUrl: "" },
            { name: "DSA", description: "Data Structures & Algorithms", githubUrl: "https://github.com/Hitesh-jangid372?tab=repositories&q=dsa" },
        ],
    },
    {
        category: "Performance & API",
        items: [
            { name: "JMeter", description: "Load testing", githubUrl: "https://github.com/Hitesh372/Performance-Testing-with-Jmeter" },
            { name: "Blazemeter", description: "Performance testing platform", githubUrl: "" },
            { name: "Postman", description: "API development & testing", githubUrl: "" },
        ],
    },
    {
        category: "Management & Tools",
        items: [
            { name: "Jira", description: "Issue tracking", githubUrl: "" },
            { name: "Git", description: "Version control", githubUrl: "" },
            { name: "Docker", description: "Containerization", githubUrl: "" },
        ],
    },
];
