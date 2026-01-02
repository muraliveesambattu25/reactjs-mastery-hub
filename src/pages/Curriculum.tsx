import { CheckCircle, Clock, BookOpen, Code2, Terminal, Layers, FileCode, Settings } from "lucide-react";
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
    level: "Week 1: Phase 1 - JavaScript Fundamentals (ES6+ Basics)",
    icon: BookOpen,
    color: "bg-success/10 text-success border-success/20",
    duration: "1 week",
    description: "Master modern JavaScript fundamentals essential for React development",
    topics: [
      {
        title: "Variables & Scoping",
        lessons: [
          "let, const, and var - Understanding Differences",
          "Block Scoping & Temporal Dead Zone",
          "Hoisting in JavaScript",
          "Best Practices for Variable Declarations",
        ],
      },
      {
        title: "Arrow Functions & Template Literals",
        lessons: [
          "Arrow Function Syntax & Lexical this",
          "When to Use Arrow Functions",
          "Template Literals & String Interpolation",
          "Tagged Template Literals",
        ],
      },
      {
        title: "Destructuring & Spread Operators",
        lessons: [
          "Array Destructuring",
          "Object Destructuring",
          "Spread Operator (...)",
          "Rest Parameters & Rest Properties",
        ],
      },
      {
        title: "Default Parameters & Enhanced Object Literals",
        lessons: [
          "Default Function Parameters",
          "Enhanced Object Literals",
          "Computed Property Names",
          "Shorthand Property & Method Syntax",
        ],
      },
    ],
  },
  {
    level: "Week 2: Phase 1 - Advanced JavaScript",
    icon: Code2,
    color: "bg-success/10 text-success border-success/20",
    duration: "1 week",
    description: "Deep dive into async JavaScript, modules, and advanced patterns",
    topics: [
      {
        title: "Promises & Async/Await",
        lessons: [
          "Understanding Promises",
          "Promise Chaining & Error Handling",
          "Async/Await Syntax",
          "Promise.all, Promise.race & Promise.allSettled",
        ],
      },
      {
        title: "Array Methods & Functional Programming",
        lessons: [
          "map, filter, reduce Deep Dive",
          "find, some, every Methods",
          "flatMap & Array Flattening",
          "Functional Programming Patterns",
        ],
      },
      {
        title: "ES6 Modules & Code Organization",
        lessons: [
          "import/export Syntax",
          "Default vs Named Exports",
          "Module Bundling Concepts",
          "Code Organization Best Practices",
        ],
      },
      {
        title: "Classes, Prototypes & Error Handling",
        lessons: [
          "ES6 Classes & Inheritance",
          "Prototypes & Prototype Chain",
          "try/catch & Error Handling",
          "Custom Error Classes",
        ],
      },
    ],
  },
  {
    level: "Week 3: Phase 2 - React Fundamentals",
    icon: BookOpen,
    color: "bg-accent/10 text-accent border-accent/20",
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
    level: "Week 4: Phase 2 - React Intermediate",
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
    level: "Week 5: Phase 2 - React Advanced",
    icon: Terminal,
    color: "bg-accent/10 text-accent border-accent/20",
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
    level: "Week 6: Phase 3 - TypeScript Fundamentals",
    icon: FileCode,
    color: "bg-primary/10 text-primary border-primary/20",
    duration: "1 week",
    description: "Master TypeScript basics and integrate with React",
    topics: [
      {
        title: "TypeScript Basics & Setup",
        lessons: [
          "What is TypeScript & Why Use It",
          "Setting Up TypeScript in React Project",
          "TypeScript Configuration (tsconfig.json)",
          "TypeScript vs JavaScript",
        ],
      },
      {
        title: "Types, Interfaces & Generics",
        lessons: [
          "Primitive Types & Type Annotations",
          "Interfaces & Type Aliases",
          "Union & Intersection Types",
          "Generics & Generic Constraints",
        ],
      },
      {
        title: "TypeScript with React Components",
        lessons: [
          "Typing React Components",
          "Component Props Types",
          "Typing Component State",
          "Typing Event Handlers",
        ],
      },
      {
        title: "Advanced TypeScript Patterns",
        lessons: [
          "Utility Types (Partial, Pick, Omit)",
          "Conditional Types",
          "Type Guards & Type Narrowing",
          "TypeScript Best Practices",
        ],
      },
    ],
  },
  {
    level: "Week 7: Phase 3 - Advanced TypeScript & React",
    icon: Settings,
    color: "bg-primary/10 text-primary border-primary/20",
    duration: "1 week",
    description: "Advanced TypeScript patterns, React 19 features, and optimization",
    topics: [
      {
        title: "React 19 Features with TypeScript",
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
        title: "Advanced TypeScript Patterns in React",
        lessons: [
          "Typing Hooks & Custom Hooks",
          "Typing Context API",
          "Typing Higher-Order Components",
          "Generic Components & Props",
        ],
      },
      {
        title: "Performance Optimization with TypeScript",
        lessons: [
          "TypeScript Performance Tips",
          "Code Splitting with TypeScript",
          "Type-Safe State Management",
          "Optimizing Bundle Size",
        ],
      },
      {
        title: "Testing with TypeScript",
        lessons: [
          "Setting Up TypeScript Testing",
          "Typing Test Utilities",
          "Type-Safe Mocking",
          "Integration Testing Patterns",
        ],
      },
    ],
  },
  {
    level: "Week 8: Phase 3 - Enterprise Projects",
    icon: Layers,
    color: "bg-react-blue/10 text-react-blue border-react-blue/20",
    duration: "1 week",
    description: "Build 3 enterprise-level applications with TypeScript",
    topics: [
      {
        title: "Enterprise Project 1: E-commerce Platform",
        lessons: [
          "Project Architecture & TypeScript Setup",
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
            A structured 8-week intensive program taking you from JavaScript fundamentals to enterprise React developer with TypeScript.
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
