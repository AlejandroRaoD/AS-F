import { nucleoAttributes } from "@/types";
import axios from "axios";
import { useState, useEffect } from "react";
import { QueryNucleoDto } from "../dto/query-nucleo.dto";
import { API_SERVER_URL } from "@/config";

const url = `${API_SERVER_URL}/nucleo`;

interface props {
	id?: string | string[];
}

const useNucleo = (props?: props) => {
	const [nucleo, setNucleo] = useState<nucleoAttributes>();
	const [nucleos, setNucleos] = useState<nucleoAttributes[]>([]);

	const getNucleo = async (id: string) => {
		if (nucleo) return;

		const {
			data: { data },
		} = await axios.get(`${url}/${id}`);

		setNucleo(data);
	};
	useEffect(() => {
		if (!props) return;

		if (typeof props.id == "string") getNucleo(props.id);
	}, [props]);

	const getNucleos = async (query?: QueryNucleoDto) => {
		const {
			data: { data },
		} = await axios.get(url, { params: query });

		setNucleos(data);
	};

	const createNucleo = async (formData: Pick<nucleoAttributes, "name">) => {
		await axios.post(url, formData);
	};

	const updateNucleo = async (
		nucleoId: string,
		formData: Pick<nucleoAttributes, "name">
	) => {
		await axios.put(`${url}/${nucleoId}`, formData);
	};

	const deleteNucleo = async (nucleoId: string) => {
		await axios.delete(`${url}/${nucleoId}`);
	};

	return {
		nucleo,
		nucleos,
		getNucleo,
		getNucleos,
		createNucleo,
		updateNucleo,
		deleteNucleo,
	};
};

export default useNucleo;
