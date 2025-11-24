import React from "react";
import clsx from "clsx";

interface AvatarProps {
  name: string;
  imageUrl?: string;
  size?: "sm" | "md" | "lg";
  statusColor?: "green" | "yellow" | "gray";
}

const sizeClasses: Record<NonNullable<AvatarProps["size"]>, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-16 w-16 text-lg",
};

const statusClasses: Record<NonNullable<AvatarProps["statusColor"]>, string> = {
  green: "bg-emerald-500",
  yellow: "bg-amber-400",
  gray: "bg-slate-500",
};

const Avatar: React.FC<AvatarProps> = ({
  name,
  imageUrl,
  size = "md",
  statusColor,
}) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative inline-flex">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className={clsx(
            "rounded-full object-cover bg-slate-700",
            sizeClasses[size]
          )}
        />
      ) : (
        <div
          className={clsx(
            "flex items-center justify-center rounded-full bg-slate-800 text-slate-200",
            sizeClasses[size]
          )}
        >
          {initials}
        </div>
      )}
      {statusColor && (
        <span
          className={clsx(
            "absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-900",
            statusClasses[statusColor]
          )}
        />
      )}
    </div>
  );
};

export default Avatar;
