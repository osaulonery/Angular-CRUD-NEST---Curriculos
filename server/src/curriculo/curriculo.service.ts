import { Injectable } from '@nestjs/common';
import { CreateCurriculoDto } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';
import { CurriculoRepository } from './repository/curriculo.repository';

@Injectable()
export class CurriculoService {
  constructor(private readonly CurriculoRepo: CurriculoRepository) {}

  create(createCurriculoDto: CreateCurriculoDto) {
    return this.CurriculoRepo.create(createCurriculoDto);
  }

  findAll() {
    return this.CurriculoRepo.findAll();
  }

  findOne(id: number) {
    return this.CurriculoRepo.findOne(id);
  }

  update(id: number, updateCurriculoDto: UpdateCurriculoDto) {
    return this.CurriculoRepo.update(id, updateCurriculoDto);
  }

  remove(id: number) {
    return this.CurriculoRepo.remove(id);
  }
}
