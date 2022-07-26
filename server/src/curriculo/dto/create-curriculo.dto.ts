import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateCurriculoDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  datanasc: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsString()
  escolaridade: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  funcao: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  competencias: string;

  @IsString()
  status: string = 'Aguardando';
}
