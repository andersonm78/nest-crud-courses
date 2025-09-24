import { AulasbrunoService } from './aulasbruno.service';
import { CreateAulasbrunoDto } from './dto/create-aulasbruno.dto';
import { UpdateAulasbrunoDto } from './dto/update-aulasbruno.dto';
export declare class AulasbrunoController {
    private readonly aulasbrunoService;
    constructor(aulasbrunoService: AulasbrunoService);
    create(createAulasbrunoDto: CreateAulasbrunoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAulasbrunoDto: UpdateAulasbrunoDto): string;
    remove(id: string): string;
}
