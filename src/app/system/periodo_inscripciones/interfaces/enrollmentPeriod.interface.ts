
export enum EnrollmentPeriodStatus {
	active = "a",
	inArchive = "ar",
	delete = "d",
}

export interface enrollmentPeriodAttributes {
	_id: string;
	year: number;
	step: number;
	status: EnrollmentPeriodStatus;
}
