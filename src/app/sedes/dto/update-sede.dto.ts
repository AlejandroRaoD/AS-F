import { CreateSedeDto } from "./create-sede.dto";

export interface UpdateSedeDto
	extends Partial<Omit<CreateSedeDto, "nucleoId">> {}
