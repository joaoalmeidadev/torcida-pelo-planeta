import Image from "next/image";

export function HeroTitle() {
  return (
    <h1 className="font-CCGibbonsGazette text-center text-2xl leading-[120%] text-white uppercase md:text-left md:text-[34px]">
      Você já começou a fazer <br />{" "}
      <span className="relative inline-block">
        <span className="text-brand-green relative z-10 text-[60px] leading-[120%] md:text-[86px]">
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
  );
}
