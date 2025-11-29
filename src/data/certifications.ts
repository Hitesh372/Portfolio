export interface CertificationItem {
    name: string;
    issuer: string;
    date?: string;
    url?: string;
}

export const certifications: CertificationItem[] = [
    {
        name: "Master Performance Testing using JMeter",
        issuer: "Udemy",
        url: "https://www.udemy.com/certificate/UC-83514d8b-165e-488f-9e9e-382c1d9c5517/",
    },
    {
        name: "Learn Playwright with TypeScript",
        issuer: "Udemy",
        url: "https://www.udemy.com/certificate/UC-a0fed67b-e0fa-4422-8de7-6cf273e4e65d/",
    },
    {
        name: "Appium Mobile Automation",
        issuer: "Udemy",
        url: "https://www.udemy.com/certificate/UC-965fe275-54b1-4da9-9622-c625ec3af0a4/",
    },
    {
        name: "Introduction to Back-End Development",
        issuer: "Meta",
        url: "https://coursera.org/share/9f1bf2d8750bc174f57b09c055f75bc9",
    },
    {
        name: "Foundations of Cybersecurity",
        issuer: "Google",
        url: "https://coursera.org/share/faea45a90dbe45df56b715fa4108e94e",
    },
    {
        name: "Introduction to Front-End Development",
        issuer: "Meta",
        url: "https://coursera.org/share/015fdd2630a74b64ca2e5812ad713b1f",
    },
    {
        name: "Version Control",
        issuer: "Meta",
        url: "https://coursera.org/share/2ce44f0460e89aac0a44ae8b7fa13577",
    },
    {
        name: "Programming with JavaScript",
        issuer: "Meta",
        url: "https://coursera.org/share/22c41fee8f08f59cd73590c0c950a20a",
    },
];
