import Image from "next/image";

export function PartnersLogos() {
  return (
    <Image
      src="/partners-logos.svg"
      alt="Logos dos parceiros"
      aria-hidden="true"
      width={349}
      height={120}
      className="pointer-events-none mt-16 object-contain"
    />
  );
}
