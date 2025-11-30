import {
    SiCypress,
    SiSelenium,
    SiCucumber,
    SiAppium,
    SiPytest,
    SiRubygems,
    SiTypescript,
    SiPython,
    SiJavascript,
    SiRuby,
    SiLeetcode,
    SiApachejmeter,
    SiBlazemeter,
    SiPostman,
    SiJira,
    SiGit,
    SiDocker,
    SiJenkins,
} from "react-icons/si";
import { FaJava, FaMicrosoft } from "react-icons/fa";
import { IconType } from "react-icons";

export interface TechItem {
    name: string;
    description: string;
    githubUrl?: string;
    icon?: IconType;
}

export interface TechCategory {
    category: string;
    items: TechItem[];
}

export const techStack: TechCategory[] = [
    {
        category: "Automation Tools",
        items: [
            { name: "Playwright", description: "Modern end-to-end testing", githubUrl: "https://github.com/Hitesh372/Playwright-scripts", icon: FaMicrosoft },
            { name: "Cypress", description: "Modern web testing", githubUrl: "https://github.com/Hitesh372/Cypress-automation-", icon: SiCypress },
            { name: "Selenium", description: "Browser automation", githubUrl: "https://github.com/Hitesh372/HRM-automation-using-Selenium-and-Java", icon: SiSelenium },
            { name: "Cucumber", description: "BDD framework", githubUrl: "https://github.com/Hitesh372/Cypress-automation-", icon: SiCucumber },
            { name: "Appium", description: "Mobile automation", githubUrl: "https://github.com/Hitesh372/Appium-scripts", icon: SiAppium },
            { name: "Pytest", description: "Python testing framework", githubUrl: "https://github.com/Hitesh-jangid372?tab=repositories&q=pytest", icon: SiPytest },
            { name: "Capybara", description: "Acceptance test framework", githubUrl: "", icon: SiRubygems },
            { name: "RSpec", description: "Behavior Driven Development", githubUrl: "", icon: SiRubygems },
        ],
    },
    {
        category: "Languages",
        items: [
            { name: "Java", description: "Object-oriented programming", githubUrl: "https://github.com/Hitesh-jangid372?tab=repositories&q=java", icon: FaJava },
            { name: "TypeScript", description: "Typed JavaScript", githubUrl: "https://github.com/Hitesh372/Typescript-practice", icon: SiTypescript },
            { name: "Python", description: "Versatile programming language", githubUrl: "", icon: SiPython },
            { name: "JavaScript", description: "Web scripting language", githubUrl: "https://github.com/Hitesh372/Cypress-automation-", icon: SiJavascript },
            { name: "Ruby", description: "Dynamic, open source language", githubUrl: "", icon: SiRuby },
            { name: "DSA", description: "Data Structures & Algorithms", githubUrl: "https://leetcode.com/u/jangidh212/", icon: SiLeetcode },
        ],
    },
    {
        category: "Performance & API",
        items: [
            { name: "JMeter", description: "Load testing", githubUrl: "https://github.com/Hitesh372/Performance-Testing-with-Jmeter", icon: SiApachejmeter },
            { name: "Blazemeter", description: "Performance testing platform", githubUrl: "", icon: SiBlazemeter },
            { name: "Postman", description: "API development & testing", githubUrl: "", icon: SiPostman },
        ],
    },
    {
        category: "Management & Tools",
        items: [
            { name: "Jenkins", description: "CI/CD Automation", githubUrl: "", icon: SiJenkins },
            { name: "Jira", description: "Issue tracking", githubUrl: "", icon: SiJira },
            { name: "Git", description: "Version control", githubUrl: "", icon: SiGit },
            { name: "Docker", description: "Containerization", githubUrl: "", icon: SiDocker },
        ],
    },
];
