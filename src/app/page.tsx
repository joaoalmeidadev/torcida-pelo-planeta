import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full min-h-screen w-full bg-[url('/background.avif')] bg-cover bg-center">
      <h1>Hello World</h1>

      <Image
        src="/bottom-background.png"
        alt="Máscara de fundo com triângulos"
        width={348}
        height={45}
        className="absolute right-0 bottom-0"
      />
    </div>
  );
}
