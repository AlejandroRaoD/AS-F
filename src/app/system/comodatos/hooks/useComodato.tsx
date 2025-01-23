import { useState, useEffect } from "react";
import {
	createComodato_Request,
	deleteComodato_Request,
	getComodato_Request,
	getComodatos_Request,
	updateComodato_Request,
} from "../api/comodatoApi";
import { QueryComodatoDto } from "../dto/query-comodato.dto";
import { CreateComodatoDto } from "../dto/create-comodato.dto";
import { UpdateComodatoDto } from "../dto/update-comodato.dto";
import { ComodatoAttributes } from "../interfaces/comodato.interface";

interface props {
	id?: string | string[];
	query?: QueryComodatoDto;
}

const useComodato = (props?: props) => {
	const [comodato, setComodato] = useState<ComodatoAttributes>();
	const [comodatos, setComodatos] = useState<ComodatoAttributes[]>([]);

	const [alreadyQuery, setAlreadyQuery] = useState(false);

	const getComodato = async (id: string) => {
		if (comodato) return;

		const { data } = await getComodato_Request(id);

		setComodato(data);
	};

	useEffect(() => {
		if (alreadyQuery) return;

		if (!props) return;

		if (typeof props.id == "string") getComodato(props.id);

		if (props.query && !comodatos.length) getComodatos(props.query);

		setAlreadyQuery(true);
	}, [props]);

	const getComodatos = async (query?: QueryComodatoDto) => {
		const { data } = await getComodatos_Request(query);

		setComodatos(data);
	};

	const createComodato = async (formData: CreateComodatoDto) => {
		await createComodato_Request(formData);
	};

	const updateComodato = async (
		comodatoId: string,
		formData: UpdateComodatoDto
	) => {
		await updateComodato_Request(comodatoId, formData);
	};

	const deleteComodato = async (comodatoId: string) => {
		try {
			await deleteComodato_Request(comodatoId);

			setComodatos((items) => items.filter((item) => item._id != comodatoId));
		} catch (error) {}
	};

	return {
		comodato,
		comodatos,
		getComodato,
		getComodatos,
		createComodato,
		updateComodato,
		deleteComodato,
	};
};

export default useComodato;
