import { Award, Briefcase, GraduationCap, Heart, Code2, Mail, MapPin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";

const credentials = [
  { icon: Briefcase, label: "10+ Years Experience", description: "Senior Developer at Fortune 500 companies" },
  { icon: GraduationCap, label: "CS Graduate", description: "Stanford University, Computer Science" },
  { icon: Award, label: "Published Author", description: "Author of 'JavaScript: The Complete Guide'" },
  { icon: Heart, label: "5,000+ Students", description: "Helped thousands start their coding careers" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 bg-js-yellow/20 text-js-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code2 className="h-4 w-4" />
            Meet Your Instructor
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About JSMastery
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Passionate about making JavaScript accessible to everyone, from beginners to seasoned developers.
          </p>
        </div>
      </section>

      {/* Instructor Bio */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-square max-w-md mx-auto rounded-2xl bg-secondary overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-32 w-32 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Code2 className="h-16 w-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Instructor Photo</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Alex Thompson</h2>
            <p className="text-accent font-medium mb-4">Lead Instructor & Founder</p>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hi, I'm Alex! With over a decade of experience building web applications for companies like Google, 
                Microsoft, and several successful startups, I've seen firsthand what skills matter most in the industry.
              </p>
              <p>
                I started JSMastery because I believe everyone deserves access to high-quality programming education. 
                Too many courses focus on syntax without teaching you how to think like a developer. My approach is different.
              </p>
              <p>
                Through hands-on projects and real-world examples, I'll help you build not just technical skills, 
                but the problem-solving mindset that separates good developers from great ones.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Credentials */}
      <SectionWrapper className="bg-secondary">
        <h2 className="text-3xl font-bold text-center mb-12">Why Learn With Me?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, index) => (
            <Card key={index}>
              <CardContent className="pt-6 text-center">
                <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <cred.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-semibold mb-1">{cred.label}</h3>
                <p className="text-sm text-muted-foreground">{cred.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8">
            To democratize coding education by providing world-class JavaScript training that's accessible, 
            practical, and focused on real-world outcomes. We measure our success by your success – 
            whether that's landing your first developer job, building your startup, or simply bringing your ideas to life.
          </p>
        </div>
      </SectionWrapper>

      {/* Contact */}
      <SectionWrapper id="contact" className="bg-secondary">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Have questions about the course? We'd love to hear from you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-5 w-5 text-accent" />
              <a href="mailto:hello@jsmastery.com" className="text-foreground hover:text-accent transition-colors">
                hello@jsmastery.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-muted-foreground">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default About;
