import { nucleoAttributes } from "@/types";
import axios from "axios";
import { useState, useEffect } from "react";

// ?name=&skip=0&limit=10

const url = "http://localhost:5000/api/nucleo";

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

	const getNucleos = async () => {
		const {
			data: { data },
		} = await axios.get(url);

		setNucleos(data);
	};

	const createNucleo = async (formData: Pick<nucleoAttributes, "name">) => {
		const {
			data: { data },
		} = await axios.post(url, formData);

		setNucleos((value) => [data, ...value]);
	};

	const updateNucleo = async (formData: Pick<nucleoAttributes, "name">) => {
		// const {
		// 	data: { data },
		// } =

		await axios.put(url, formData);

		// setNucleos((value) => [data, ...value]);
	};

	return { nucleo, nucleos, getNucleo, getNucleos, createNucleo, updateNucleo };
};

export default useNucleo;
