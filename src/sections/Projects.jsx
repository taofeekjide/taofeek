import AnimatedBorderButton from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "E-commerce Website (In Progress)",
    description:
      "A full-stack e-commerce website built with React, Express.js, Node.js, and MongoDB (MERN stack). It features user authentication, product listings, shopping cart functionality, and payment integration.",
    image: "/projects/project-1.png",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Paystack",
      "MERN",
      "Ecommerce",
    ],
    link: "https://arispace-store-and-logistics-1.onrender.com/",
    github: "https://github.com/taofeekjide/Arispace-Store-and-Logistics",
  },
  {
    title: "Fashion E-commerce Website",
    description:
      "An e-commerce website built with Wordpress. It also features user authentication, product listings, shopping cart functionality, and payment integration.",
    image: "/projects/project-2.png",
    tags: ["Wordpress", "Woocommerce", "Paystack", "Ecommerce", "Fashion"],
    link: "https://rennyfashions.great-site.net/",
  },
  {
    title: "School Employee Management System",
    description:
      "A web application for managing school employees, built with the MERN stack. It includes features for employee registration, leaves application, and department management.",
    image: "/projects/project-3.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "MERN",
      "School Management",
    ],
    link: "https://school-employee-management-system.onrender.com/",
    github: "https://github.com/taofeekjide/synergy-school-EMS",
  },
  {
    title: "Medical Appointment Booking System",
    description:
      "A full-stack web application for booking medical appointments, built with Wordpress. It features appointment scheduling, and doctor management.",
    image: "/projects/project-4.png",
    tags: ["Wordpress", "Healthcare", "Booking System"],
    link: "https://azummedical.com/",
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
