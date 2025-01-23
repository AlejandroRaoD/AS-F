
export enum EnrollmentPeriodStatus {
	active = "a",
	inArchive = "ar",
	delete = "d",
}

export interface enrollmentPeriodAttributes {
	_id: string;
	year: Number;
	step: Number;
	status: EnrollmentPeriodStatus;
}
