import clsx from "clsx";
import React, { ReactNode, forwardRef } from "react";

export interface SectionContainerProps {
  children?: ReactNode;
  className?: string;
}
const SectionContainer = forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
