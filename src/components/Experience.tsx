"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Calendar, Briefcase, CheckCircle2 } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Work Experience
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        My professional journey in Quality Assurance and Automation.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

                            <div className="pl-8 md:pl-12">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                                        <div className="text-lg text-primary font-medium">{exp.company}</div>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-muted-foreground text-sm font-medium w-fit border border-white/10">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                </div>

                                {exp.description && (
                                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-3xl">
                                        {exp.description}
                                    </p>
                                )}

                                {exp.projects && (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {exp.projects.map((project, pIndex) => (
                                            <div
                                                key={pIndex}
                                                className="group bg-card border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                                            >
                                                <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-3">
                                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                        <Briefcase className="w-4 h-4" />
                                                    </div>
                                                    {project.name}
                                                </h4>
                                                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                                    {project.description}
                                                </p>
                                                <ul className="space-y-3">
                                                    {project.achievements.map((achievement, aIndex) => (
                                                        <li key={aIndex} className="flex items-start gap-3 text-sm text-muted-foreground/80">
                                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
