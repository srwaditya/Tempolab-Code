import React from "react";
import CourseProgress from "./CourseProgress";
import NotesSection from "./NotesSection";

interface CourseContentProps {
  videoUrl?: string;
  title?: string;
  progress?: number;
  totalLessons?: number;
  completedLessons?: number;
  notes?: string;
  onSaveNotes?: (notes: string) => void;
}

const CourseContent = ({
  videoUrl = "https://example.com/sample-video.mp4",
  title = "Introduction to the Course",
  progress = 45,
  totalLessons = 10,
  completedLessons = 4,
  notes = "",
  onSaveNotes = () => {},
}: CourseContentProps) => {
  return (
    <div className="flex flex-col h-full bg-background">
      <CourseProgress
        progress={progress}
        totalLessons={totalLessons}
        completedLessons={completedLessons}
      />
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
          <video
            src={videoUrl}
            controls
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=2070"
          />
        </div>
        <NotesSection
          initialNotes={notes}
          onSave={onSaveNotes}
          isExpanded={true}
        />
      </div>
    </div>
  );
};

export default CourseContent;
