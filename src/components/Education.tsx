"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section className="py-24 relative bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Education
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="relative h-full bg-card border border-white/5 rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                    <GraduationCap className="w-6 h-6" />
                                </div>

                                <h3 className="text-lg font-bold text-foreground mb-2">{edu.degree}</h3>
                                <p className="text-muted-foreground mb-6">{edu.institution}</p>

                                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                                    <span className="text-sm font-medium text-muted-foreground/60">{edu.year}</span>
                                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                        {edu.grade}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
