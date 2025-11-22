"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import { PartnersLogos } from "./partners-logos";

interface CountdownWrapperProps {
  children: React.ReactNode;
}

export function CountdownWrapper({ children }: CountdownWrapperProps) {
  const [count, setCount] = useState(3);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, [count]);

  return (
    <div className="relative h-full min-h-screen w-full pb-10">
      <AnimatePresence mode="wait">
        {!showContent ? (
          <motion.div
            key="countdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex h-full min-h-screen w-full flex-col items-center justify-center px-4 text-center"
          >
            <h2 className="font-CCGibbonsGazette mt-12 mb-10 text-center text-2xl leading-[120%] text-white uppercase md:text-[34px]">
              Obrigado por fazer a <br />{" "}
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
            </h2>

            <p className="font-CCGibbonsGazette mb-8 max-w-[600px] text-sm leading-relaxed font-medium text-white uppercase md:text-lg">
              Você está prestes a acessar a página que pode te levar a um verdadeiro tesouro do
              futebol:{" "}
              <span className="text-brand-yellow-light">
                uma camisa oficial da seleção brasileira autografada pelo Bruno Guimarães.
              </span>
            </p>

            <div className="bg-brand-yellow-light mb-8 flex h-20 w-32 items-center justify-center rounded-xl shadow-lg md:h-24 md:w-40">
              <motion.span
                key={count}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="font-CCGibbonsGazette text-brand-green text-5xl font-black md:text-6xl"
              >
                {count}
              </motion.span>
            </div>

            <p className="font-CCGibbonsGazette mb-8 max-w-[600px] text-xs leading-relaxed font-medium text-white uppercase md:text-sm">
              Uma peça única, rara e assinada por um dos jogadores mais decisivos do planeta. Não
              perca essa chance.
            </p>

            <PartnersLogos className="w-48 md:w-64" />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
