import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { UpdateProdutoDto } from '../dto/update-produto.dto';
import { Produto } from '../entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async adicionaProduto(dados: CreateProdutoDto) {
    const produto = await this.prismaClient.produtos.create({
      data: dados,
    });
  }

  async buscaTodosProdutos(): Promise<Produto[]> {
    const produtos = await this.prismaClient.produtos.findMany();
    return produtos;
  }

  async buscaProdutoPorId(id: number): Promise<Produto> {
    const produto = await this.prismaClient.produtos.findFirst({
      where: {
        id,
      },
    });
    return produto;
  }

  async atualizaProduto(id: number, data: UpdateProdutoDto) {
    const produtoExiste = await this.prismaClient.produtos.findUnique({
      where: {
        id,
      },
    });

    if (!produtoExiste) {
      throw new NotFoundException(`O Produto de id ${id} não existe`);
    }

    await this.prismaClient.produtos.update({
      data,
      where: {
        id,
      },
    });

    return `Produto de id ${id} atualizado com sucesso!`;
  }

  async deletaProduto(id: number) {
    const produto = await this.buscaProdutoPorId(id);

    if (!produto) {
      throw new NotFoundException('Produto não existe');
    }

    await this.prismaClient.produtos.delete({
      where: {
        id,
      },
    });

    return `Produto de id ${id} excluido com sucesso!`;
  }
}
