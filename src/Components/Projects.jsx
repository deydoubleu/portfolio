import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "AI Chat App",
        description: "A fun AI chat app using Vue JS, Node JS, and OpenAI API.",
        image: "/project_images/dmai.png",
        tags: ["Vue JS", "Node JS", "Tailwind CSS"],
        gh: "https://github.com/deydoubleu/dmai-ui"
    },
    {
        id: 2,
        title: "Notes App",
        description: "A simple notes app built with React Native.",
        image: "/project_images/notes.png",
        tags: ["React Native", "Appwrite", "Express"],
        gh: "https://github.com/deydoubleu/notes-app"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="relative py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl mb-4 font-bold text-center text-gradient">Featured Projects</h2>
                <p className="text-muted-primary max-w-2xl text-center mb-0 mx-auto">Below are some of my recent individual projects.</p>
                <p className="text-muted-primary max-w-2xl text-center mb-12 mx-auto mt-0">This section only displays individual work, and does not include group projects or academic projects.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((proj, key) => (
                        <div key={key} className="group bg-card overflow-hidden shadow-xs card-hover rounded-lg">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 bg-primary/50"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {proj.tags.map((tag, idx) => (
                                        <span key={idx} className="px-2 py-1 border rounded-full text-xs font-medium bg-secondary text-orange-500/70">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
                                <p className="text-sm text-muted-primary mb-4">{proj.description}</p>
                                <div className="flex justify-center items-center mb-4">
                                    <div className="flex space-x-3">
                                        <a
                                            href={proj.gh}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground hover:text-orange-500 transition-colors duration-300"
                                            aria-label="Open in GitHub"
                                        >
                                            <FaGithub className="text-xl" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a href="https://github.com/deydoubleu" target="_blank" className="cosmic-button text-orange-500/90 hover:bg-orange-500/10 bg-transparent border border-orange-500 items-center mx-auto w-fit flex gap-2"><FaGithub className="text-lg p-1"/> Checkout My GitHub       <ArrowRight  size={16}/></a>
                </div>
            </div>
        </section>
    );
};
