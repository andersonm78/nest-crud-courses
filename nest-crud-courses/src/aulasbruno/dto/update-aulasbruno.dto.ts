import { PartialType } from '@nestjs/swagger';
import { CreateAulasbrunoDto } from './create-aulasbruno.dto';

export class UpdateAulasbrunoDto extends PartialType(CreateAulasbrunoDto) {}
