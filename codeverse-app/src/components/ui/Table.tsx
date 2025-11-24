import React from "react";
import clsx from "clsx";

const TableRoot: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <table className={clsx("w-full text-left text-slate-200 text-sm", className)}>
    {children}
  </table>
);

const Head: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <thead className="bg-slate-800/50 text-slate-300">{children}</thead>
);

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <tbody className="divide-y divide-slate-800">{children}</tbody>
);

const Row: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <tr className={clsx("hover:bg-slate-800/30", className)}>{children}</tr>
);

const Th: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <th
    className={clsx(
      "px-4 py-3 font-medium text-xs uppercase tracking-wide text-slate-400",
      className
    )}
  >
    {children}
  </th>
);

const Td: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <td className={clsx("px-4 py-3 text-slate-300", className)}>{children}</td>
);

// Attach components
const Table = Object.assign(TableRoot, {
  Head,
  Body,
  Row,
  Th,
  Td,
});

export default Table;
