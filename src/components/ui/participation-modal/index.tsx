"use client";

import * as React from "react";
import { createPortal } from "react-dom";

import { BACKEND_URL } from "@/constants/environments";
import { RegistroMudaPayload } from "@/models";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Container } from "@/components/layout/container";

import { ParticipationForm } from "./components/participation-form";
import { SuccessView } from "./components/success-view";
import { ParticipationFormData } from "./types";

interface ParticipationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ParticipationModal({ isOpen, onClose }: ParticipationModalProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [formData, setFormData] = React.useState<ParticipationFormData>({
    name: "",
    email: "",
    team: "",
    instagram: "",
    plantName: "",
    termsAccepted: false,
  });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      return;
    }

    setIsLoading(true);

    try {
      const payload: RegistroMudaPayload = {
        nome: formData.name,
        email: formData.email,
        time: formData.team,
        instagram: formData.instagram,
        nome_muda: formData.plantName,
        termos: formData.termsAccepted,
      };

      const response = await fetch(`${BACKEND_URL}/registro-de-mudas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: payload }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      setIsSuccess(true);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
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

  if (!mounted) return null;

  return createPortal(
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
              <div className="absolute -top-7 left-1/2 z-10 -translate-x-1/2">
                <button
                  onClick={handleClose}
                  className="bg-brand-green-light flex cursor-pointer items-center gap-2 rounded-t-xl px-6 py-2 text-sm font-bold text-white uppercase shadow-lg"
                >
                  <div className="rounded-full bg-white p-0.5">
                    <X className="text-brand-green-light size-3" strokeWidth={4} />
                  </div>
                  Fechar
                </button>
              </div>

              <div className="relative z-10 h-10 w-full overflow-hidden rounded-t-3xl">
                <div className="bg-brand-green-light h-3 min-h-3 w-full" />
                <div className="bg-brand-yellow-light h-3 min-h-3 w-full" />
              </div>

              <div className="overflow-y-auto p-6 md:p-12">
                <Container>
                  {isSuccess ? (
                    <SuccessView onClose={handleClose} />
                  ) : (
                    <ParticipationForm
                      formData={formData}
                      setFormData={setFormData}
                      onSubmit={handleSubmit}
                      isLoading={isLoading}
                    />
                  )}
                </Container>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
