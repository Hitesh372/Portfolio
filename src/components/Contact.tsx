"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { profile } from "@/data/profile";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate network delay for better UX
        setTimeout(() => {
            const mailtoLink = `mailto:${profile.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
            window.location.href = mailtoLink;
            setStatus("success");

            // Reset form after delay
            setTimeout(() => {
                setStatus("idle");
                setFormData({ name: "", email: "", subject: "", message: "" });
            }, 3000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-black/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Ready to collaborate? Let&apos;s discuss how I can help ensure the quality and security of your software.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-card border border-white/5 p-8 rounded-2xl"
                        >
                            <h3 className="text-xl font-bold mb-8 text-foreground">Contact Details</h3>
                            <div className="space-y-8">
                                <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-6 text-muted-foreground hover:text-primary transition-colors group">
                                    <div className="p-3 rounded-lg bg-white/5 text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all border border-white/5">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg font-medium">{profile.contact.email}</span>
                                </a>

                                <a href={`tel:${profile.contact.phone}`} className="flex items-center gap-6 text-muted-foreground hover:text-primary transition-colors group">
                                    <div className="p-3 rounded-lg bg-white/5 text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all border border-white/5">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg font-medium">{profile.contact.phone}</span>
                                </a>

                                <div className="flex items-center gap-6 text-muted-foreground group">
                                    <div className="p-3 rounded-lg bg-white/5 text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all border border-white/5">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg font-medium">{profile.contact.location}</span>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/5 flex gap-4">
                                <a
                                    href={profile.socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-white/5 hover:bg-primary/10 hover:text-primary text-muted-foreground transition-all border border-white/5"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href={profile.socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-white/5 hover:bg-primary/10 hover:text-primary text-muted-foreground transition-all border border-white/5"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <form className="bg-card border border-white/5 p-8 rounded-2xl space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground/50"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status !== "idle"}
                                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "idle" && (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                                {status === "submitting" && (
                                    <>
                                        Sending...
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    </>
                                )}
                                {status === "success" && (
                                    <>
                                        Sent!
                                        <CheckCircle2 className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
