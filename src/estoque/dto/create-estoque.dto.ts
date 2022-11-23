import { IsString, IsNumber } from 'class-validator';

export class CreateEstoqueDto {
    
    @IsNumber()
    quantidade: number;

    @IsString()
    localizacao: string;

    @IsString()
    id_produto: string;

    @IsString()
    nome: string;

}