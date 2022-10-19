import { Module } from '@nestjs/common';
import { ProdutosService } from './service/produtos.service';
import { ProdutosController } from './controller/produtos.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ProdutosController],
  providers: [ProdutosService, PrismaClient]
})
export class ProdutosModule {}
