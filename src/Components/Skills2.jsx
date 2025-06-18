import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "C#", category: "Languages" },
  { name: "R", category: "Languages" },
  { name: "Python", category: "Languages" },

  // FrontEnd
  { name: "HTML/CSS", category: "FrontEnd" },
  { name: "React JS", category: "FrontEnd" },
  { name: "Next JS", category: "FrontEnd" },
  { name: "Vue JS", category: "FrontEnd" },

  // BackEnd
  { name: "Node JS", category: "BackEnd" },
  { name: "Django", category: "BackEnd" },
  { name: ".NET", category: "BackEnd" },
  { name: "Express", category: "BackEnd" },
  { name: "SQL Server", category: "BackEnd" },
  { name: "PostgreSQL", category: "BackEnd" },
  { name: "SQLite", category: "BackEnd" },

  // Mobile
  { name: "Swift", category: "Mobile" },
  { name: "Kotlin", category: "Mobile" },
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },

  // DevOps
  { name: "Docker", category: "DevOps" },
  { name: "Bash", category: "DevOps" },
  { name: "Git/GitHub/GitLab", category: "DevOps" },
  { name: "Linux", category: "DevOps" },
  { name: "AWS", category: "DevOps" },
  { name: "Jenkins", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Terraform", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Prometheus", category: "DevOps" },

  // Data
  { name: "NumPy", category: "Data" },
  { name: "Matplotlib", category: "Data" },
  { name: "Tensorflow", category: "Data" },
  { name: "Pandas", category: "Data" },
  { name: "PyTorch", category: "Data" },
  { name: "Scikit-learn", category: "Data" },
];

const categories = [
  "All",
  "Languages",
  "FrontEnd",
  "BackEnd",
  "Mobile",
  "DevOps",
  "Data",
];
const pageSize = 12;

export const Skills2 = () => {
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(0);
  const [animDirection, setAnimDirection] = useState("none");
  const containerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const filtered = skills.filter(
    (skill) => category === "All" || skill.category === category
  );

  const totalPages = Math.ceil(filtered.length / pageSize);
  const pageSkills = filtered.slice(page * pageSize, (page + 1) * pageSize);
  const fillers = Array.from({ length: pageSize - pageSkills.length });

  const handleLeft = () => {
    if (totalPages <= 1) return;
    setAnimDirection("left");
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleRight = () => {
    if (totalPages <= 1) return;
    setAnimDirection("right");
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Swipe gesture handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (!touchStartX.current || !touchEndX.current) return;

    const deltaX = touchEndX.current - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) handleLeft();
      else handleRight();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") handleLeft();
      else if (e.key === "ArrowRight") handleRight();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [totalPages]);

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
      aria-label="Skills Section"
    >
      <div className="container mx-auto max-w-5xl relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Skills
        </h2>

        {/* Mobile: dropdown filter */}
        <div className="block md:hidden mb-8 text-center">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(0);
            }}
            className="px-4 py-2 rounded-md bg-primary/10 border border-primary/30 text-primary"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop: button filters */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => {
                setCategory(cat);
                setPage(0);
              }}
              className={cn(
                "px-5 py-2 transition-colors duration-300 rounded-full",
                category === cat
                  ? "bg-primary/20 text-gradient border border-orange-500/50"
                  : "bg-primary/10 text-primary hover:bg-primary/10"
              )}
              aria-pressed={category === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={handleLeft}
          className={cn(
            "absolute left-[-1.5rem] md:left-[-1.5rem] top-[52%] transform -translate-y-1/2 z-10 text-3xl md:text-4xl transition",
            totalPages <= 1
              ? "text-muted opacity-30 cursor-default"
              : "text-orange-500 hover:scale-110"
          )}
          disabled={totalPages <= 1}
          aria-label="Previous skills page"
        >
          ←
        </button>

        <button
          onClick={handleRight}
          className={cn(
            "absolute right-[-1.5rem] md:right-[-1.5rem] top-[52%] transform -translate-y-1/2 z-10 text-3xl md:text-4xl transition",
            totalPages <= 1
              ? "text-muted opacity-30 cursor-default"
              : "text-orange-500 hover:scale-110"
          )}
          disabled={totalPages <= 1}
          aria-label="Next skills page"
        >
          →
        </button>

        {/* Skill Grid */}
        <div
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className={cn(
            "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-transform duration-500 ease-in-out",
            animDirection === "left" && "-translate-x-6",
            animDirection === "right" && "translate-x-6"
          )}
          onTransitionEnd={() => setAnimDirection("none")}
          role="list"
          aria-live="polite"
        >
          {pageSkills.map((skill, i) => (
            <div
              key={i}
              className="bg-card p-6 shadow-xs rounded-lg border border-primary/10 card-hover hover:scale-105 hover:bg-orange-500/10"
              role="listitem"
              tabIndex={0}
            >
              <div className="text-sm font-semibold mb-4 text-center text-muted-primary">
                <h3 className="text-lg font-semibold text-muted-primary">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}

          {fillers.map((_, i) => (
            <div
              key={`empty-${i}`}
              className="bg-card p-6 shadow-xs rounded-lg border border-transparent invisible"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
