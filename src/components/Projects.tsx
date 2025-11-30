"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Showcasing my journey in automation and performance testing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl bg-card border border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="relative p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                    <div className="flex gap-3">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="relative group/btn p-2 rounded-full bg-white/5 hover:bg-primary/10 hover:text-primary text-muted-foreground transition-all duration-300 hover:w-24 w-9 h-9 flex items-center justify-center overflow-hidden"
                                            >
                                                <div className="absolute inset-0 flex items-center justify-center group-hover/btn:opacity-0 transition-opacity duration-300">
                                                    <Github className="w-5 h-5" />
                                                </div>
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                                    <span className="text-xs font-medium mr-1">Verify</span>
                                                    <ExternalLink className="w-3 h-3" />
                                                </div>
                                            </a>
                                        )}
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-white/5 hover:bg-primary/10 hover:text-primary text-muted-foreground transition-colors"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {project.achievements.map((achievement, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground/80">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            {achievement}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.techTags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 text-muted-foreground border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
