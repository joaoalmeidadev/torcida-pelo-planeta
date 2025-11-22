import Image from "next/image";

export function PrizeShowcase() {
  return (
    <Image
      src="/t-shirt-vini.png"
      alt="Camiseta autografada pelo Vini Jr."
      aria-hidden="true"
      width={425}
      height={301}
      className="pointer-events-none object-contain"
    />
  );
}
