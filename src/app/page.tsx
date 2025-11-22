import Image from "next/image";

import { Container } from "@/components/layout";
import { Button, VideoPlayer } from "@/components/ui";

export default function Home() {
  return (
    <div className="pt-header-height relative h-full min-h-screen w-full bg-[url('/background.avif')] bg-cover bg-center">
      <Image
        src="/bottom-background.png"
        alt="Máscara de fundo com triângulos"
        width={348}
        height={45}
        className="absolute right-0 bottom-0"
        draggable={false}
      />

      <Container className="flex justify-between gap-10 pb-10">
        <div className="mt-14 flex max-w-[458px] flex-col gap-14">
          <div className="flex flex-col gap-6">
            <h1 className="text-[34px] leading-[120%] text-white uppercase">
              Você já começou a fazer <br />{" "}
              <span className="relative inline-block">
                <span className="text-brand-green relative z-10 text-[86px] leading-[120%]">
                  diferença
                </span>
                <Image
                  src="/spray.svg"
                  alt=""
                  aria-hidden="true"
                  width={476}
                  height={100}
                  className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-full w-[105%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
                />
              </span>
            </h1>

            <div>
              <p className="text-xl leading-[130%] text-white uppercase">
                Preencha as informações e concorra uma camiseta autografada pelo
              </p>
              <p className="text-brand-yellow-light text-xl leading-[130%] uppercase">vini jr.</p>
            </div>
          </div>

          <Button className="max-w-[360px]">Clique e participe</Button>

          <Image
            src="/partners-logos.svg"
            alt=""
            aria-hidden="true"
            width={349}
            height={120}
            className="pointer-events-none mt-16 object-contain"
          />
        </div>

        <div className="mt-6 flex flex-col gap-8">
          <Image
            src="/t-shirt-vini.png"
            alt="Camiseta autografada pelo Vini Jr."
            aria-hidden="true"
            width={425}
            height={301}
            className="pointer-events-none object-contain"
          />
          <VideoPlayer />
        </div>
      </Container>
    </div>
  );
}
