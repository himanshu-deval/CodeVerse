import React from "react";
import clsx from "clsx";

const variants = {
  success: "bg-emerald-500/20 text-emerald-300",
  warning: "bg-yellow-500/20 text-yellow-300",
  danger: "bg-red-500/20 text-red-300",
  info: "bg-blue-500/20 text-blue-300",
  default: "bg-slate-700/50 text-slate-300",
};

export type BadgeVariant = keyof typeof variants;

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = "default", className }) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
