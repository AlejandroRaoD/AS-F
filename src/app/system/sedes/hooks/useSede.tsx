import { sedeAttributes } from "@/types";
import { useState, useEffect } from "react";
import { QuerySedeDto } from "../dto/query-sede.dto";
import {
	createSede_Request,
	deleteSede_Request,
	getSede_Request,
	getSedes_Request,
	updateSede_Request,
} from "../api/sede.api";
import { UpdateSedeDto } from "../dto/update-sede.dto";
import { CreateSedeDto } from "../dto/create-sede.dto";

interface props {
	id?: string | string[];
	query?: QuerySedeDto;
}

const useSede = (props?: props) => {
	const [sede, setSede] = useState<sedeAttributes>();
	const [sedes, setSedes] = useState<sedeAttributes[]>([]);

	const [alreadyQuery, setAlreadyQuery] = useState(false);

	const getSede = async (id: string) => {
		if (sede) return;

		const { data } = await getSede_Request(id);

		setSede(data);
	};

	useEffect(() => {
		if (alreadyQuery) return;

		if (!props) return;

		if (typeof props.id == "string") getSede(props.id);

		if (props.query && !sedes.length) getSedes(props.query);

		setAlreadyQuery(true);
	}, [props]);

	const getSedes = async (query?: QuerySedeDto) => {
		const { data } = await getSedes_Request(query);

		setSedes(data);

		return data
	};

	const createSede = async (formData: CreateSedeDto) => {
		await createSede_Request(formData);
	};

	const updateSede = async (sedeId: string, formData: UpdateSedeDto) => {
		await updateSede_Request(sedeId, formData);
	};

	const deleteSede = async (sedeId: string) => {
		await deleteSede_Request(sedeId);
	};

	return {
		sede,
		sedes,
		getSede,
		getSedes,
		createSede,
		updateSede,
		deleteSede,
	};
};

export default useSede;
