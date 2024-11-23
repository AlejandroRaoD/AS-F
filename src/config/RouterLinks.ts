type IdParam = string | string[] | undefined;

const oneString = (str?: IdParam): string =>
	str ? (str instanceof Array ? str[0] : str) : "";

const RouterLinks = {
	dashboard: "/",
	nucleos: {
		all: "/nucleos",
		create: "/nucleos/nuevo",
		one: (id: IdParam) => `/nucleos/${oneString(id)}`,
		edit: (id: IdParam) => `/nucleos/${oneString(id)}/editar`,
	},
	sedes: {
		all: "/sedes",
		create: "/sedes/nuevo",
		one: (id: IdParam) => `/sedes/${oneString(id)}`,
		edit: (id: IdParam) => `/sedes/${oneString(id)}/editar`,
	},
	programas: {
		all: "/programas",
		create: "/programas/nuevo",
		one: (id: IdParam) => `/programas/${oneString(id)}`,
		edit: (id: IdParam) => `/programas/${oneString(id)}/editar`,
	},
	estudiantes: {
		all: "/estudiantes",
		create: "/estudiantes/nuevo",
		one: (id: IdParam) => `/estudiantes/${oneString(id)}`,
		edit: (id: IdParam) => `/estudiantes/${oneString(id)}/editar`,
	},
	bienes: {
		all: "/bienes",
		create: "/bienes/nuevo",
		one: (id: IdParam) => `/bienes/${oneString(id)}`,
		edit: (id: IdParam) => `/bienes/${oneString(id)}/editar`,
	},
	personal: {
		all: "/personal",
		create: "/personal/nuevo",
		one: (id: IdParam) => `/personal/${oneString(id)}`,
		edit: (id: IdParam) => `/personal/${oneString(id)}/editar`,
	},
	perfil: {
		all: "/perfil",
		create: "/perfil",
		one: (id: IdParam) => `/perfil/${oneString(id)}`,
		edit: (id: IdParam) => `/perfil/${oneString(id)}/editar`,
	},
};

export default RouterLinks;
