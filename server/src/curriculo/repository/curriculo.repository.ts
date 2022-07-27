import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCurriculoDto } from '../dto/create-curriculo.dto';
import { UpdateCurriculoDto } from '../dto/update-curriculo.dto';
import { CurriculoEntity } from '../entities/curriculo.entity';

@Injectable()
export class CurriculoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createCurriculoDto: CreateCurriculoDto,
  ): Promise<CurriculoEntity> {
    return this.prisma.curriculo.create({
      data: createCurriculoDto,
    });
  }

  async findAll(): Promise<CurriculoEntity[]> {
    return await this.prisma.curriculo.findMany();
  }

  async findCpf(cpf: string): Promise<CurriculoEntity[]> {
    return await this.prisma.curriculo.findMany({
      where: {
        cpf: {
          equals: cpf,
        },
      },
    });
  }

  async findCpfEdit(cpf: string): Promise<CurriculoEntity> {
    return await this.prisma.curriculo.findUnique({
      where: {
        cpf,
      },
    });
  }

  async update(
    cpf: string,
    updateCurriculoDto: UpdateCurriculoDto,
  ): Promise<CurriculoEntity> {
    return await this.prisma.curriculo.update({
      where: {
        cpf,
      },
      data: updateCurriculoDto,
    });
  }

  async remove(id: number): Promise<CurriculoEntity> {
    return await this.prisma.curriculo.delete({
      where: {
        id,
      },
    });
  }
}
