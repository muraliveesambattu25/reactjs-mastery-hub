import { useState } from "react";
import { ArrowRight, Download, Users, Award, Clock, BookOpen, Code, Zap, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const stats = [
  { icon: Users, value: "5,000+", label: "Students Enrolled" },
  { icon: Award, value: "98%", label: "Completion Rate" },
  { icon: Star, value: "4.9/5", label: "Student Rating" },
  { icon: Clock, value: "40+", label: "Hours of Content" },
];

const benefits = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "From JavaScript fundamentals to TypeScript mastery, covering everything you need to master ReactJS in 8 weeks.",
  },
  {
    icon: Code,
    title: "3 Enterprise Applications",
    description: "Build E-commerce Platform, SaaS Dashboard, and Social Media App - real-world projects that showcase your skills.",
  },
  {
    icon: Zap,
    title: "Career-Ready Skills",
    description: "Learn industry best practices and modern React patterns used by top companies.",
  },
];

const curriculumPreview = [
  { level: "Phase 1: JavaScript Fundamentals", topics: ["ES6+ Basics", "Async/Await", "Modules", "Advanced Patterns"] },
  { level: "Phase 2: React with JavaScript", topics: ["React Fundamentals", "Hooks & Routing", "Performance & Testing", "State Management"] },
  { level: "Phase 3: React with TypeScript", topics: ["TypeScript Basics", "Advanced TS Patterns", "React 19 Features", "3 Enterprise Apps"] },
];

const Index = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20 md:py-32">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-react-blue/20 text-react-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="code-font">{"⚛️ React"}</span>
              <span>Master Class 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight w-full">
              Industry-Focused React Training
              <br />
              Zero to Hero in 4 Weeks
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who've transformed their careers with our comprehensive ReactJS training program. Go from beginner to job-ready with hands-on projects and expert guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-primary font-semibold"
                onClick={() => setIsLeadModalOpen(true)}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Free Guide
              </Button>
              <Button
                size="lg"
                className="bg-react-blue text-react-blue-foreground hover:bg-react-blue/90 font-semibold"
                asChild
              >
                <Link to="/pricing">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Training?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our curriculum is designed by industry experts to give you the skills employers are looking for.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:border-accent transition-colors">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Curriculum Preview */}
      <SectionWrapper className="bg-secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete roadmap from JavaScript fundamentals to enterprise React with TypeScript.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {curriculumPreview.map((section, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold ${index === 0 ? "bg-success/20 text-success" :
                    index === 1 ? "bg-accent/20 text-accent" :
                      "bg-primary/20 text-primary"
                    }`}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{section.level}</h3>
                </div>
                <ul className="space-y-3">
                  {section.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link to="/curriculum">
              View Full Curriculum
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <Card className="bg-gradient-hero text-primary-foreground border-0">
          <CardContent className="py-12 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your React Journey?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Download our free course guide and discover exactly what you'll learn. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-primary font-semibold"
                onClick={() => setIsLeadModalOpen(true)}
              >
                <Download className="mr-2 h-5 w-5" />
                Get Free Course Guide
              </Button>
              <Button
                size="lg"
                className="bg-react-blue text-react-blue-foreground hover:bg-react-blue/90 font-semibold"
                asChild
              >
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </SectionWrapper>

      <LeadCaptureModal open={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
    </Layout>
  );
};

export default Index;
