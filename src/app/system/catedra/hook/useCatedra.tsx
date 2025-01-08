import { useState, useEffect } from "react";
import { QueryCatedraDto } from "../dto/query-catedra.dto";
import { CreateCatedraDto } from "../dto/create-catedra.dto";
import { catedraAttributes } from "../interfaces/catedra.interface";
import {
	createCatedra_Request,
	deleteCatedra_Request,
	getCatedra_Request,
	getCatedras_Request,
	updateCatedra_Request,
} from "../api/catedraApi";
import { UpdateCatedraDto } from "../dto/update-catedra.dto";

interface props {
	id?: string | string[];
}

const useCatedra = (props?: props) => {
	const [catedra, setCatedra] = useState<catedraAttributes>();
	const [catedras, setCatedras] = useState<catedraAttributes[]>([]);

	const getCatedra = async (id: string) => {
		if (catedra) return;

		const { data } = await getCatedra_Request(id);

		setCatedra(data);
	};
	useEffect(() => {
		if (!props) return;

		if (typeof props.id == "string") getCatedra(props.id);
	}, [props]);

	const getCatedras = async (query?: QueryCatedraDto) => {
		const { data } = await getCatedras_Request(query);

		setCatedras(data);
	};

	const createCatedra = async (formData: CreateCatedraDto) => {
		await createCatedra_Request(formData);
	};

	const updateCatedra = async (
		catedraId: string,
		formData: UpdateCatedraDto
	) => {
		await updateCatedra_Request(catedraId, formData);
	};

	const deleteCatedra = async (catedraId: string) => {
		try {
			await deleteCatedra_Request(catedraId);

			setCatedras((items) => items.filter((item) => item._id != catedraId));
		} catch (error) {}
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

export default useCatedra;
