import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateFuncionarioDto } from '../dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from '../dto/update-funcionario.dto';

@Injectable()
export class FuncionarioService {
  constructor(private readonly prismaClient: PrismaClient) {}

  // async adicionaFuncionario(dados: CreateFuncionarioDto) {
  //   const funcionario = await this.prismaClient.funcionario.create({
  //     data: dados,
  //   });
  // }

  findAll() {
    return `This action returns all funcionario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} funcionario`;
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return `This action updates a #${id} funcionario`;
  }

  remove(id: number) {
    return `This action removes a #${id} funcionario`;
  }
}
