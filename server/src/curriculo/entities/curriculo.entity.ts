import { Curriculo } from '@prisma/client';

export class CurriculoEntity implements Curriculo {
  id: number;
  name: string;
  cpf: number;
  datanasc: string;
  email: string;
  telefone: number;
  escolaridade: string;
  funcao: string;
  competencias: string;
}
