import { PaginationDto } from "@/app/common/dtos/pagination.dto";

export interface QueryInstrumentDto extends PaginationDto {
	name?: string;
	lastname?: string;
	birthday?: string;
	CI?: string;
	email?: string;
	gender?: string;
	address?: string;
	phone_number?: string;
	businessPosition?: string;
	sedeId?: string;
}
