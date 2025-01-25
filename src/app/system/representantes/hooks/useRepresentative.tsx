import { useState, useEffect } from "react";
import { QueryRepresentativeDto } from "../dto/query-representative.dto";
import { CreateRepresentativeDto } from "../dto/create-representative.dto";
import { UpdateRepresentativeDto } from "../dto/update-representative.dto";
import { representativeAttributes } from "../interfaces/representative.interface";
import {
	createRepresentative_Request,
	deleteRepresentative_Request,
	getRepresentative_Request,
	getRepresentatives_Request,
	updateRepresentative_Request,
} from "../api/representativeApi";

interface props {
	id?: string | string[];
	query?: QueryRepresentativeDto;
}

const useRepresentative = (props?: props) => {
	const [representative, setRepresentative] =
		useState<representativeAttributes>();
	const [representatives, setRepresentatives] = useState<
		representativeAttributes[]
	>([]);

	const [alreadyQuery, setAlreadyQuery] = useState(false);

	const getRepresentative = async (id: string) => {
		if (representative) return;

		const { data } = await getRepresentative_Request(id);

		setRepresentative(data);

		return data;
	};

	useEffect(() => {
		if (alreadyQuery) return;
		if (!props) return;

		if (typeof props.id == "string") getRepresentative(props.id);

		if (props.query && !representatives.length) getRepresentatives(props.query);

		setAlreadyQuery(true);
	}, [props]);

	const getRepresentatives = async (query?: QueryRepresentativeDto) => {
		const { data } = await getRepresentatives_Request(query);

		setRepresentatives(data);

		return data;
	};

	const createRepresentative = async (formData: CreateRepresentativeDto) => {
		await createRepresentative_Request(formData);
	};

	const updateRepresentative = async (
		representativeId: string,
		formData: UpdateRepresentativeDto
	) => {
		await updateRepresentative_Request(representativeId, formData);
	};

	const deleteRepresentative = async (representativeId: string) => {
		await deleteRepresentative_Request(representativeId);
	};

	return {
		representative,
		representatives,
		getRepresentative,
		getRepresentatives,
		createRepresentative,
		updateRepresentative,
		deleteRepresentative,
	};
};

export default useRepresentative;
