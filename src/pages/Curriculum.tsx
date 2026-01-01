import { CheckCircle, Clock, BookOpen, Code2, Terminal, Layers } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  {
    level: "Week 1: Beginner",
    icon: BookOpen,
    color: "bg-success/10 text-success border-success/20",
    duration: "1 week",
    description: "Build a solid foundation with React fundamentals",
    topics: [
      {
        title: "Introduction to React & JSX",
        lessons: [
          "What is React & Why Use It",
          "Setting Up Development Environment",
          "Understanding JSX Syntax",
          "Creating Your First React Component",
        ],
      },
      {
        title: "Components & Props",
        lessons: [
          "Functional Components vs Class Components",
          "Understanding Props & Prop Types",
          "Component Composition",
          "Building Reusable Components",
        ],
      },
      {
        title: "State & Event Handling",
        lessons: [
          "Understanding Component State",
          "Using useState Hook",
          "Handling User Events",
          "Controlled vs Uncontrolled Components",
        ],
      },
      {
        title: "Conditional Rendering & Lists",
        lessons: [
          "Conditional Rendering Patterns",
          "Rendering Lists with map()",
          "Keys in React Lists",
          "Building a Todo App Project",
        ],
      },
    ],
  },
  {
    level: "Week 2: Intermediate",
    icon: Code2,
    color: "bg-accent/10 text-accent border-accent/20",
    duration: "1 week",
    description: "Master React Hooks, Routing, and Context API",
    topics: [
      {
        title: "React Hooks Deep Dive",
        lessons: [
          "useState & useEffect Hooks",
          "useContext & Custom Hooks",
          "useReducer for Complex State",
          "Rules of Hooks & Best Practices",
        ],
      },
      {
        title: "React Router & Navigation",
        lessons: [
          "Setting Up React Router",
          "Route Configuration & Navigation",
          "URL Parameters & Query Strings",
          "Protected Routes & Authentication",
        ],
      },
      {
        title: "Forms & Controlled Components",
        lessons: [
          "Building Forms in React",
          "Form Validation & Error Handling",
          "Using React Hook Form",
          "Building a Contact Form Project",
        ],
      },
      {
        title: "Context API for State Management",
        lessons: [
          "Understanding Context API",
          "Creating & Using Context",
          "Context vs Props Drilling",
          "Building a Theme Switcher",
        ],
      },
    ],
  },
  {
    level: "Week 3: Advanced",
    icon: Terminal,
    color: "bg-primary/10 text-primary border-primary/20",
    duration: "1 week",
    description: "Learn production-ready React patterns, testing, and optimization",
    topics: [
      {
        title: "Performance Optimization",
        lessons: [
          "React.memo & useMemo",
          "useCallback Hook",
          "Code Splitting & Lazy Loading",
          "React DevTools Profiling",
        ],
      },
      {
        title: "Testing with React Testing Library",
        lessons: [
          "Setting Up Testing Environment",
          "Writing Component Tests",
          "Testing User Interactions",
          "Mocking & Integration Testing",
        ],
      },
      {
        title: "State Management Solutions",
        lessons: [
          "Redux Toolkit Fundamentals",
          "Zustand for Lightweight State",
          "Choosing the Right State Solution",
          "Building a Shopping Cart App",
        ],
      },
    ],
  },
  {
    level: "Week 4: Enterprise Projects",
    icon: Layers,
    color: "bg-react-blue/10 text-react-blue border-react-blue/20",
    duration: "1 week",
    description: "Build 3 enterprise-level applications and master React 19 features",
    topics: [
      {
        title: "React 19: Latest Features & Patterns",
        lessons: [
          "What's New in React 19 & Migration Guide",
          "React Server Components: Understanding & Implementation",
          "React Actions & useActionState Hook",
          "useEffectEvent Hook: Extracting Non-Reactive Logic",
          "Activity Component: Managing UI State Lifecycle",
          "cacheSignal for Server Components & Performance",
        ],
      },
      {
        title: "Enterprise Project 1: E-commerce Platform",
        lessons: [
          "Project Architecture & Setup",
          "Product Catalog & Search",
          "Shopping Cart & Checkout",
          "Payment Integration & Order Management",
        ],
      },
      {
        title: "Enterprise Project 2: SaaS Dashboard",
        lessons: [
          "Dashboard Layout & Navigation",
          "Analytics & Data Visualization",
          "User Management System",
          "Settings & Configuration",
        ],
      },
      {
        title: "Enterprise Project 3: Social Media App",
        lessons: [
          "User Authentication & Profiles",
          "Post Creation & Feed",
          "Comments, Likes & Interactions",
          "Real-time Updates & Notifications",
        ],
      },
    ],
  },
];

const Curriculum = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 bg-react-blue/20 text-react-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Layers className="h-4 w-4" />
            Complete Learning Path
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Full ReactJS Curriculum
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            A structured 4-week intensive program taking you from absolute beginner to confident React developer.
          </p>
        </div>
      </section>

      {/* Curriculum Modules */}
      <SectionWrapper>
        <div className="space-y-12">
          {modules.map((module, moduleIndex) => (
            <Card key={moduleIndex} className={`border-2 ${module.color.split(' ')[2]}`}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`h-14 w-14 rounded-xl flex items-center justify-center ${module.color.split(' ').slice(0, 2).join(' ')}`}>
                      <module.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{module.level}</CardTitle>
                      <p className="text-muted-foreground">{module.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">{module.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {module.topics.map((topic, topicIndex) => (
                    <AccordionItem key={topicIndex} value={`${moduleIndex}-${topicIndex}`}>
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold">{topic.title}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-4">
                          {topic.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-1" />
                              <span className="text-muted-foreground">{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Curriculum;
