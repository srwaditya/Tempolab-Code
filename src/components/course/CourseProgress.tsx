import React from "react";
import { Progress } from "@/components/ui/progress";

interface CourseProgressProps {
  progress?: number;
  totalLessons?: number;
  completedLessons?: number;
}

const CourseProgress = ({
  progress = 45,
  totalLessons = 10,
  completedLessons = 4,
}: CourseProgressProps) => {
  return (
    <div className="w-full h-12 bg-background border-b flex items-center px-4 gap-4">
      <div className="flex-1">
        <Progress value={progress} className="h-2" />
      </div>
      <div className="text-sm text-muted-foreground">
        {completedLessons} of {totalLessons} lessons completed
      </div>
      <div className="font-medium">{progress}%</div>
    </div>
  );
};

export default CourseProgress;
