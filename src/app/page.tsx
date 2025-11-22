import { Container } from "@/components/layout";
import {
  BottomDecoration,
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
      <BottomDecoration />

      <Container className="flex justify-between gap-10 pb-10">
        <div className="mt-14 flex max-w-[458px] flex-col gap-14">
          <div className="flex flex-col gap-6">
            <HeroTitle />
            <HeroDescription />
          </div>

          <ParticipationTrigger />

          <PartnersLogos />
        </div>

        <div className="mt-6 flex flex-col gap-8">
          <PrizeShowcase />
          <VideoPlayer />
        </div>
      </Container>
    </div>
  );
}
