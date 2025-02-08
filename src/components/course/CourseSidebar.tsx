import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle } from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface CourseSidebarProps {
  modules?: Module[];
  currentLessonId?: string;
  onLessonSelect?: (lessonId: string) => void;
}

const defaultModules: Module[] = [
  {
    id: "1",
    title: "Getting Started",
    lessons: [
      {
        id: "1-1",
        title: "Course Introduction",
        duration: "5:30",
        isCompleted: true,
      },
      {
        id: "1-2",
        title: "Setting Up Your Environment",
        duration: "10:15",
        isCompleted: true,
      },
    ],
  },
  {
    id: "2",
    title: "Core Concepts",
    lessons: [
      {
        id: "2-1",
        title: "Basic Principles",
        duration: "15:00",
        isCompleted: false,
      },
      {
        id: "2-2",
        title: "Advanced Topics",
        duration: "20:45",
        isCompleted: false,
      },
    ],
  },
];

const CourseSidebar = ({
  modules = defaultModules,
  currentLessonId = "1-1",
  onLessonSelect = () => {},
}: CourseSidebarProps) => {
  return (
    <div className="w-80 h-full bg-background border-r flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Course Content</h2>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4">
          <Accordion type="single" collapsible className="w-full">
            {modules.map((module) => (
              <AccordionItem key={module.id} value={module.id}>
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-sm font-medium">{module.title}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-1">
                    {module.lessons.map((lesson) => (
                      <Button
                        key={lesson.id}
                        variant="ghost"
                        className={`w-full justify-start gap-2 h-auto py-2 px-4 ${currentLessonId === lesson.id ? "bg-accent" : ""}`}
                        onClick={() => onLessonSelect(lesson.id)}
                      >
                        {lesson.isCompleted ? (
                          <CheckCircle className="h-4 w-4 text-primary" />
                        ) : (
                          <Circle className="h-4 w-4 text-muted-foreground" />
                        )}
                        <div className="flex flex-col items-start text-left">
                          <span className="text-sm">{lesson.title}</span>
                          <span className="text-xs text-muted-foreground">
                            {lesson.duration}
                          </span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollArea>
    </div>
  );
};

export default CourseSidebar;
