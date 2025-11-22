import Image from "next/image";

export function BottomDecoration() {
  return (
    <Image
      src="/bottom-background.png"
      alt="Máscara de fundo com triângulos"
      width={348}
      height={45}
      className="absolute right-0 bottom-0"
      draggable={false}
    />
  );
}
