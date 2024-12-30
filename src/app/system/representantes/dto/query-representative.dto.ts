import { PaginationDto } from "@/app/common/dtos/pagination.dto";

export interface QueryRepresentativeDto extends PaginationDto {
	name?: string;
	CI?: string;
	// nucleoId?: string;
}
