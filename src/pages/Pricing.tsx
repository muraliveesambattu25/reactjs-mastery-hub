import { useState } from "react";
import { Check, Zap, Crown, Rocket, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";

const plans = [
  {
    name: "Free Preview",
    icon: Download,
    price: "Free",
    description: "Get a taste of what's included",
    features: [
      "Complete course syllabus PDF",
      "First 3 lessons access",
      "React cheat sheet",
      "Community forum access",
    ],
    cta: "Download Free Guide",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Complete Course",
    icon: Zap,
    price: "₹12,999",
    originalPrice: "₹24,999",
    description: "Everything you need to master ReactJS",
    features: [
      "Full 8-week intensive curriculum",
      "40+ hours of video content",
      "10+ hands-on projects",
      "3 Enterprise Applications",
      "Downloadable resources",
      "Certificate of completion",
    ],
    cta: "Enroll Now",
    variant: "default" as const,
    popular: true,
  }
];

const faqs = [
  {
    question: "How long do I have access to the course?",
    answer: "You have lifetime access! Once you enroll, you can access the course materials forever, including all future updates.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with the course, just email us for a full refund.",
  },
  {
    question: "Do I need any prior programming experience?",
    answer: "No prior experience needed! The course starts from absolute basics and gradually builds up to advanced concepts.",
  },
  {
    question: "What projects will I build?",
    answer: "You'll build 10+ projects including a weather app, task manager, e-commerce site, and more – all portfolio-worthy!",
  },
];

const Pricing = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 bg-react-blue/20 text-react-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="h-4 w-4" />
            Invest in Your Future
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Choose the plan that fits your learning goals. All plans include lifetime access.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${
                plan.popular
                  ? "border-accent border-2 shadow-lg scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <div className={`h-12 w-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                  plan.popular ? "bg-accent/10" : "bg-secondary"
                }`}>
                  <plan.icon className={`h-6 w-6 ${plan.popular ? "text-accent" : "text-muted-foreground"}`} />
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>
                  {plan.originalPrice && (
                    <span className="text-sm text-success font-medium">
                      Save {Math.round((1 - parseInt(plan.price.replace(/[₹,]/g, '')) / parseInt(plan.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "bg-gradient-cta hover:opacity-90" : ""}`}
                  variant={plan.variant}
                  onClick={plan.name === "Free Preview" ? () => setIsLeadModalOpen(true) : undefined}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <LeadCaptureModal open={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
    </Layout>
  );
};

export default Pricing;
