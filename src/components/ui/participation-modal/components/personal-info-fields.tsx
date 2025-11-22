import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ParticipationFormData } from "../types";

interface PersonalInfoFieldsProps {
  formData: ParticipationFormData;
  setFormData: (data: ParticipationFormData) => void;
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

export function PersonalInfoFields({ formData, setFormData }: PersonalInfoFieldsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-brand-green text-lg font-bold">Seu nome completo</label>
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
        <label className="text-brand-green text-lg font-bold">Selecione um time</label>
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
          Insira o nome do seu usuário no Instagram
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
  );
}
