import { IsNumber, IsString } from 'class-validator';

export class CreateFuncionarioDto {
  @IsString()
  nome: string;

  @IsNumber()
  matricula: number;

  @IsString()
  email: string;

  @IsNumber()
  telefone: number;

  @IsString()
  horarioTrabalho: string;

  @IsString()
  endereco: string;
}
