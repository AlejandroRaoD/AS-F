export interface EnrollmentContent {
	catedraId: string;
	comodatoId: string | null;
}

export interface studentEnrollmentAttributes {
	_id: string;
	studentId: string;
	enrollmentPeriodId: string;
	sedeId: string;
	content: EnrollmentContent[];
}
