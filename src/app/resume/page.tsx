"use client";

import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { techStack } from "@/data/techStack";
import { certifications } from "@/data/certifications";
import { Download, Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { useEffect } from "react";

export default function ResumePage() {
    // Force light mode for this page
    useEffect(() => {
        document.documentElement.classList.remove("dark");
        return () => {
            document.documentElement.classList.add("dark");
        };
    }, []);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-white text-black p-8 md:p-16 font-sans">
            {/* Print Button - Hidden when printing */}
            <div className="fixed bottom-8 right-8 print:hidden z-50">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 transition-all font-medium"
                >
                    <Download className="w-5 h-5" />
                    Save as PDF
                </button>
            </div>

            <div className="max-w-[210mm] mx-auto bg-white print:max-w-none">
                {/* Header */}
                <header className="border-b-2 border-slate-800 pb-6 mb-6">
                    <h1 className="text-4xl font-bold uppercase tracking-wide mb-2 text-slate-900">
                        {profile.name}
                    </h1>
                    <p className="text-xl text-slate-600 font-medium mb-4">{profile.role}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        {profile.contact.email && (
                            <div className="flex items-center gap-1.5">
                                <Mail className="w-4 h-4" />
                                <span>{profile.contact.email}</span>
                            </div>
                        )}
                        {profile.contact.phone && (
                            <div className="flex items-center gap-1.5">
                                <Phone className="w-4 h-4" />
                                <span>{profile.contact.phone}</span>
                            </div>
                        )}
                        {profile.contact.location && (
                            <div className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4" />
                                <span>{profile.contact.location}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-1.5">
                            <Linkedin className="w-4 h-4" />
                            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Github className="w-4 h-4" />
                            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                        </div>
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase tracking-wider border-b border-slate-300 mb-3 pb-1 text-slate-800">
                        Professional Summary
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-sm text-justify">
                        {profile.bio}
                    </p>
                </section>

                {/* Technical Skills */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase tracking-wider border-b border-slate-300 mb-3 pb-1 text-slate-800">
                        Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 gap-y-2 text-sm">
                        {techStack.map((category) => (
                            <div key={category.category} className="flex">
                                <span className="font-bold w-40 shrink-0 text-slate-800">{category.category}:</span>
                                <span className="text-slate-700">
                                    {category.items.map((item) => item.name).join(", ")}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase tracking-wider border-b border-slate-300 mb-4 pb-1 text-slate-800">
                        Work Experience
                    </h2>
                    <div className="space-y-6">
                        {experience.map((exp, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-slate-900 text-base">{exp.role}</h3>
                                    <span className="text-sm font-medium text-slate-600">{exp.period}</span>
                                </div>
                                <div className="text-slate-800 font-medium text-sm mb-2">{exp.company}</div>

                                {exp.description && (
                                    <p className="text-sm text-slate-700 mb-2 italic">{exp.description}</p>
                                )}

                                {exp.projects && (
                                    <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-700">
                                        {exp.projects.flatMap(p => p.achievements).map((achievement, i) => (
                                            <li key={i} className="pl-1">{achievement}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase tracking-wider border-b border-slate-300 mb-3 pb-1 text-slate-800">
                        Education
                    </h2>
                    <div className="space-y-2">
                        {education.map((edu, index) => (
                            <div key={index} className="flex justify-between text-sm">
                                <div>
                                    <span className="font-bold text-slate-900">{edu.degree}</span>
                                    {edu.institution && <span className="text-slate-700"> - {edu.institution}</span>}
                                </div>
                                <div className="text-slate-600">
                                    <span>{edu.year}</span>
                                    {edu.grade && <span> | {edu.grade}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications */}
                <section>
                    <h2 className="text-lg font-bold uppercase tracking-wider border-b border-slate-300 mb-3 pb-1 text-slate-800">
                        Certifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex justify-between">
                                <span className="font-medium text-slate-800">{cert.name}</span>
                                <span className="text-slate-600 italic">- {cert.issuer}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <style jsx global>{`
        @media print {
          @page {
            margin: 0;
            size: auto;
          }
          body {
            background: white;
            color: black;
          }
          /* Hide custom cursor and scroll progress in print */
          .custom-cursor, .scroll-progress {
            display: none !important;
          }
        }
      `}</style>
        </div>
    );
}
