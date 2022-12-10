import { Injectable, NotFoundException } from '@nestjs/common';
import { Estoque, PrismaClient } from '@prisma/client';
import { UpdateEstoqueDto } from 'src/estoque/dto/update-estoque.dto';
import { CreateEstoqueDto } from '../dto/create-estoque.dto';

@Injectable()
export class EstoqueService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async cadastrarEstoque(dados: CreateEstoqueDto) {
    await this.prismaClient.estoque.create({
      data: {
        quantidade: dados.quantidade,
        localizacao: dados.localizacao,
        produtos: {
          connect: {
            id: dados.id_produto,
          },
        },
      },
      include: {
        produtos: true,
      },
    });
  }

  async buscaEstoquePorId(id: string): Promise<Estoque> {
    const estoque = await this.prismaClient.estoque.findFirst({
      where: {
        id,
      },
      include: {
        produtos: true
      }
    });
    return estoque;
  }

  async buscarTodoEstoque(): Promise<any[]> {
    const estoques = await this.prismaClient.produtos.findMany({
      where: {},
      select: {
        id: true,
        nome: true,
        autor: true,
        estoque: true,
      },
    });
    return estoques;
  }

  async buscarEstoquePorNome(nome: string): Promise<any[]> {
    const estoqueNome = await this.prismaClient.produtos.findMany({
      where: {
        nome: {
          contains: nome,
          mode: 'insensitive',
        },
      },
      select: {
        nome: true,
        autor: true,
        estoque: true,
      },
    });
    return estoqueNome;
  }

  async atualizaEstoque(id: string, data: UpdateEstoqueDto) {
    const estoqueExiste = await this.prismaClient.estoque.findUnique({
      where: {
        id,
      },
    });

    if (!estoqueExiste) {
      throw new NotFoundException(`O estoque de id ${id} não existe`);
    }
    data.quantidade = Number(data.quantidade);
    console.log(data)
    await this.prismaClient.estoque.update({
      data,
      where: {
        id,
      },
    });
  }

  async deletaEstoque(id: string) {
    const estoque = await this.buscaEstoquePorId(id);

    if (!estoque) {
      throw new NotFoundException('Estoque inexistente');
    }

    await this.prismaClient.estoque.delete({
      where: {
        id,
      },
    });

    return `Estoque de id ${id} excluido com sucesso!`;
  }
}
