import React from "react";
import Card from "./Card";

const CodeEditorWrapper: React.FC<{
  value?: string;
  onChange?: (v: string) => void;
}> = ({ value, onChange }) => {
  return (
    <Card className="h-64 bg-slate-950/60">
      <textarea
        className="h-full w-full resize-none bg-transparent text-sm text-slate-100 outline-none"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </Card>
  );
};

export default CodeEditorWrapper;
