import { PaginationDto } from "@/app/common/dtos/pagination.dto";

export interface QueryStudentDto extends PaginationDto {
	name?: string;
	// nucleoId?: string;
}
