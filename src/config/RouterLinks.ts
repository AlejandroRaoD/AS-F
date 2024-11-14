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
};

export default RouterLinks;
