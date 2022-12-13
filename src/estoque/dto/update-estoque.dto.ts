import { OmitType } from '@nestjs/mapped-types';
import { CreateEstoqueDto } from './create-estoque.dto';

export class UpdateEstoqueDto extends OmitType(CreateEstoqueDto, [
  'id_produto',
  'nome',
] as const) {}
