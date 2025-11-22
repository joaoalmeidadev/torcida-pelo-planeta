import { Input } from "@/components/ui/input";

import { ParticipationFormData } from "../types";

interface PromoInfoFieldsProps {
  formData: ParticipationFormData;
  setFormData: (data: ParticipationFormData) => void;
}

export function PromoInfoFields({ formData, setFormData }: PromoInfoFieldsProps) {
  return (
    <div className="bg-brand-yellow-light space-y-6 rounded-3xl p-6 md:p-8">
      <div className="space-y-4">
        <h3 className="text-brand-green text-xl leading-tight font-black uppercase">
          Você pode batizar o novo mascote da Torcida pelo Planeta.
        </h3>
        <p className="text-brand-green/80 text-sm leading-relaxed font-medium">
          Dê um nome à muda que você acabou de doar - ela pode virar o nome do mascote oficial dos
          jogos da Taça dos Povos Indígenas.
        </p>
        <p className="text-brand-green/80 text-sm leading-relaxed font-medium">
          E mais: se o seu nome for escolhido, você ganha uma camisa oficial da Seleção Brasileira
          autografada pelo Vini Jr.
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
  );
}
