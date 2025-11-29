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
        techTags: ["Selenium", "Java", "TestNG", "Jenkins"],
        achievements: [
            "Automated 80% of regression test cases",
            "Reduced regression time by 60%",
            "Integrated into CI pipeline for nightly runs",
        ],
        githubUrl: "https://github.com/Hitesh-jangid372/ecommerce-automation-demo",
    },
    {
        title: "API Testing Suite",
        description: "Comprehensive API testing suite for a fintech application.",
        techTags: ["RestAssured", "Java", "Maven", "Allure Reports"],
        achievements: [
            "Covered 100% of critical API endpoints",
            "Implemented data-driven testing",
            "Generated detailed execution reports",
        ],
        githubUrl: "https://github.com/Hitesh-jangid372/api-testing-demo",
    },
    {
        title: "Performance Test Framework",
        description: "Load testing framework using JMeter for high-traffic events.",
        techTags: ["JMeter", "Groovy", "Grafana", "InfluxDB"],
        achievements: [
            "Simulated 10k+ concurrent users",
            "Identified critical bottlenecks in database queries",
            "Real-time monitoring with Grafana dashboards",
        ],
        githubUrl: "https://github.com/Hitesh-jangid372/performance-testing-demo",
    },
    {
        title: "Playwright E2E Suite",
        description: "Modern web automation using Playwright with TypeScript.",
        techTags: ["Playwright", "TypeScript", "GitHub Actions"],
        achievements: [
            "Implemented parallel execution reducing build time by 50%",
            "Cross-browser testing on Chromium, Firefox, and WebKit",
            "Visual regression testing integration",
        ],
        githubUrl: "https://github.com/Hitesh-jangid372/playwright-demo",
    },
];
