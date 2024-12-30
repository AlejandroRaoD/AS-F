import { PaginationDto } from "@/app/common/dtos/pagination.dto";

export interface QuerySedeDto extends PaginationDto {
	name?: string;
	nucleoId?: string;
}
