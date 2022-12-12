import { IsNumber, IsString } from 'class-validator';

export class CreateFuncionarioDto {
  @IsString()
  nome: string;

  @IsNumber()
  matricula: number;

  @IsString()
  email: string;

  @IsString()
  telefone: string;

  @IsString()
  horarioTrabalho: string;

  @IsString()
  endereco: string;
}
