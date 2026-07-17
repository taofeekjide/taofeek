import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean code",
    description:
      "Structuring code for scalability, readability, and team collaboration.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed and responsiveness, ensuring a smooth user experience.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Working effectively with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description:
      "Developing creative and effective solutions to complex problems, driving innovation and improvement.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-2xl font-bold text-secondary-foreground tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-200 text-secondary-foreground">
              Building scalable, high-performance web applications,{" "}
              <span className="font-serif italic font-normal text-primary">
                One line of code at a time.
              </span>
            </h2>

            {/* About me content */}
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-300">
              <p>
                I am a Software Engineer specializing in the MERN stack, with a
                passion for building scalable, high-performance web
                applications. I have a strong foundation and a commitment to
                continuous learning and improvement.
              </p>
              <p>
                My expertise lies in developing applications that solve complex
                real-world problems, with a focus on clean code, performance
                optimization, and innovative solutions. I thrive in
                collaborative environments and enjoy working with diverse teams
                to deliver exceptional results.
              </p>
              <p>
                I am always eager to take on new challenges and contribute to
                projects that make a positive impact. Let's connect and explore
                how we can work together to create amazing web applications.
              </p>
            </div>

            {/* Mission and vision statement */}
            <div className="glass rounded-2xl p-6 glow-border space-y-4 animate-fade-in animation-delay-400">
              <p className="text-lg text-muted-foreground italic">
                My mission is to create innovative and impactful web solutions
                that drive business value and enhance user experiences. I
                believe in the power of technology to solve real-world problems
                and make a positive difference in people's lives.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-500"
              >
                <highlight.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-secondary-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
