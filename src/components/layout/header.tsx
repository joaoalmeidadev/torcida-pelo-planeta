import Image from "next/image";

import { Container } from "./container";

export function Header() {
  return (
    <header className="bg-black-transparent h-header-height fixed top-0 right-0 left-0 z-40">
      <Container className="relative flex h-full items-center justify-center">
        <Image
          src="/logotipo.png"
          alt="Torcida pelo Planeta"
          width={180}
          height={70}
          className="object-contain"
          priority
        />

        <a
          href="https://taca.benfeitoria.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-yellow-light absolute right-4 hidden items-center gap-2 md:flex"
        >
          <span className="hover:underline">Acesse o site Para Quem Doar</span>
          <Image
            src="/arrow-right-up.png"
            alt=""
            width={24}
            height={24}
            className="object-contain"
          />
        </a>
      </Container>
    </header>
  );
}
