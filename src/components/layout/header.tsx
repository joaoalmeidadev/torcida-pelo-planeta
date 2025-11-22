import Image from "next/image";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { PartnersLogos } from "@/components/ui";

import { Container } from "./container";

interface HeaderProps {
  variant?: "default" | "search-results";
  onBackClick?: () => void;
}

export function Header({ variant = "default", onBackClick }: HeaderProps) {
  return (
    <header className="bg-black-transparent h-header-height fixed top-0 right-0 left-0 z-40 backdrop-blur-xs">
      <Container className="relative flex h-full items-center justify-between">
        {variant === "default" ? (
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
        ) : onBackClick ? (
          <button
            onClick={onBackClick}
            className="text-brand-yellow-light flex cursor-pointer items-center gap-2 border-none bg-transparent"
          >
            <Image src="/arrow-left.svg" alt="" width={24} height={24} className="object-contain" />
            <span className="hover:underline">Voltar</span>
          </button>
        ) : (
          <Link href="/minhas-doacoes" className="text-brand-yellow-light flex items-center gap-2">
            <Image src="/arrow-left.svg" alt="" width={24} height={24} className="object-contain" />
            <span className="hover:underline">Voltar</span>
          </Link>
        )}

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

        {variant === "default" ? (
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
        ) : (
          <PartnersLogos width={154} height={48} className="hidden md:block" />
        )}
      </Container>
    </header>
  );
}
