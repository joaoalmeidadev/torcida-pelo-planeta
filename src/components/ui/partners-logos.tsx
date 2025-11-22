import Image from "next/image";

import { cn } from "@/lib/cn";

interface PartnersLogosProps {
  className?: string;
  width?: number;
  height?: number;
}

export function PartnersLogos({ className, width = 349, height = 120 }: PartnersLogosProps) {
  return (
    <Image
      src="/partners-logos.svg"
      alt="Logos dos parceiros"
      aria-hidden="true"
      width={width}
      height={height}
      className={cn("pointer-events-none object-contain", className)}
    />
  );
}
