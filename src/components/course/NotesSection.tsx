import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface NotesProps {
  initialNotes?: string;
  onSave?: (notes: string) => void;
  isExpanded?: boolean;
}

const NotesSection = ({
  initialNotes = "",
  onSave = () => {},
  isExpanded = true,
}: NotesProps) => {
  const [notes, setNotes] = useState(initialNotes);
  const [isOpen, setIsOpen] = useState(isExpanded);

  const handleSave = () => {
    onSave(notes);
  };

  return (
    <Card className="w-full bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Lecture Notes</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2"
        >
          {isOpen ? (
            <>
              <span>Collapse</span>
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              <span>Expand</span>
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      {isOpen && (
        <div className="space-y-4">
          <Textarea
            placeholder="Take notes for this lecture..."
            className="min-h-[150px] w-full"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <div className="flex justify-end">
            <Button onClick={handleSave}>Save Notes</Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default NotesSection;
