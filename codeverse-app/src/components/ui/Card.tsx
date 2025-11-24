import React from "react";
import clsx from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padded?: boolean;
}

const Card: React.FC<CardProps> = ({ padded = true, className, children, ...rest }) => {
  return (
    <div
      className={clsx(
        "rounded-xl border border-slate-800 bg-slate-900/60 shadow-sm",
        padded && "p-4 md:p-6",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
