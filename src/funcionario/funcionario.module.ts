import { Module } from '@nestjs/common';
import { FuncionarioService } from './service/funcionario.service';
import { FuncionarioController } from './controller/funcionario.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [FuncionarioController],
  providers: [FuncionarioService, PrismaClient],
})
export class FuncionarioModule {}
