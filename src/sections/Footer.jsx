import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Button from "../components/Button";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      {/* Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <div className="container mx-auto px-6 py-20">
        {/* CTA */}
        <div className="glass rounded-3xl p-10 text-center mb-20 glow-border">
          <h2 className="text-4xl font-bold mb-4">
            Let's build something amazing.
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Whether you need a modern website, web application, or someone to
            join your engineering team, I'd love to hear from you.
          </p>

          <a href="#contact">
            <Button size="lg">
              Contact Me
              <ArrowUpRight />
            </Button>
          </a>
        </div>

        {/* Footer */}

        <div className="grid md:grid-cols-3 gap-12">
          {/* Left */}

          <div>
            <h3 className="text-2xl font-bold mb-3">Taofeek Jide-Idowu</h3>

            <p className="text-muted-foreground">
              Software Engineer specializing in scalable MERN applications.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h4 className="font-semibold mb-5">Navigation</h4>

            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h4 className="font-semibold mb-5">Connect</h4>

            <div className="flex gap-4">
              <a
                href="https://github.com/taofeekjide"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-xl hover:text-primary hover:scale-110 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/taofeek-jide-idowu-0530692b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-xl hover:text-primary hover:scale-110 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:idowutaofeek16@gmail.com"
                className="glass p-3 rounded-xl hover:text-primary hover:scale-110 transition"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Taofeek Jide-Idowu. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
