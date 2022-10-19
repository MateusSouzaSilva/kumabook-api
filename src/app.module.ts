import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';


@Module({
  imports: [ConfigModule.forRoot(), 
    ProdutosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
