import type { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[2000px] px-5 sm:px-10 md:px-14 lg:px-12 xl:px-14 2xl:px-16 ${className}`}
    >
      {children}
    </div>
  );
}
