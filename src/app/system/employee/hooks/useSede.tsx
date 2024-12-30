import { CreateSedeDto, sedeAttributes } from "@/types";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_SERVER_URL } from "@/config";
import { QuerySedeDto } from "../dto/query-sede.dto";

const url = `${API_SERVER_URL}/sede`;

interface props {
	id?: string | string[];
}

const useSede = (props?: props) => {
	const [sede, setSede] = useState<sedeAttributes>();
	const [sedes, setSedes] = useState<sedeAttributes[]>([]);

	const getSede = async (id: string) => {
		if (sede) return;

		const {
			data: { data },
		} = await axios.get(`${url}/${id}`);

		setSede(data);
	};
	useEffect(() => {
		if (!props) return;

		if (typeof props.id == "string") getSede(props.id);
	}, [props]);

	const getSedes = async (query?: QuerySedeDto) => {
		const {
			data: { data },
		} = await axios.get(url, { params: query });

		setSedes(data);
	};

	const createSede = async (formData: CreateSedeDto) => {
		await axios.post(url, formData);
	};

	const updateSede = async (
		sedeId: string,
		formData: Pick<sedeAttributes, "name">
	) => {
		await axios.put(`${url}/${sedeId}`, formData);
	};

	const deleteSede = async (sedeId: string) => {
		await axios.delete(`${url}/${sedeId}`);
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
