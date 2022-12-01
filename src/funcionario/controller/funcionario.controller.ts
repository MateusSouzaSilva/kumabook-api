import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { FuncionarioService } from '../service/funcionario.service';
import { CreateFuncionarioDto } from '../dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from '../dto/update-funcionario.dto';

@Controller('funcionarios')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Post()
  adicionaFuncionario(@Body() dados: CreateFuncionarioDto) {
    return this.funcionarioService.adicionaFuncionario(dados);
  }

  @Get()
  buscaTodosFuncionarios() {
    return this.funcionarioService.buscaTodosFuncionarios();
  }

  @Get('pesquisa/:nome')
  buscaFuncionariosPorNome(@Param('nome') nome: string) {
    return this.funcionarioService.buscaFuncionarioPorNome(nome);
  }

  @Get(':id')
  buscaFuncionarioPorId(@Param('id') id: string) {
    return this.funcionarioService.buscaFuncionarioPorId(id);
  }

  @Put(':id')
  atualizaFuncionario(
    @Param('id') id: string,
    @Body() data: UpdateFuncionarioDto,
  ): Promise<void> {
    return this.funcionarioService.atualizaFuncionario(id, data);
  }

  @Delete(':id')
  deletaFuncionario(@Param('id') id: string) {
    return this.funcionarioService.deletaFuncionario(id);
  }
}
