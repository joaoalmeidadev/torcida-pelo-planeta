import Image from "next/image";

export function PrizeShowcase() {
  return (
    <Image
      src="/t-shirt.png"
      alt="Camiseta autografada pelo Bruno Guimarães."
      aria-hidden="true"
      width={292}
      height={301}
      className="pointer-events-none hidden object-contain lg:block"
    />
  );
}
