import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateEstoqueDto } from '../dto/create-estoque.dto';
import { UpdateEstoqueDto } from '../dto/update-estoque.dto';
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

  @Get(':nome')
  buscarEstoquePorNome(@Param('nome') nome: string) {
    return this.estoqueService.buscarEstoquePorNome(nome);
  }

  @Put(':id')
  atualizaEstoque(@Param('id') id: string, @Body() data:UpdateEstoqueDto) {
    return this.estoqueService.atualizaEstoque(id, data);
  }
}
