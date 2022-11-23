import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { EstoqueModule } from './estoque/estoque.module';


@Module({
  imports: [ConfigModule.forRoot(), 
    ProdutosModule, EstoqueModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
