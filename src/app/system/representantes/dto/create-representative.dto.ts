import { Gender, Nationality } from "@/app/common/interfaces/enums";

export interface CreateRepresentativeDto {
	name: string;
	lastname: string;
	birthday: Date;
	nationality: Nationality;
	CI: string;
	email: string;
	gender: Gender;
	address: string;
	phone_number: string[];
	job: string;
}
