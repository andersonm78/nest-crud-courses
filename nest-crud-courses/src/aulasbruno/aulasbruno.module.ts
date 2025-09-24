import { Module } from '@nestjs/common';
import { AulasbrunoService } from './aulasbruno.service';
import { AulasbrunoController } from './aulasbruno.controller';

@Module({
  controllers: [AulasbrunoController],
  providers: [AulasbrunoService],
})
export class AulasbrunoModule {}
