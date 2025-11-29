export interface EducationItem {
    degree: string;
    institution: string; // Not provided, will leave generic or empty if not known, but user didn't give institution names for school.
    year: string;
    grade: string;
}

export const education: EducationItem[] = [
    {
        degree: "Bachelor of Technology",
        institution: "University/College", // Placeholder
        year: "2020",
        grade: "7 CGPA",
    },
    {
        degree: "Senior Secondary",
        institution: "School Board", // Placeholder
        year: "2016",
        grade: "78.60 %",
    },
    {
        degree: "Secondary",
        institution: "School Board", // Placeholder
        year: "2014",
        grade: "79.16 %",
    },
];
