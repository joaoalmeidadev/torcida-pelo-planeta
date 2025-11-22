"use client";

import Image from "next/image";

import { motion } from "framer-motion";

export default function Home() {
  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { type: "spring", stiffness: 50, damping: 20 },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { type: "spring", stiffness: 50, damping: 20 },
  };

  return (
    <div className="flex w-full flex-col">
      <section className="bg-brand-green relative flex h-[400px] w-full flex-col items-center justify-between overflow-hidden lg:h-screen lg:min-h-[600px]">
        <div className="absolute inset-0 z-10 opacity-60 mix-blend-multiply">
          <Image
            src="/background-1.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="absolute -top-[311px] right-16 z-0 h-[860px] w-[888px] shrink-0 rounded-[888px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,0,0.54)_0%,rgba(1,131,69,0.00)_100%)]" />

        <motion.div
          className="absolute inset-0 z-5 translate-x-16 md:translate-x-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        >
          <Image
            src="/logo-background-1.png"
            alt=""
            fill
            className="object-contain object-top-right"
          />
        </motion.div>

        <div className="absolute inset-0 z-10 flex items-end justify-end">
          <div className="relative h-full w-full md:h-full md:w-1/2">
            <motion.div
              className="relative h-full w-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <Image
                src="/men-background-1.png"
                alt="Torcedor com vuvuzela"
                fill
                className="object-contain object-bottom md:object-bottom-right"
                priority
              />
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 flex h-full w-full flex-col items-start justify-center p-6">
          <div className="flex w-fit flex-1 flex-col justify-start pt-8 lg:flex-none lg:justify-center lg:pt-0">
            <motion.div
              className="relative flex h-32 w-64 flex-col items-center lg:h-64 lg:w-[580px]"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <Image
                src="/logotipo.png"
                alt="Torcida pelo Planeta"
                width={560}
                height={315}
                className="object-contain object-left"
              />
            </motion.div>

            <motion.div
              className="mt-2 mb-6 flex w-[200px] justify-center self-center lg:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <a
                href="https://taca.benfeitoria.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Doe agora"
                className="bg-brand-yellow text-brand-green w-full max-w-[200px] rounded-full py-4 text-center text-xs font-black uppercase shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] transition-colors hover:bg-[#ffeb3b]"
              >
                Doe Agora!
              </a>
            </motion.div>
          </div>

          <div className="mb-8 flex flex-col gap-3 lg:mb-0 lg:w-[580px] lg:flex-col-reverse lg:items-end">
            <motion.p
              className="text-[10px] font-bold text-white uppercase lg:text-right lg:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Ação Oficial: CBF / Taça dos Povos Indígenas / Paraquemdoar
            </motion.p>
            <motion.div
              className="relative h-12 w-48 lg:h-20 lg:w-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Image
                src="/partners-logo.png"
                alt="Parceiros"
                width={305}
                height={91}
                className="object-contain object-left lg:object-right"
              />
            </motion.div>
          </div>

          <motion.div
            className="mt-4 hidden w-[580px] justify-end lg:flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <a
              href="https://taca.benfeitoria.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Doe agora"
              className="bg-brand-yellow text-brand-green w-full max-w-[320px] rounded-full py-4 text-center text-xl font-black uppercase shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] transition-colors hover:bg-[#ffeb3b] lg:w-auto lg:px-16"
            >
              Doe Agora!
            </a>
          </motion.div>
        </div>

        <div className="bg-brand-yellow absolute right-0 bottom-0 left-0 z-10 h-2 w-full lg:h-[25px]"></div>
      </section>

      <section className="bg-brand-yellow relative flex h-[450px] w-full flex-col overflow-hidden pb-20 md:h-screen lg:min-h-[676px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/background-2.png"
            alt="Imagem de uma torcida"
            fill
            className="hidden object-cover object-center md:block"
          />

          <Image
            src="/background-2-mobile.png"
            alt="Imagem de uma torcida"
            fill
            className="block object-cover object-center md:hidden"
          />
        </div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-1 items-center justify-center gap-6 px-4 pt-20 pb-12 md:flex-row md:gap-60 md:px-8 md:py-0">
          <div className="order-2 mb-8 flex w-fit flex-col items-start justify-center gap-4 md:order-1 md:mb-0 md:w-1/3">
            <motion.div
              className="bg-brand-yellow text-brand-green inline-block transform px-4 py-2 shadow-lg transition-transform hover:scale-105 md:px-6 md:py-3"
              variants={slideInLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.1 }}
            >
              <h2 className="leading-none font-black tracking-tight uppercase md:text-4xl lg:text-[52px]">
                É HORA
              </h2>
            </motion.div>
            <motion.div
              className="bg-brand-yellow text-brand-green inline-block transform px-4 py-2 shadow-lg transition-transform hover:scale-105 md:px-6 md:py-3"
              variants={slideInLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.3 }}
            >
              <h2 className="leading-none font-black tracking-tight uppercase md:text-4xl lg:text-[52px]">
                DE MOBILIZAR
              </h2>
            </motion.div>
            <motion.div
              className="bg-brand-yellow text-brand-green inline-block transform px-4 py-2 shadow-lg transition-transform hover:scale-105 md:px-6 md:py-3"
              variants={slideInLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.5 }}
            >
              <h2 className="leading-none font-black tracking-tight uppercase md:text-4xl lg:text-[52px]">
                SUA TORCIDA
              </h2>
            </motion.div>
          </div>

          <div className="order-3 mt-10 mb-8 flex w-fit flex-col items-end justify-center gap-4 md:mt-0 md:mb-0 md:w-1/3">
            <motion.div
              className="bg-box-green text-brand-yellow inline-block transform px-4 py-2 whitespace-nowrap shadow-lg transition-transform hover:scale-105 md:px-6 md:py-3"
              variants={slideInRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.1 }}
            >
              <h2 className="leading-none font-black tracking-tight uppercase md:text-4xl lg:text-[52px]">
                TEM UM NOVO
              </h2>
            </motion.div>
            <motion.div
              className="bg-box-green text-brand-yellow inline-block transform px-4 py-2 whitespace-nowrap shadow-lg transition-transform hover:scale-105 md:px-6 md:py-3"
              variants={slideInRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.3 }}
            >
              <h2 className="leading-none font-black tracking-tight uppercase md:text-4xl lg:text-[52px]">
                SITE ENTRANDO
              </h2>
            </motion.div>
            <motion.div
              className="bg-box-green text-brand-yellow inline-block transform px-4 py-2 whitespace-nowrap shadow-lg transition-transform hover:scale-105 md:px-6 md:py-3"
              variants={slideInRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.5 }}
            >
              <h2 className="leading-none font-black tracking-tight uppercase md:text-4xl lg:text-[52px]">
                EM CAMPO
              </h2>
            </motion.div>
          </div>
        </div>

        <div className="absolute right-4 bottom-4 z-20 md:right-24 md:bottom-10">
          <Image
            src="/footer-partners-logos.png"
            alt="Parceiros"
            width={173}
            height={52}
            className="object-contain object-right"
            draggable={false}
          />
        </div>
      </section>
    </div>
  );
}
