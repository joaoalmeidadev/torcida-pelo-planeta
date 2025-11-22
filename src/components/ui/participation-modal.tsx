"use client";

import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/cn";

interface ParticipationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TEAMS = [
  "Corinthians",
  "Palmeiras",
  "São Paulo",
  "Santos",
  "Flamengo",
  "Vasco",
  "Fluminense",
  "Botafogo",
  "Grêmio",
  "Internacional",
  "Atlético Mineiro",
  "Cruzeiro",
];

export function ParticipationModal({ isOpen, onClose }: ParticipationModalProps) {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    team: "",
    instagram: "",
    plantName: "",
    termsAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation if needed
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      team: "",
      instagram: "",
      plantName: "",
      termsAccepted: false,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-50 flex items-end justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative flex max-h-[85vh] w-full flex-col rounded-t-3xl bg-white shadow-xl"
            >
              {/* Close Button Tab */}
              <div className="absolute -top-7 left-1/2 z-10 -translate-x-1/2">
                <button
                  onClick={handleClose}
                  className="bg-brand-green-light flex items-center gap-2 rounded-t-xl px-6 py-2 text-sm font-bold text-white uppercase shadow-lg"
                >
                  <div className="rounded-full bg-white p-0.5">
                    <X className="text-brand-green-light size-3" strokeWidth={4} />
                  </div>
                  Fechar
                </button>
              </div>

              {/* Top Stripes */}
              <div className="relative z-10 w-full overflow-hidden rounded-t-3xl">
                <div className="bg-brand-green-light h-3 min-h-3 w-full" />
                <div className="bg-brand-yellow-light h-3 min-h-3 w-full" />
              </div>

              {/* Content */}
              <div className="overflow-y-auto p-6 md:p-12">
                <Container>
                  {isSuccess ? (
                    <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
                      <h2 className="text-brand-green text-3xl leading-tight font-black uppercase md:text-5xl">
                        Envio realizado
                        <br />
                        com sucesso!
                      </h2>
                      <p className="text-brand-green max-w-md text-lg">
                        Não esqueça que para participar da promoção você deverá ter doado uma muda
                        de planta.
                      </p>
                      <Button
                        onClick={handleClose}
                        className="bg-brand-yellow-light hover:bg-brand-yellow-light/90 text-brand-green mt-8 w-full max-w-xs rounded-lg px-12 py-6 text-lg font-black uppercase"
                      >
                        Finalizar
                      </Button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
                    >
                      {/* Left Column - Personal Info */}
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-brand-green text-lg font-bold">
                            Seu nome completo
                          </label>
                          <Input
                            variant="form"
                            placeholder="Insira seu nome..."
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-brand-green text-lg font-bold">Seu e-mail</label>
                          <Input
                            variant="form"
                            type="email"
                            placeholder="seuemail@email.com.br"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-brand-green text-lg font-bold">
                            Selecione um time
                          </label>
                          <Select
                            value={formData.team}
                            onValueChange={(value) => setFormData({ ...formData, team: value })}
                          >
                            <SelectTrigger variant="form">
                              <SelectValue placeholder="Seu time" />
                            </SelectTrigger>
                            <SelectContent>
                              {TEAMS.map((team) => (
                                <SelectItem key={team} value={team}>
                                  {team}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-brand-green text-lg leading-tight font-bold">
                            Insira o nome do seu
                            <br />
                            usuário no Instagram
                          </label>
                          <Input
                            variant="form"
                            placeholder="@usuario"
                            required
                            value={formData.instagram}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                instagram: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      {/* Right Column - Promo Info */}
                      <div className="space-y-6">
                        <div className="bg-brand-yellow-light space-y-6 rounded-3xl p-6 md:p-8">
                          <div className="space-y-4">
                            <h3 className="text-brand-green text-xl leading-tight font-black uppercase">
                              Você pode batizar o novo mascote da Torcida pelo Planeta.
                            </h3>
                            <p className="text-brand-green/80 text-sm leading-relaxed font-medium">
                              Dê um nome à muda que você acabou de doar - ela pode virar o nome do
                              mascote oficial dos jogos da Taça dos Povos Indígenas.
                            </p>
                            <p className="text-brand-green/80 text-sm leading-relaxed font-medium">
                              E mais: se o seu nome for escolhido, você ganha uma camisa oficial da
                              Seleção Brasileira autografada pelo Vini Jr.
                            </p>
                          </div>

                          <div className="space-y-2">
                            <label className="text-brand-green block text-lg font-bold">
                              Qual o nome que você quer dar para a sua muda?
                            </label>
                            <Input
                              className="focus-visible:ring-brand-green/20 h-12 rounded-lg border-none bg-white text-gray-700 placeholder:text-gray-400 focus-visible:ring-2"
                              placeholder="Nome da muda de planta..."
                              required
                              value={formData.plantName}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  plantName: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-2">
                          <input
                            type="checkbox"
                            id="terms"
                            required
                            className="text-brand-green focus:ring-brand-green size-5 rounded border-gray-300"
                            checked={formData.termsAccepted}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                termsAccepted: e.target.checked,
                              })
                            }
                          />
                          <label
                            htmlFor="terms"
                            className="text-brand-green cursor-pointer text-sm font-bold underline"
                          >
                            Li e aceito o Regulamento e Política de Privacidade
                          </label>
                        </div>

                        <Button type="submit">Enviar</Button>
                      </div>
                    </form>
                  )}
                </Container>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
