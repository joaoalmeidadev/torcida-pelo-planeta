import { cn } from "@/lib/cn";

export interface Donation {
  id: number;
  documentId: string;
  nome: string;
  email: string;
  time: string;
  instagram: string;
  nome_muda: string;
  termos: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

interface DonationsTableProps {
  donations: Donation[];
}

export function DonationsTable({ donations }: DonationsTableProps) {
  return (
    <div className="flex w-full max-w-[900px] flex-col gap-4">
      <h2 className="text-center text-2xl font-bold text-white uppercase">
        Listagem das suas doações
      </h2>
      <div className="w-full overflow-hidden rounded-t-[16px]">
        <table className="w-full text-left text-sm">
          <thead className="h-[72px] bg-[#167A124D] text-white uppercase">
            <tr>
              <th className="p-4 font-bold">Nome</th>
              <th className="p-4 font-bold">Dia</th>
              <th className="p-4 font-bold">Nome da muda</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-white/90">
            {donations.map((donation) => (
              <tr key={donation.id} className="h-[60px] bg-[#FFFFFF1A] hover:bg-white/5">
                <td className="p-4">{donation.nome}</td>
                <td className="p-4">{new Date(donation.createdAt).toLocaleDateString("pt-BR")}</td>
                <td className="p-4">{donation.nome_muda}</td>
              </tr>
            ))}
            {donations.length === 0 && (
              <tr>
                <td colSpan={3} className="p-8 text-center text-white/60">
                  Nenhuma doação encontrada para este e-mail.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
