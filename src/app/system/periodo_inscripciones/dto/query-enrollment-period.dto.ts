import { PaginationDto } from "@/app/common/dtos/pagination.dto";

export interface QueryEnrollmentPeriodDto extends PaginationDto {
	year?: number;
	step?: number;
}
