export enum moduleItems {
	nucleo = "nucleo",
	user = "usuario",
	sede = "sede",
	employee = "empleado",
	programa = "programa",
	catedra = "catedra",
	fiam = "fiam",
	student = "estudiante",
	representative = "representante",
	studentRepresentative = "relacion",
	furniture = "inventario",
	instrument = "intrumento",
	comodato = "comodato",
	enrollmentPeriod = "periodo de inscripcion",
	studentEnrollment = "inscripcion de estudiante",
}

export enum SystemAction {
	login = "login",
	create = "create",
	edit = "edit",
	update = "update",
	delete = "delete",
}

export interface systemLogAttributes {
	_id: string;
	userId: string;
	userEmail: string;
	systemAction: SystemAction;
	moduleItem?: moduleItems | null;
	itemId?: string | null;
	text?: string | null;
	createdAt: string;
	updatedAt: string;
}
