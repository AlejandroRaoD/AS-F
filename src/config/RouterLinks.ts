type IdParam = string | string[] | undefined;

const oneString = (str?: IdParam): string =>
	str ? (str instanceof Array ? str[0] : str) : "";

const RouterLinks = {
	landing: "/",
	dashboard: "/system",
	login: "/system/user/auth/login",
	register: "/system/user/auth/register",

	system_log: {
		all: "/system/system_log",
		// create: "/system/system_log/nuevo",
		// one: (id: IdParam) => `/system/system_log/${oneString(id)}`,
		// edit: (id: IdParam) => `/system/system_log/${oneString(id)}/editar`,
	},

	users: {
		all: "/system/user",
		create: "/system/user/nuevo",
		one: (id: IdParam) => `/system/user/${oneString(id)}`,
		edit: (id: IdParam) => `/system/user/${oneString(id)}/editar`,
	},

	nucleos: {
		all: "/system/nucleos",
		create: "/system/nucleos/nuevo",
		one: (id: IdParam) => `/system/nucleos/${oneString(id)}`,
		edit: (id: IdParam) => `/system/nucleos/${oneString(id)}/editar`,
	},
	sedes: {
		all: "/system/sedes",
		create: "/system/sedes/nuevo",
		one: (id: IdParam) => `/system/sedes/${oneString(id)}`,
		edit: (id: IdParam) => `/system/sedes/${oneString(id)}/editar`,
	},
	programas: {
		all: "/system/programas",
		create: "/system/programas/nuevo",
		one: (id: IdParam) => `/system/programas/${oneString(id)}`,
		edit: (id: IdParam) => `/system/programas/${oneString(id)}/editar`,
	},
	estudiantes: {
		all: "/system/estudiantes",
		create: "/system/estudiantes/nuevo",
		one: (id: IdParam) => `/system/estudiantes/${oneString(id)}`,
		edit: (id: IdParam) => `/system/estudiantes/${oneString(id)}/editar`,
		relaciones: (id: IdParam) =>
			`/system/estudiantes/${oneString(id)}/relaciones`,
	},
	representante: {
		all: "/system/representantes",
		create: "/system/representantes/nuevo",
		one: (id: IdParam) => `/system/representantes/${oneString(id)}`,
		edit: (id: IdParam) => `/system/representantes/${oneString(id)}/editar`,
	},
	catedra: {
		all: "/system/catedra",
		create: "/system/catedra/nuevo",
		one: (id: IdParam) => `/system/catedra/${oneString(id)}`,
		edit: (id: IdParam) => `/system/catedra/${oneString(id)}/editar`,
	},
	bienes: {
		all: "/system/bienes",
		create: "/system/bienes/nuevo",
		one: (id: IdParam) => `/system/bienes/${oneString(id)}`,
		edit: (id: IdParam) => `/system/bienes/${oneString(id)}/editar`,
	},
	instrument: {
		all: "/system/instrumentos",
		create: "/system/instrumentos/nuevo",
		one: (id: IdParam) => `/system/instrumentos/${oneString(id)}`,
		edit: (id: IdParam) => `/system/instrumentos/${oneString(id)}/editar`,
	},

	comodato: {
		all: "/system/comodatos",
		create: "/system/comodatos/nuevo",
		one: (id: IdParam) => `/system/comodatos/${oneString(id)}`,
		edit: (id: IdParam) => `/system/comodatos/${oneString(id)}/editar`,
	},

	enrollmentPeriod: {
		all: "/system/periodo_inscripciones",
		create: "/system/periodo_inscripciones/nuevo",
		one: (id: IdParam) => `/system/periodo_inscripciones/${oneString(id)}`,
		edit: (id: IdParam) =>
			`/system/periodo_inscripciones/${oneString(id)}/editar`,
	},
	studentEnrollment: {
		all: "/system/inscripciones",
		create: "/system/inscripciones/nuevo",
		one: (id: IdParam) => `/system/inscripciones/${oneString(id)}`,
		edit: (id: IdParam) => `/system/inscripciones/${oneString(id)}/editar`,
	},

	employee: {
		all: "/system/personal",
		create: "/system/personal/nuevo",
		one: (id: IdParam) => `/system/personal/${oneString(id)}`,
		edit: (id: IdParam) => `/system/personal/${oneString(id)}/editar`,
	},
	perfil: {
		all: "/system/perfil",
		create: "/system/perfil",
		one: (id: IdParam) => `/system/perfil/${oneString(id)}`,
		edit: (id: IdParam) => `/system/perfil/${oneString(id)}/editar`,
	},
	help: {
		all: "/system/help",
		create: "/system/help",
		one: (id: IdParam) => `/system/help/${oneString(id)}`,
		edit: (id: IdParam) => `/system/help/${oneString(id)}/editar`,
	},
	estadisticas: {
		all: "/system/estadisticas",
		create: "/system/estadisticas",
		one: (id: IdParam) => `/system/estadisticas/${oneString(id)}`,
		edit: (id: IdParam) => `/system/estadisticas/${oneString(id)}/editar`,
	},
	documentos: {
		all: "/system/documentos",
		constanciaEstudio: "/system/documentos/constEstudio",
		comodato: "/system/documentos/comodato",
		certificados: "/system/documentos/certificados",
		create: "/system/documentos/nuevo",
		one: (id: IdParam) => `/system/documentos/${oneString(id)}`,
		edit: (id: IdParam) => `/system/documentos/${oneString(id)}/editar`,
	},
};

export default RouterLinks;
