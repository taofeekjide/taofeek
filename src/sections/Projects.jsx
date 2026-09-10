import AnimatedBorderButton from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "School Employee Management System",
    description:
      "A web application for managing school employees. It makes employee registration, leaves application, and department management easy and eliminate school paperwork.",
    image: "/projects/project-3.png",
    tags: ["Schools", "Employees", "School Management", "MERN Stack"],
    link: "https://synergy-school-ems-1.onrender.com/",
    github: "https://github.com/taofeekjide/synergy-school-EMS",
  },
  {
    title: "Arispace Store and Logistics",
    description:
      "A web application for managing store inventory and logistics. It allows users to track products, manage orders, and streamline the supply chain process.",
    image: "/projects/project-2.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://arispace-store-and-logistics-1.onrender.com/",
    github: "",
  },
  {
    title: "A business landing page",
    description:
      "A landing page that gives a brief overview of a business, its services, and contact information. Built for retention and conversion",
    image: "/projects/project-1.png",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://ghuffy-brands.netlify.app/",
    github: "https://github.com/taofeekjide/ghuffy",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-lg">My Projects</span>
          <h2 className="text-3xl font-bold">Check Out My Work</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 animate-fade-in animation-delay-200">
            Here are some of the projects I've worked on. Each project showcases
            my skills in web development and my ability to create functional and
            visually appealing applications.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    <AnimatedBorderButton>View Project</AnimatedBorderButton>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      <AnimatedBorderButton>View Code</AnimatedBorderButton>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
