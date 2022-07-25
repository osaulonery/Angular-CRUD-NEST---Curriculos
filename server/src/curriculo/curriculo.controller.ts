import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CurriculoService } from './curriculo.service';
import { CreateCurriculoDto } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';

@Controller('curriculo')
export class CurriculoController {
  constructor(private readonly curriculoService: CurriculoService) {}

  @Post()
  create(@Body() createCurriculoDto: CreateCurriculoDto) {
    return this.curriculoService.create(createCurriculoDto);
  }

  @Get()
  findAll() {
    return this.curriculoService.findAll();
  }

  @Get(':cpf')
  findCpf(@Param('cpf') cpf: string) {
    return this.curriculoService.findCpf(cpf);
  }

  @Get(':id')
  findId(@Param('id') id: string) {
    return this.curriculoService.findId(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCurriculoDto: UpdateCurriculoDto,
  ) {
    return this.curriculoService.update(+id, updateCurriculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curriculoService.remove(+id);
  }
}
