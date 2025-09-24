import { Injectable } from '@nestjs/common';
import { CreateAulasbrunoDto } from './dto/create-aulasbruno.dto';
import { UpdateAulasbrunoDto } from './dto/update-aulasbruno.dto';

@Injectable()
export class AulasbrunoService {
  create(createAulasbrunoDto: CreateAulasbrunoDto) {
    return 'This action adds a new aulasbruno';
  }

  findAll() {
    return `This action returns all aulasbruno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aulasbruno`;
  }

  update(id: number, updateAulasbrunoDto: UpdateAulasbrunoDto) {
    return `This action updates a #${id} aulasbruno`;
  }

  remove(id: number) {
    return `This action removes a #${id} aulasbruno`;
  }
}
