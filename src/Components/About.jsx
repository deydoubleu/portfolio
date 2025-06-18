import {
    EnvelopeIcon,
    ArrowDownTrayIcon,
    CodeBracketIcon,
    DevicePhoneMobileIcon,
    CpuChipIcon,
    BriefcaseIcon,
    WrenchScrewdriverIcon,
  } from "@heroicons/react/24/solid";
  import Resume from "../assets/DANINDU_RESUME.pdf";
  
  export const About = () => {
    return (
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            About Me
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-xl font-simibold">
                Tech Enthusiast | Software Developer | DevOps Practitioner
              </h3>
              <p className="text-muted-primary">
                I'm a software developer who stays curious and up to date with the
                latest in tech, always looking for better ways to build, deploy,
                and improve software. Accessibility is a key part of my work—not
                just a feature, but a priority—because as someone with low vision,
                I understand firsthand the importance of inclusive design. I strive
                to create tools and experiences that are usable by everyone,
                regardless of ability.
              </p>
              <p className="text-muted-primary">
                My true passion lies in DevOps—streamlining development workflows,
                automating processes, and improving collaboration between teams.
                I’m especially drawn to the problem-solving and systems thinking
                that DevOps demands. Alongside this, I occasionally dive into data
                science and dabble with AI, enjoying the insights and possibilities
                they bring to building smarter, more adaptive systems. Together,
                these interests help me approach software with both a user-first
                mindset and a systems-level perspective.
              </p>
  
              {/* Desktop-only Resume Button below paragraphs */}
              <div className="hidden md:block pt-4">
                <a
                  href={Resume}
                  download
                  className="cosmic-button bg-orange-500 inline-flex items-center gap-2 px-6 py-2 rounded-full hover:text-primary transition-colors duration-300 border"
                  aria-label="Download Resume"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  Resume
                </a>
              </div>
            </div>
  
            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <CodeBracketIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-primary">
                      Building responsive and attractive web pages using modern
                      frameworks.
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="gradient-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <DevicePhoneMobileIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Mobile Development</h4>
                    <p className="text-muted-primary">
                      Creating accessible and functional mobile applications for
                      both iOS & Android.
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="gradient-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <WrenchScrewdriverIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">DevOps</h4>
                    <p className="text-muted-primary">
                      Passionate about Automation, CI/CD, Containers, IAC, the
                      Cloud, and more.
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="gradient-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <CpuChipIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">AI/ML</h4>
                    <p className="text-muted-primary">
                      Utilizing AI to improve workflows, and Machine-Learning to
                      support data driven decisions.
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="gradient-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <BriefcaseIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Technical Support</h4>
                    <p className="text-muted-primary">
                      Over 3 years of experience in providing exceptional customer
                      service through excellent troubleshooting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Mobile-only Resume Button below everything */}
          <div className="mt-12 flex justify-center md:hidden">
            <a
              href={Resume}
              download
              className="∂∂cosmic-button bg-orange-500 flex items-center gap-2 px-6 py-2 rounded-full hover:text-primary transition-colors duration-300 border"
              aria-label="Download Resume"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Resume
            </a>
          </div>
        </div>
      </section>
    );
  };
  