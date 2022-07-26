import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateCurriculoDto } from './create-curriculo.dto';

export class UpdateCurriculoDto extends PartialType(CreateCurriculoDto) {
  @IsOptional()
  id?: number;
}
