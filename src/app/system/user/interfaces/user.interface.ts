import { employeeAttributes } from "../../personal/interfaces/employee.interface";

export enum UserPermissions {
	estadisticas = "Ver estadisticas",
	// estadisticasEdit = "Editar estadisticas",
	personal = "Ver personal",
	personalEdit = "Editar personal",
	representantes = "Ver representantes",
	representantesEdit = "Editar representantes",
	estudiantes = "Ver estudiantes",
	estudiantesEdit = "Editar estudiantes",
	comodatos = "Ver comodatos",
	comodatosEdit = "Editar comodatos",
	periodos = "Ver periodos",
	periodosEdit = "Editar periodos",
	inscripciones = "Ver inscripciones",
	inscripcionesEdit = "Editar inscripciones",
	nucleos = "Ver nucleos",
	nucleosEdit = "Editar nucleos",
	sedes = "Ver sedes",
	sedesEdit = "Editar sedes",
	programa = "Ver programa",
	programaEdit = "Editar programa",
	catedra = "Ver catedra",
	catedraEdit = "Editar catedra",
	bienes = "Ver bienes",
	bienesEdit = "Editar bienes",
	instrumentos = "Ver instrumentos",
	instrumentosEdit = "Editar instrumentos",
	users = "vista de usuarios",
	usersEdit = "Editar de usuarios",
	documentos = "documentos",
	documentosEdit = "Editar",
	edit = "editar",
	logs = "registros de actividades",
}

export interface UserAttributes {
	_id: string;
	email: string;
	password: string;
	permissions: UserPermissions[];
	employeeId: string;
}

export interface UserLoggedAttributes {
	_id: string;
	email: string;
	permissions: UserPermissions[];
	employeeId: employeeAttributes;
}
