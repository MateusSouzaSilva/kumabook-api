import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProdutosService } from '../service/produtos.service';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { UpdateProdutoDto } from '../dto/update-produto.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  adicionaProduto(@Body() dados: CreateProdutoDto) {
    return this.produtosService.adicionaProduto(dados);
  }

  @Get()
  buscaTodosProdutos() {
    return this.produtosService.buscaTodosProdutos();
  }

  @Get(':id')
  buscaProdutoPorID(@Param('id') id: string) {
    return this.produtosService.buscaProdutoPorId(id);
  }

  @Put(':id')
  atualizaProduto(@Param('id') id: string, @Body() data: UpdateProdutoDto) {
    return this.produtosService.atualizaProduto(id, data);
  }

  @Delete(':id')
  deletaProduto(@Param('id') id: string) {
    return this.produtosService.deletaProduto(id);
  }
}
