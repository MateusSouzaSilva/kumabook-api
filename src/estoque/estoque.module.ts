import { Module } from '@nestjs/common';
import { EstoqueService } from './service/estoque.service';
import { EstoqueController } from './controller/estoque.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [EstoqueController],
  providers: [EstoqueService, PrismaClient]
})
export class EstoqueModule {}
