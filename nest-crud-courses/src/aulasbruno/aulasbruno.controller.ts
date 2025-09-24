import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AulasbrunoService } from './aulasbruno.service';
import { CreateAulasbrunoDto } from './dto/create-aulasbruno.dto';
import { UpdateAulasbrunoDto } from './dto/update-aulasbruno.dto';

@Controller('aulasbruno')
export class AulasbrunoController {
  constructor(private readonly aulasbrunoService: AulasbrunoService) {}

  @Post()
  create(@Body() createAulasbrunoDto: CreateAulasbrunoDto) {
    return this.aulasbrunoService.create(createAulasbrunoDto);
  }

  @Get()
  findAll() {
    return this.aulasbrunoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aulasbrunoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAulasbrunoDto: UpdateAulasbrunoDto) {
    return this.aulasbrunoService.update(+id, updateAulasbrunoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aulasbrunoService.remove(+id);
  }
}
