import { Module } from '@nestjs/common';
import { CurriculoService } from './curriculo.service';
import { CurriculoController } from './curriculo.controller';

@Module({
  controllers: [CurriculoController],
  providers: [CurriculoService]
})
export class CurriculoModule {}
