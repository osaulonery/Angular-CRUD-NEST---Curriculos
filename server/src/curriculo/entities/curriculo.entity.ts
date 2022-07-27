import { Curriculo } from '@prisma/client';

export class CurriculoEntity implements Curriculo {
  id?: number;
  name: string;
  cpf: string;
  datanasc: string;
  email: string;
  telefone: string;
  escolaridade: string;
  funcao: string;
  competencias: string;
  status: string = 'Aguardando';
}
