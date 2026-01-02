import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Pricing", href: "/pricing" },
];

interface HeaderProps {
  onOpenLeadModal: () => void;
}

export function Header({ onOpenLeadModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection for dynamic navbar enhancements
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip to main content link - Accessibility enhancement */}
      <a
        href="#main-content"
        className={cn(
          "absolute left-[-9999px] w-1 h-1 overflow-hidden",
          "focus:left-4 focus:top-4 focus:z-[100] focus:w-auto focus:h-auto",
          "focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground",
          "focus:rounded-lg focus:font-medium focus:shadow-lg",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          "transition-all duration-200"
        )}
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          isScrolled
            ? "bg-[#1e293b] border-slate-700 shadow-lg h-14"
            : "bg-[#1e293b] border-slate-700 shadow-sm h-16"
        )}
        role="banner"
        aria-label="Main navigation"
      >
      <div className="container flex h-full items-center justify-between">
        {/* Logo with hover effects */}
        <Link
          to="/"
          className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
          aria-label="ReactMastery Home"
        >
          <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-lg bg-react-blue transition-all duration-300 group-hover:shadow-lg group-hover:shadow-react-blue/50">
            <Code2 className="h-4 w-4 md:h-5 md:w-5 text-react-blue-foreground transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="text-lg md:text-xl font-bold text-white">ReactMastery</span>
        </Link>

        {/* Desktop Navigation - Enhanced with hover effects */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6" role="navigation" aria-label="Main menu">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "relative text-sm md:text-base font-medium transition-all duration-300",
                  "group px-2 md:px-3 py-2 rounded-lg",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isActive
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {/* Animated underline for active link */}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-react-blue to-accent rounded-full"
                    aria-hidden="true"
                  />
                )}
                {/* Hover background pill */}
                <span
                  className={cn(
                    "absolute inset-0 rounded-lg transition-all duration-300",
                    "bg-gradient-to-r from-react-blue/0 via-accent/0 to-react-blue/0",
                    "group-hover:from-react-blue/20 group-hover:via-accent/20 group-hover:to-react-blue/20",
                    "scale-0 group-hover:scale-100"
                  )}
                  aria-hidden="true"
                />
                {/* Text with scale effect */}
                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:scale-105">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <Button
            variant="outline"
            onClick={onOpenLeadModal}
            className="text-sm md:text-base transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="hidden lg:inline">Download Free Guide</span>
            <span className="lg:hidden">Free Guide</span>
          </Button>
          <Button
            className="bg-gradient-cta hover:opacity-90 transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-sm md:text-base"
          >
            Enroll Now
          </Button>
        </div>

        {/* Mobile Menu Button - Enhanced */}
        <button
          className="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-slate-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-white transition-transform duration-300 rotate-0" />
          ) : (
            <Menu className="h-6 w-6 text-white transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Navigation - Enhanced with slide animation */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden animate-in fade-in duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          {/* Mobile menu panel */}
          <div
            id="mobile-menu"
            className={cn(
              "md:hidden border-t border-slate-700 bg-[#1e293b]",
              "animate-in slide-in-from-right duration-300",
              "fixed left-0 right-0 bottom-0 z-50 overflow-y-auto",
              isScrolled ? "top-14" : "top-16"
            )}
            role="navigation"
            aria-label="Mobile menu"
          >
            <nav className="container py-4 flex flex-col gap-2">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-base font-medium py-3 px-4 rounded-lg transition-all duration-300",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      "animate-in fade-in slide-in-from-right",
                      isActive
                        ? "text-white bg-slate-700/30 border-l-4 border-react-blue"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/20"
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-slate-700">
                <Button
                  variant="outline"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLeadModal();
                  }}
                  className="w-full transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Download Free Guide
                </Button>
                <Button
                  className="bg-gradient-cta w-full transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Enroll Now
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
    </>
  );
}
