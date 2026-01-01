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
    level: "Beginner",
    icon: BookOpen,
    color: "bg-success/10 text-success border-success/20",
    duration: "4 weeks",
    description: "Build a solid foundation with JavaScript fundamentals",
    topics: [
      {
        title: "JavaScript Fundamentals",
        lessons: [
          "Introduction to JavaScript & Development Environment",
          "Variables, Constants & Data Types",
          "Operators & Expressions",
          "Control Flow: Conditionals & Loops",
        ],
      },
      {
        title: "Functions & Scope",
        lessons: [
          "Function Declarations & Expressions",
          "Parameters, Arguments & Return Values",
          "Scope & Closures Explained",
          "Arrow Functions & Modern Syntax",
        ],
      },
      {
        title: "DOM Manipulation",
        lessons: [
          "Understanding the Document Object Model",
          "Selecting & Modifying Elements",
          "Creating & Removing Elements",
          "Traversing the DOM Tree",
        ],
      },
      {
        title: "Events & Interactivity",
        lessons: [
          "Event Listeners & Event Objects",
          "Event Bubbling & Delegation",
          "Form Handling & Validation",
          "Building Interactive UI Components",
        ],
      },
    ],
  },
  {
    level: "Intermediate",
    icon: Code2,
    color: "bg-accent/10 text-accent border-accent/20",
    duration: "4 weeks",
    description: "Master asynchronous JavaScript and modern ES6+ features",
    topics: [
      {
        title: "Asynchronous JavaScript",
        lessons: [
          "Understanding Callbacks",
          "Promises & Promise Chaining",
          "Async/Await Syntax",
          "Error Handling in Async Code",
        ],
      },
      {
        title: "Working with APIs",
        lessons: [
          "Introduction to REST APIs",
          "Fetch API & HTTP Methods",
          "Handling JSON Data",
          "Building a Weather App Project",
        ],
      },
      {
        title: "ES6+ Modern JavaScript",
        lessons: [
          "Destructuring & Spread Operator",
          "Template Literals & Tagged Templates",
          "Classes & Object-Oriented JavaScript",
          "Modules: Import & Export",
        ],
      },
      {
        title: "Advanced Data Handling",
        lessons: [
          "Array Methods: map, filter, reduce",
          "Working with Objects & JSON",
          "Local Storage & Session Storage",
          "Data Transformation Patterns",
        ],
      },
    ],
  },
  {
    level: "Advanced",
    icon: Terminal,
    color: "bg-primary/10 text-primary border-primary/20",
    duration: "4 weeks",
    description: "Learn professional patterns, testing, and framework fundamentals",
    topics: [
      {
        title: "Design Patterns",
        lessons: [
          "Module & Revealing Module Pattern",
          "Factory & Singleton Patterns",
          "Observer & Pub/Sub Patterns",
          "MVC Architecture Basics",
        ],
      },
      {
        title: "Testing & TDD",
        lessons: [
          "Introduction to Unit Testing",
          "Jest Testing Framework",
          "Test-Driven Development Workflow",
          "Mocking & Integration Tests",
        ],
      },
      {
        title: "Performance & Optimization",
        lessons: [
          "JavaScript Performance Metrics",
          "Memory Management & Garbage Collection",
          "Debouncing & Throttling",
          "Code Splitting & Lazy Loading",
        ],
      },
      {
        title: "Framework Fundamentals",
        lessons: [
          "Understanding Component-Based Architecture",
          "State Management Concepts",
          "Virtual DOM & Reconciliation",
          "Introduction to React Basics",
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
          <div className="inline-flex items-center gap-2 bg-js-yellow/20 text-js-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Layers className="h-4 w-4" />
            Complete Learning Path
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Full JavaScript Curriculum
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            A structured 12-week program taking you from absolute beginner to confident JavaScript developer.
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
                      <CardTitle className="text-2xl">{module.level} Level</CardTitle>
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
