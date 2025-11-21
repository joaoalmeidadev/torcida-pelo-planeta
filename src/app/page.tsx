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
        <div
          className="absolute inset-0 z-10 opacity-60 mix-blend-multiply"
          style={{
            background:
              "url('/background-1.png') lightgray 0px -232.092px / 100% 138.697% no-repeat",
          }}
        />

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

        <div className="relative z-10 flex h-full w-full flex-1 flex-col justify-between p-6 md:justify-center md:p-12">
          <div className="flex flex-1 flex-col justify-start pt-8 md:flex-none md:justify-center md:pt-0">
            <motion.div
              className="relative h-32 w-64 md:h-56 md:w-[500px]"
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
          </div>

          <div className="mb-8 flex flex-col gap-3 md:mb-0 md:w-[500px] md:flex-col-reverse md:items-end">
            <motion.p
              className="text-[10px] font-bold text-white uppercase md:text-right md:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Ação Oficial: CBF / Taça dos Povos Indígenas / Paraquemdoar
            </motion.p>
            <motion.div
              className="relative h-12 w-48 md:h-16 md:w-64"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Image
                src="/partners-logo.png"
                alt="Parceiros"
                width={305}
                height={91}
                className="object-contain object-left md:object-right"
              />
            </motion.div>
          </div>
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
