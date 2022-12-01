import { Injectable, NotFoundException } from '@nestjs/common';
import { Funcionario, PrismaClient } from '@prisma/client';
import { UpdateProdutoDto } from 'src/produtos/dto/update-produto.dto';
import { CreateFuncionarioDto } from '../dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from '../dto/update-funcionario.dto';

@Injectable()
export class FuncionarioService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async adicionaFuncionario(dados: CreateFuncionarioDto) {
    await this.prismaClient.funcionario.create({
      data: dados,
    });
  }

  async buscaTodosFuncionarios(): Promise<Funcionario[]> {
    const funcionarios = await this.prismaClient.funcionario.findMany();
    return funcionarios;
  }

  async buscaFuncionarioPorId(id: string): Promise<Funcionario> {
    const funcionario = await this.prismaClient.funcionario.findFirst({
      where: {
        id,
      },
    });
    return funcionario;
  }

  async buscaFuncionarioPorNome(nome: string): Promise<Funcionario[]> {
    const funcionario = await this.prismaClient.funcionario.findMany({
      where: {
        nome: {
          contains: nome,
          mode: 'insensitive',
        },
      },
    });
    return funcionario;
  }

  async atualizaFuncionario(id: string, data: UpdateProdutoDto) {
    const funcionarioExiste = await this.prismaClient.funcionario.findUnique({
      where: {
        id,
      },
    });

    if (!funcionarioExiste) {
      throw new NotFoundException(`Funcionario de id ${id} não existe`);
    }

    await this.prismaClient.funcionario.update({
      data,
      where: {
        id,
      },
    });
  }

  async deletaFuncionario(id: string) {
    const funcionario = await this.buscaFuncionarioPorId(id);

    if (!funcionario) {
      throw new NotFoundException('Funcionario não existe');
    }

    await this.prismaClient.funcionario.delete({
      where: {
        id,
      },
    });

    return `Funcionario de id ${id} excluido com sucesso!`;
  }
}
