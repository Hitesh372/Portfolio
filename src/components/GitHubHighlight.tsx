"use client";

import { motion } from "framer-motion";
import { Star, GitFork, Book, ExternalLink } from "lucide-react";

const pinnedRepos = [
    {
        name: "selenium-framework",
        description: "A robust Selenium framework with Java and TestNG.",
        language: "Java",
        stars: 0,
        forks: 0,
        url: "https://github.com/Hitesh372/HRM-automation-using-Selenium-and-Java",
    },
    {
        name: "playwright-typescript",
        description: "End-to-end testing with Playwright and TypeScript.",
        language: "TypeScript",
        stars: 0,
        forks: 0,
        url: "https://github.com/Hitesh372/Playwright-scripts",
    },

    {
        name: "performance-jmeter",
        description: "JMeter scripts for performance testing.",
        language: "JMeter",
        stars: 0,
        forks: 0,
        url: "https://github.com/Hitesh372/Performance-Testing-with-Jmeter",
    },
];

export default function GitHubHighlight() {
    return (
        <section className="py-20 bg-secondary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Highlights</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Top repositories and contributions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pinnedRepos.map((repo, index) => (
                        <motion.a
                            key={repo.name}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors flex flex-col h-full"
                        >
                            <div className="flex items-center gap-2 mb-2 text-primary font-medium">
                                <Book className="w-4 h-4" />
                                <span className="truncate">{repo.name}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4 flex-grow">
                                {repo.description}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    {repo.language}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Star className="w-3 h-3" />
                                    {repo.stars}
                                </div>
                                <div className="flex items-center gap-1">
                                    <GitFork className="w-3 h-3" />
                                    {repo.forks}
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-border flex justify-end">
                                <span className="text-xs font-medium text-primary flex items-center gap-1 group-hover:underline">
                                    View Code <ExternalLink className="w-3 h-3" />
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a
                        href="https://github.com/Hitesh372"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                    >
                        View Full GitHub Profile →
                    </a>
                </div>
            </div>
        </section>
    );
}
