import Image from "next/image";

import { Container, Header } from "@/components/layout";
import {
  BottomDecoration,
  CountdownWrapper,
  HeroDescription,
  HeroTitle,
  ParticipationTrigger,
  PartnersLogos,
  PrizeShowcase,
  VideoPlayer,
} from "@/components/ui";

export default function Home() {
  return (
    <div className="pt-header-height bg-brand-green relative h-full min-h-screen w-full bg-[url('/background.avif')] bg-cover bg-center">
      <Header />
      <CountdownWrapper>
        <BottomDecoration />
        <Image
          src="/torcida-pelo-planeta.png"
          alt="Torcida pelo Planeta"
          width={285}
          height={345}
          className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 lg:block"
          draggable={false}
        />

        <Container className="relative z-10 flex flex-col items-center justify-between gap-10 pb-10 lg:flex-row lg:items-start">
          <div className="mt-14 flex max-w-[458px] flex-col gap-8 lg:gap-14">
            <a
              href="https://taca.benfeitoria.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-yellow-light flex items-center justify-center gap-2 text-center lg:hidden"
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

            <div className="flex flex-col gap-6">
              <HeroTitle />
              <HeroDescription />
            </div>

            <ParticipationTrigger />

            <PartnersLogos className="mt-16 hidden lg:block" />
          </div>

          <div className="flex flex-col gap-8 lg:mt-6">
            <PrizeShowcase />
            <VideoPlayer />

            <PartnersLogos className="mx-auto block lg:hidden" height={68} width={196} />
          </div>
        </Container>
      </CountdownWrapper>
    </div>
  );
}
