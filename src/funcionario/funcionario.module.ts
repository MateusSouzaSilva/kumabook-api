import { Module } from '@nestjs/common';
import { FuncionarioService } from './service/funcionario.service';
import { FuncionarioController } from './controller/funcionario.controller';

@Module({
  controllers: [FuncionarioController],
  providers: [FuncionarioService]
})
export class FuncionarioModule {}
