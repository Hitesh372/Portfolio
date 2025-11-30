"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { techStack } from "@/data/techStack";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...techStack.map((c) => c.category)];

    const filteredItems = activeCategory === "All"
        ? techStack.flatMap((c) => c.items.map(item => ({ ...item, category: c.category })))
        : techStack.find((c) => c.category === activeCategory)?.items.map(item => ({ ...item, category: activeCategory })) || [];

    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Tech Stack & Skills
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        My technical expertise and the tools I use to build reliable automation frameworks.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                activeCategory === category
                                    ? "bg-primary/10 border-primary text-primary"
                                    : "bg-transparent border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative"
                        >
                            {item.githubUrl ? (
                                <a
                                    href={item.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full"
                                >
                                    <div className="relative h-full bg-card border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] cursor-pointer">
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                                                <span>Verify</span>
                                                <ExternalLink className="w-3 h-3" />
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {item.name}
                                            </h3>
                                            <div className="text-muted-foreground group-hover:text-primary transition-colors">
                                                <Github className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                            {item.description}
                                        </p>
                                        <div className="text-xs font-medium px-2.5 py-1 rounded-md inline-block bg-white/5 text-muted-foreground border border-white/10">
                                            {item.category}
                                        </div>
                                    </div>
                                </a>
                            ) : (
                                <div className="relative h-full bg-card border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {item.name}
                                        </h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                        {item.description}
                                    </p>
                                    <div className="text-xs font-medium px-2.5 py-1 rounded-md inline-block bg-white/5 text-muted-foreground border border-white/10">
                                        {item.category}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
