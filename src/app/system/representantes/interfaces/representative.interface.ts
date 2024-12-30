import { Gender, Nationality } from "@/app/common/interfaces/enums";

export interface representativeAttributes {
	_id: string;
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
