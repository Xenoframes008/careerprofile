import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Container({ children, className, as = "div" }: ContainerProps) {
  const Tag = as as React.ElementType;

  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10", className)}>
      {children}
    </Tag>
  );
}
