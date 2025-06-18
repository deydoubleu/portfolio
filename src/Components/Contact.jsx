import { Linkedin, MailIcon, MapPin } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="font-bold text-3xl md:text-4xl text-center text-gradient mb-4">Contact Me</h2>
                <p className="text-center max-w-1xl mb-12 text-muted-primary">Feel free to reach out with any questions/project ideas.</p>
                <div className="flex flex-col md:flex-row md:justify-between gap-8 text-left">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-orange-500/10">
                            <MailIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">Email</p>
                            <a href="mailto:test@gmail.com" className="text-muted-primary hover:text-primary transition-colors">test@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-orange-500/10">
                            <Linkedin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">LinkedIn</p>
                            <a href="https://www.linkedin.com/in/dt-wakista98/" target="_blank" className="text-muted-primary hover:text-primary transition-colors">dt-wakista98</a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-orange-500/10">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">Location</p>
                            <p className="text-muted-primary">Edmonton, AB, Canada</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
