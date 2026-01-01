import { Star, Quote } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer at Stripe",
    initials: "SC",
    rating: 5,
    content: "This course completely transformed my career. I went from struggling with basic JavaScript to landing a job at Stripe within 6 months. The project-based approach made everything click.",
    outcome: "Hired at Stripe",
  },
  {
    name: "Michael Rodriguez",
    role: "Freelance Developer",
    initials: "MR",
    rating: 5,
    content: "As someone who tried multiple online courses, this one stands out. Alex explains complex concepts in a way that just makes sense. The async/await section alone was worth the entire course.",
    outcome: "3x Income as Freelancer",
  },
  {
    name: "Emily Watson",
    role: "Full-Stack Developer at Shopify",
    initials: "EW",
    rating: 5,
    content: "I was a complete beginner with zero coding experience. Now I'm building features used by millions of merchants. This course gave me the foundation I needed to succeed.",
    outcome: "Career Changer Success",
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    initials: "DK",
    rating: 5,
    content: "Built my entire SaaS product using skills I learned here. The curriculum covers everything you need to build production-ready applications. Best investment I've made.",
    outcome: "Launched Own Startup",
  },
  {
    name: "Jessica Park",
    role: "Junior Developer at Microsoft",
    initials: "JP",
    rating: 5,
    content: "The testing and design patterns modules set this course apart from others. I felt prepared not just to write code, but to write professional, maintainable code.",
    outcome: "Hired at Microsoft",
  },
  {
    name: "Robert Thompson",
    role: "Tech Lead at Adobe",
    initials: "RT",
    rating: 5,
    content: "Even as an experienced developer, I learned new patterns and best practices. This course is valuable for developers at any level who want to truly master JavaScript.",
    outcome: "Promoted to Tech Lead",
  },
];

const stats = [
  { value: "5,000+", label: "Happy Students" },
  { value: "98%", label: "Would Recommend" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "500+", label: "5-Star Reviews" },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 bg-js-yellow/20 text-js-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            Student Success Stories
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Students Say
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Real stories from real developers who transformed their careers with JSMastery.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="pt-6 flex-1 flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-js-yellow text-js-yellow" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-accent/20 mb-3" />
                
                <p className="text-muted-foreground flex-1 mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-accent/10 text-accent">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium bg-success/10 text-success px-2 py-1 rounded-full">
                    {testimonial.outcome}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Testimonials;
