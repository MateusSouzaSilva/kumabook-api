import { Injectable } from '@nestjs/common';
import { Estoque, PrismaClient } from '@prisma/client';
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

    async buscarTodoEstoque(): Promise<Estoque[]> {
        const estoques = await this.prismaClient.estoque.findMany({
            where: {},
        });
        return estoques;
    }

    async buscarEstoqueDetalhado(id: string): Promise<any[]> {
        const estoques = await this.prismaClient.produtos.findMany({
            where: {
                id,
            },
            select: {
                nome: true
            }
        });
        return estoques;
    }
    }
