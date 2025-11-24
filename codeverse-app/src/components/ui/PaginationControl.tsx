import React from "react";

interface PaginationControlProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlProps> = ({
  current,
  total,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className="rounded-lg px-2 py-1 text-slate-300 hover:bg-slate-800"
        onClick={() => onChange(Math.max(1, current - 1))}
      >
        &lt;
      </button>

      {Array.from({ length: total }).map((_, i) => {
        const page = i + 1;
        return (
          <button
            key={page}
            className={`rounded-lg px-2 py-1 ${
              page === current
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
            onClick={() => onChange(page)}
          >
            {page}
          </button>
        );
      })}

      <button
        className="rounded-lg px-2 py-1 text-slate-300 hover:bg-slate-800"
        onClick={() => onChange(Math.min(total, current + 1))}
      >
        &gt;
      </button>
    </div>
  );
};

export default PaginationControls;
