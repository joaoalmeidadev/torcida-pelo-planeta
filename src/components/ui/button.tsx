import { cn } from "@/lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "font-CCGibbonsGazette bg-brand-yellow-light text-brand-green w-full cursor-pointer rounded-[8px] p-4 text-xl leading-[120%] uppercase lg:min-w-[360px]",
        "relative overflow-hidden transition-colors duration-300 ease-in-out",
        "hover:text-brand-yellow-light",
        "before:bg-brand-green before:absolute before:inset-[-2px] before:-translate-x-full before:transition-transform before:duration-300 before:ease-out",
        "hover:before:translate-x-0",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
