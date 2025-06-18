import { useState } from "react";
import { cn } from "@/lib/utils";

const skills =[
    // Front End
    { name: "HTML/CSS", category: "FrontEnd"},
    { name: "JavaScript", category: "FrontEnd"},
    { name: "TypeScript", category: "FrontEnd"},
    { name: "React JS", category: "FrontEnd"},
    { name: "Next JS", category: "FrontEnd"},
    { name: "Vue JS", category: "FrontEnd"},

    //Back End
    { name: "Node JS", category: "BackEnd"},
    { name: "Django", category: "BackEnd"},
    { name: ".NET", category: "BackEnd"},
    { name: "Express", category: "BackEnd"},
    { name: "SQL Server", category: "BackEnd"},
    { name: "PostgreSQL", category: "BackEnd"},
    { name: "SQLite", category: "BackEnd"},

    // Mobile
    { name: "Swift", category: "Mobile"},
    { name: "Kotlin", category: "Mobile"},
    { name: "React Native", category: "Mobile"},
    { name: "Flutter", category: "Mobile"},

    //DevOps
    { name: "Docker", category: "DevOps"},
    { name: "Bash", category: "DevOps"},
    { name: "Git/GitHub/GitLab", category: "DevOps"},
    { name: "Linux", category: "DevOps"},
    { name: "AWS", category: "DevOps"},
    { name: "Jenkins", category: "DevOps"},
    { name: "Terrafrom", category: "DevOps"},
    { name: "Kubernetes", category: "DevOps"},
    { name: "Prometheus", category: "DevOps"},

    // Other
    { name: "Python", category: "Data"},
    { name: "R", category: "Data"},
]

const categories = [
    "All",
    "FrontEnd",
    "BackEnd",
    "Mobile",
    "DevOps",
    "Data"
];

export const Skills = () => {

    const [ category, setCategory ] = useState("All");

    const fs = skills.filter(
        (skill) => category == "All" || skill.category == category
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">Skills</h2>
            
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                { categories.map((cat, key) => (
                    <button key={ key } onClick={() => setCategory(cat)}
                    className={cn("px-5 py-2 transition-colors duration-300 rouned-full",
                        category == cat ? "bg-primary/20 text-gradient border border-orange-500/50" : "bg-primary/10 text-primary hover:bg-primary/10"
                    )}>{ cat }</button>
                ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {fs.map((skill, key) => (
                    <div className="bg-card card-hover p-6 shadow-xs rounded-lg transition-transfrom hover:scale-105 hover:bg-orange-500/10 border border-primary/10">
                    <div className="text-sm font-semibold mb-4 text-center text-muted-primary">
                        <h3 className="text-lg font-semibold text-muted-rimary">{skill.name }</h3>
                    </div>
                    </div>
                ))}

                </div>
            </div>
        </section>
    );
}