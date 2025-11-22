import * as React from "react";

import { Button } from "@/components/ui/button";

import { ParticipationFormData } from "../types";
import { PersonalInfoFields } from "./personal-info-fields";
import { PromoInfoFields } from "./promo-info-fields";

interface ParticipationFormProps {
  formData: ParticipationFormData;
  setFormData: React.Dispatch<React.SetStateAction<ParticipationFormData>>;
  onSubmit: (e: React.FormEvent) => void;
}

export function ParticipationForm({ formData, setFormData, onSubmit }: ParticipationFormProps) {
  const handleDownloadDocs = (e: React.MouseEvent) => {
    e.preventDefault();

    const files = [
      "/POLÍTICA DE PRIVACIDADE – CAMPANHA TORCIDA PELO PLANETA.pdf",
      "/TERMOS DE USO – CAMPANHA TORCIDA PELO PLANETA.pdf",
    ];

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file;
      link.download = file.split("/").pop() || "documento.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
      <PersonalInfoFields formData={formData} setFormData={setFormData} />

      <div className="space-y-6">
        <PromoInfoFields formData={formData} setFormData={setFormData} />

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
            className="text-brand-green cursor-pointer text-sm font-bold"
            onClick={handleDownloadDocs}
          >
            Li e aceito o <span className="underline">Regulamento e Política de Privacidade</span>
          </label>
        </div>

        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}
