import { useState, useEffect } from "react";
import { QueryProgramaDto } from "../dto/query-programa.dto";
import { CreateProgramaDto } from "../dto/create-programa.dto";
import { programaAttributes } from "../interfaces/programa.interface";
import {
	createPrograma_Request,
	deletePrograma_Request,
	getPrograma_Request,
	getProgramas_Request,
	updatePrograma_Request,
} from "../api/programaApi";
import { UpdateProgramaDto } from "../dto/update-programa.dto";

interface props {
	id?: string | string[];
}

const usePrograma = (props?: props) => {
	const [programa, setPrograma] = useState<programaAttributes>();
	const [programas, setProgramas] = useState<programaAttributes[]>([]);

	const getPrograma = async (id: string) => {
		if (programa) return;

		const { data } = await getPrograma_Request(id);

		setPrograma(data);
	};
	useEffect(() => {
		if (!props) return;

		if (typeof props.id == "string") getPrograma(props.id);
	}, [props]);

	const getProgramas = async (query?: QueryProgramaDto) => {
		const { data } = await getProgramas_Request(query);

		setProgramas(data);

		return data;
	};

	const createPrograma = async (formData: CreateProgramaDto) => {
		await createPrograma_Request(formData);
	};

	const updatePrograma = async (
		programaId: string,
		formData: UpdateProgramaDto
	) => {
		await updatePrograma_Request(programaId, formData);
	};

	const deletePrograma = async (programaId: string) => {
		try {
			await deletePrograma_Request(programaId);

			setProgramas((items) => items.filter((item) => item._id != programaId));
		} catch (error) {}
	};

	return {
		programa,
		programas,
		getPrograma,
		getProgramas,
		createPrograma,
		updatePrograma,
		deletePrograma,
	};
};

export default usePrograma;
