import Image from "next/image";
import Link from "next/link";

import { Container } from "./container";

export function Header() {
  return (
    <header className="bg-black-transparent h-header-height fixed top-0 right-0 left-0 z-40 backdrop-blur-xs">
      <Container className="relative flex h-full items-center justify-between">
        <a
          href="https://taca.benfeitoria.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-yellow-light hidden items-center gap-2 md:flex"
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

        <Link href="/">
          <Image
            src="/logotipo.png"
            alt="Torcida pelo Planeta"
            width={180}
            height={70}
            className="object-contain"
            priority
          />
        </Link>

        <Link
          href="/minhas-doacoes"
          className="text-brand-yellow-light hidden items-center gap-2 md:flex"
        >
          <span className="hover:underline">Ver minhas doações</span>
          <Image
            src="/arrow-right-up.png"
            alt=""
            width={24}
            height={24}
            className="object-contain"
          />
        </Link>
      </Container>
    </header>
  );
}
