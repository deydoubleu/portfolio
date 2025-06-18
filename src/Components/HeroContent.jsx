import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export const HeroContent = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
          setShow(window.scrollY === 0);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight" >
                <span className="opacity-0 animate-fade-in-delay-1 text-gradient">Hello there </span>
                </h1>
                <p  className="text-lg md:text-xl max-w-xl mx-auto text-muted-foreground opacity-0 animate-fade-in-delay-4">
                I'm Dan — passionate about technology, skilled in full-stack <span className="text-primary">software development</span>, and specializing in <span className="text-primary">DevOps</span>.
                </p>
                <div  className="pt-4">
                <a href="#projects" className="cosmic-button bg-orange-500 hover:text-primary ">
                    View My Work
                </a>
                </div>
            </div>
            <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ${show ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}
            aria-label="An arrow pointing down with a bouncy animation">
                <span className="text--muted-primary">Scroll</span>
                <ChevronDownIcon className="text-muted-primary"/>
            </div>
        </div>
        </section>
    )
}