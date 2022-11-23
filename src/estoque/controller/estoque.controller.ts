import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateEstoqueDto } from '../dto/create-estoque.dto';
import { EstoqueService } from '../service/estoque.service';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  @Post()
  cadastrarEstoque(@Body() dados: CreateEstoqueDto) {
    return this.estoqueService.cadastrarEstoque(dados);
  }

  @Get()
  buscaTodoEstoque(){
    return this.estoqueService.buscarTodoEstoque();
  }

  @Get()
  buscaEstoqueDetalhado(@Param('id') id: string) {
    return this.estoqueService.buscarEstoqueDetalhado(id);
  }
}
