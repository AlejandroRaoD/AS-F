import { useState } from "react";

const useProgramas = () => {
	const [programas, setProgramas] = useState([]);

	const getProgramas = async (params: { limit: number }) => {
		// Simulando una llamada a API
		const response = await fetch(`/api/programas?limit=${params.limit}`);
		const data = await response.json();
		setProgramas(data);
	};

	return {
		programas,
		getProgramas,
	};
};

export default useProgramas;
