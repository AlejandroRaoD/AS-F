{/*import { catedraAttributes } from "@/types";
import axios from "axios";
import { useState, useEffect } from "react";
import { QueryCatedraDto } from "../dto/query-catedra.dto";
import { API_SERVER_URL } from "@/config";

const url = `${API_SERVER_URL}/catedra`;

interface props {
	id?: string | string[];
}

const useCatedra = (props?: props) => {
	const [catedra, setCatedra] = useState<catedraAttributes>();
	const [catedras, setCatedras] = useState<catedraAttributes[]>([]);

	const getCatedra = async (id: string) => {
		if (catedra) return;

		const {
			data: { data },
		} = await axios.get(`${url}/${id}`);

		setCatedra(data);
	};

	useEffect(() => {
		if (!props) return;

		if (typeof props.id === "string") getCatedra(props.id);
	}, [props]);

	const getCatedras = async (query?: QueryCatedraDto) => {
		const {
			data: { data },
		} = await axios.get(url, { params: query });

		setCatedras(data);
	};

	const createCatedra = async (formData: Pick<catedraAttributes, "name">) => {
		await axios.post(url, formData);
	};

	const updateCatedra = async (
		catedraId: string,
		formData: Pick<catedraAttributes, "name">
	) => {
		await axios.put(`${url}/${catedraId}`, formData);
	};

	const deleteCatedra = async (catedraId: string) => {
		await axios.delete(`${url}/${catedraId}`);
	};

	return {
		catedra,
		catedras,
		getCatedra,
		getCatedras,
		createCatedra,
		updateCatedra,
		deleteCatedra,
	};
};

export default useCatedra;*/}
