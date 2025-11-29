"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { useState, useEffect } from "react";
import { getAssetPath } from "@/lib/utils";

export default function Hero() {
    const roles = [
        "QA Automation Engineer",
        "Performance Tester",
        "Full Stack QA"
    ];
    const [currentRole, setCurrentRole] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const fullRole = roles[roleIndex];

            if (isDeleting) {
                setCurrentRole(fullRole.substring(0, currentRole.length - 1));
                setTypingSpeed(50);
            } else {
                setCurrentRole(fullRole.substring(0, currentRole.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && currentRole === fullRole) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && currentRole === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentRole, isDeleting, roleIndex, roles, typingSpeed]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px] animate-spotlight"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary font-medium text-sm">
                            Available for new opportunities
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                            Hi, I&apos;m <span className="text-primary text-glow">{profile.name}</span>
                            <br />
                            <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground mt-4 block min-h-[1.2em]">
                                I am a {currentRole}
                                <span className="animate-pulse">|</span>
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                            {profile.tagline}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                            <a
                                href="#projects"
                                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)]"
                            >
                                View My Work
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href={profile.resumeUrl}
                                download="Resume.pdf"
                                className="px-8 py-4 rounded-full bg-card border border-white/10 hover:border-primary/50 text-foreground font-bold text-lg transition-all flex items-center gap-2 hover:bg-white/5"
                            >
                                Download CV
                                <Download className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="flex justify-center lg:justify-start gap-6">
                            <a
                                href={profile.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href={profile.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href={`mailto:${profile.socials.email}`}
                                className="p-3 rounded-full bg-white/5 border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                            >
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 relative w-full max-w-[500px] lg:max-w-none"
                    >
                        <div className="relative w-full aspect-square animate-float">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-[80px] -z-10" />
                            <img
                                src={getAssetPath("/hero-avatar.png")}
                                alt="Abstract Tech Avatar"
                                className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(var(--primary),0.3)]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
