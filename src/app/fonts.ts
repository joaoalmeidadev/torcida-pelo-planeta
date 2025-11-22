import localFont from "next/font/local";

export const CCGibbonsGazette = localFont({
  src: [
    {
      path: "../../public/fonts/title/CCGibbonsGazette/CCGibbonsGazette.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-CCGibbonsGazette",
  display: "swap",
});
