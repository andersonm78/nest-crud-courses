import { CreateAulasbrunoDto } from './dto/create-aulasbruno.dto';
import { UpdateAulasbrunoDto } from './dto/update-aulasbruno.dto';
export declare class AulasbrunoService {
    create(createAulasbrunoDto: CreateAulasbrunoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAulasbrunoDto: UpdateAulasbrunoDto): string;
    remove(id: number): string;
}
