import { nucleoAttributes } from "@/types";
import axios from "axios";
import { useState, useEffect } from "react";
import { QueryNucleoDto } from "../dto/query-nucleo.dto";
import { API_SERVER_URL } from "@/config";
import {
	createNucleo_Request,
	deleteNucleo_Request,
	getNucleo_Request,
	getNucleos_Request,
	updateNucleo_Request,
} from "../api/nucleo.api";
import { CreateNucleoDto } from "../dto/create-nucleo.dto";
import { UpdateNucleoDto } from "../dto/update-nucleo.dto";

interface props {
	id?: string | string[];
}

const useNucleo = (props?: props) => {
	const [nucleo, setNucleo] = useState<nucleoAttributes>();
	const [nucleos, setNucleos] = useState<nucleoAttributes[]>([]);

	const getNucleo = async (id: string) => {
		if (nucleo) return;

		const { data } = await getNucleo_Request(id);

		setNucleo(data);
	};

	useEffect(() => {
		if (!props) return;

		if (typeof props.id == "string") getNucleo(props.id);
	}, [props]);

	const getNucleos = async (query?: QueryNucleoDto) => {
		const { data } = await getNucleos_Request(query);

		setNucleos(data);
	};

	const createNucleo = async (formData: CreateNucleoDto) => {
		await createNucleo_Request(formData);
	};

	const updateNucleo = async (nucleoId: string, formData: UpdateNucleoDto) => {
		await updateNucleo_Request(nucleoId, formData);
	};

	const deleteNucleo = async (nucleoId: string) => {
		await deleteNucleo_Request(nucleoId);
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
