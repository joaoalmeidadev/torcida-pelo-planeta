export interface RegistroMuda {
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
  publishedAt: string;
}

export interface RegistroMudaPayload {
  nome: string;
  email: string;
  time: string;
  instagram: string;
  nome_muda: string;
  termos: boolean;
}
