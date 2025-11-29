"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { Award, ShieldCheck } from "lucide-react";

export default function Certifications() {
    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Certifications
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            {cert.url ? (
                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full"
                                >
                                    <div className="relative h-full bg-card border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                <Award className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                                                    {cert.name}
                                                </h3>
                                                <p className="text-sm text-muted-foreground flex items-center gap-2">
                                                    <ShieldCheck className="w-4 h-4" />
                                                    {cert.issuer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ) : (
                                <div className="relative h-full bg-card border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                                                {cert.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                                                <ShieldCheck className="w-4 h-4" />
                                                {cert.issuer}
                                            </p>
                                        </div>
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
