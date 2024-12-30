import { PaginationDto } from "@/app/common/dtos/pagination.dto";

export interface QueryNucleoDto extends PaginationDto {
	name?: string;
}
