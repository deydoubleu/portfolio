import { ChangeTheme } from "../Components/ChangeTheme";
import { StarBG } from "../Components/StarBG";
import { Navbar } from "../Components/Navbar";
import { HeroContent } from "../Components/HeroContent";
import { About } from "../Components/About";
import { Skills } from "../Components/Skills";
import { Skills2 } from "../Components/Skills2";
import { Projects } from "../Components/Projects";
import { Contact } from "../Components/Contact";
import { Footer } from "../Components/Footer";


export const Home = () => {
    return (<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme */}
        < ChangeTheme />
        {/* Background */}
        < StarBG />
        {/* Navbar */}
        <Navbar />
        {/* main content */}
        <main>
            <HeroContent />
            <About />
            <Skills2 />
            <Projects/>
            <Contact/>
        </main>

        {/* Footer */}
        <Footer/>
    </div>);
}