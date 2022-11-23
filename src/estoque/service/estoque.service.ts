import { Injectable, NotFoundException } from '@nestjs/common';
import { Estoque, PrismaClient } from '@prisma/client';
import { UpdateEstoqueDto } from 'src/estoque/dto/update-estoque.dto';
import { Produto } from 'src/produtos/entities/produto.entity';
import { CreateEstoqueDto } from '../dto/create-estoque.dto';

@Injectable()
export class EstoqueService {
    constructor(private readonly prismaClient: PrismaClient) {}

    async cadastrarEstoque(dados: CreateEstoqueDto): Promise<any> {
        const estoque = await this.prismaClient.estoque.create({
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
                produtos: true
            }
            
            });
            
        }

    async buscarTodoEstoque(): Promise<any[]> {
        const estoques = await this.prismaClient.produtos.findMany({
            where: {},select: {
                nome: true,
                autor: true,
                estoque: true,
            }
        });
        return estoques;
    }

    async buscarEstoquePorNome(nome: string): Promise<any[]> {
        const estoqueNome = await this.prismaClient.produtos.findMany({
            where: {
                nome: {
                    contains: nome,
                }
            },
            select: {
                nome: true,
                autor: true,
                estoque: true,
            }
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

        await this.prismaClient.estoque.update({
            data,
            where: {
                id,
            },
        });
    }
    }
