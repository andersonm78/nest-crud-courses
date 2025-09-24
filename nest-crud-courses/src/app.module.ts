import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { AulasbrunoModule } from './aulasbruno/aulasbruno.module';

@Module({
  imports: [CoursesModule, AulasbrunoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
