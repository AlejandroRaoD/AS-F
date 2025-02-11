import clsx from "clsx";
import React, { ReactNode, forwardRef } from "react";

export interface props {
  children?: ReactNode;
  className?: string;
}

// Usamos forwardRef para que puedas pasar un ref desde el componente padre
const SectionContainer = forwardRef<HTMLDivElement, props>((props, ref) => {
  const { children, className } = props;

  return (
    <div
      ref={ref} // Añadimos el ref aquí
      className={clsx(
        "border mb-2 p-4 border-gray-300 bg-white rounded-lg shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
});

export default SectionContainer;
