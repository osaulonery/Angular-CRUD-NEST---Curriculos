import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
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

  @Get('/escolaridade')
  findEscolaridade() {
    return this.curriculoService.findEscolaridade();
  }

  @Get('/status')
  findStatus() {
    return this.curriculoService.findStatus();
  }

  @Get(':cpf')
  findCpf(@Param('cpf') cpf: string) {
    return this.curriculoService.findCpf(cpf);
  }

  @Put('/update/:cpf')
  update(
    @Param('cpf') cpf: string,
    @Body() updateCurriculoDto: UpdateCurriculoDto,
  ) {
    return this.curriculoService.update(cpf, updateCurriculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curriculoService.remove(+id);
  }

  @Get('/edit/:cpf')
  findCpfEdit(@Param('cpf') cpf: string) {
    return this.curriculoService.findCpf(cpf);
  }
}
