import { IsString, IsDecimal } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  nome: string;

  @IsString()
  autor: string;

  @IsString()
  ano_lancamento: string;

  @IsString()
  editora: string;

  @IsDecimal()
  preco: number;
}
