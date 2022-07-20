import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class CreateCurriculoDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(10000000000)
  @Max(99999999999)
  cpf: number;

  @IsNotEmpty()
  @IsString()
  datanasc: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  telefone: number;

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
}
