import React from "react";
import CourseSidebar from "./CourseSidebar";
import CourseContent from "./CourseContent";

interface CourseLayoutProps {
  videoUrl?: string;
  title?: string;
  progress?: number;
  totalLessons?: number;
  completedLessons?: number;
  notes?: string;
  currentLessonId?: string;
  modules?: Array<{
    id: string;
    title: string;
    lessons: Array<{
      id: string;
      title: string;
      duration: string;
      isCompleted: boolean;
    }>;
  }>;
  onLessonSelect?: (lessonId: string) => void;
  onSaveNotes?: (notes: string) => void;
}

const CourseLayout = ({
  videoUrl = "https://example.com/sample-video.mp4",
  title = "Introduction to the Course",
  progress = 45,
  totalLessons = 10,
  completedLessons = 4,
  notes = "",
  currentLessonId = "1-1",
  modules = [
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
  ],
  onLessonSelect = () => {},
  onSaveNotes = () => {},
}: CourseLayoutProps) => {
  return (
    <div className="flex h-screen w-full bg-background">
      <CourseSidebar
        modules={modules}
        currentLessonId={currentLessonId}
        onLessonSelect={onLessonSelect}
      />
      <div className="flex-1">
        <CourseContent
          videoUrl={videoUrl}
          title={title}
          progress={progress}
          totalLessons={totalLessons}
          completedLessons={completedLessons}
          notes={notes}
          onSaveNotes={onSaveNotes}
        />
      </div>
    </div>
  );
};

export default CourseLayout;
