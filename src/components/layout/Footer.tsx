import { Link } from "react-router-dom";
import { Code2, Mail, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  course: [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Pricing", href: "/pricing" },
    { label: "Testimonials", href: "/testimonials" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/about#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-js-yellow">
                <Code2 className="h-5 w-5 text-js-yellow-foreground" />
              </div>
              <span className="text-xl font-bold">JSMastery</span>
            </Link>
            <p className="text-primary-foreground/80 max-w-md mb-6">
              Master JavaScript from beginner to advanced with our comprehensive training program.
              Join thousands of developers who've transformed their careers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:hello@jsmastery.com" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Course Links */}
          <div>
            <h3 className="font-semibold mb-4">Course</h3>
            <ul className="space-y-3">
              {footerLinks.course.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} JSMastery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
