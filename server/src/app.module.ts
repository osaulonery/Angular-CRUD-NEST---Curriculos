import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { CurriculoModule } from './curriculo/curriculo.module';

@Module({
  imports: [ConfigModule.forRoot(), CurriculoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
