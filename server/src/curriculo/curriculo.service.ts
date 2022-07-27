import { Injectable } from '@nestjs/common';
import { CreateCurriculoDto } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';
import { CurriculoRepository } from './repository/curriculo.repository';

@Injectable()
export class CurriculoService {
  curriculos = [];
  constructor(private readonly CurriculoRepo: CurriculoRepository) {}

  create(createCurriculoDto: CreateCurriculoDto) {
    return this.CurriculoRepo.create(createCurriculoDto);
  }

  findAll() {
    return this.CurriculoRepo.findAll();
  }

  async findEscolaridade() {
    var curriculo: any[] = await this.CurriculoRepo.findAll();
    var escolaridadeData = [
      {
        name: 'Analfabeto',
        value: this.contador('Analfabeto', 'escolaridade', curriculo),
      },
      {
        name: 'Fundamental Completo',
        value: this.contador('Fundamental Completo', 'escolaridade', curriculo),
      },
      {
        name: 'Médio Incompleto',
        value: this.contador('Médio Incompleto', 'escolaridade', curriculo),
      },
      {
        name: 'Médio Completo',
        value: this.contador('Médio Completo', 'escolaridade', curriculo),
      },
      {
        name: 'Superior Incompleto',
        value: this.contador('Superior Incompleto', 'escolaridade', curriculo),
      },
      {
        name: 'Superior Completo',
        value: this.contador('Superior Completo', 'escolaridade', curriculo),
      },
      {
        name: 'Mestrado',
        value: this.contador('Mestrado', 'escolaridade', curriculo),
      },
      {
        name: 'Doutorado',
        value: this.contador('Doutorado', 'escolaridade', curriculo),
      },
      {
        name: 'Ignorado',
        value: this.contador('Ignorado', 'escolaridade', curriculo),
      },
    ];
    return escolaridadeData;
  }

  async findStatus() {
    var status: any[] = await this.CurriculoRepo.findAll();
    var statusData = [
      {
        name: 'Aguardando',
        value: this.contador('Aguardando', 'status', status),
      },
      {
        name: 'Aprovado',
        value: this.contador('Aprovado', 'status', status),
      },
      {
        name: 'Reprovado',
        value: this.contador('Reprovado', 'status', status),
      },
    ];
    return statusData;
  }

  findCpf(cpf: string) {
    return this.CurriculoRepo.findCpf(cpf);
  }

  update(cpf: string, updateCurriculoDto: UpdateCurriculoDto) {
    return this.CurriculoRepo.update(cpf, updateCurriculoDto);
  }

  remove(id: number) {
    return this.CurriculoRepo.remove(id);
  }

  private contador(valor: string, campo: string, curriculo: any[]): number {
    const filtroCurriculo = curriculo.filter((e: any) => e[campo] === valor);
    return filtroCurriculo.length;
  }
}
