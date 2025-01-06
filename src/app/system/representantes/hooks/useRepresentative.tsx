import axios from "axios";
import { useState, useEffect } from "react";
import { API_SERVER_URL } from "@/config";
import { QueryRepresentativeDto } from "../dto/query-representative.dto";
import { CreateRepresentativeDto } from "../dto/create-representative.dto";
import { UpdateRepresentativeDto } from "../dto/update-representative.dto";
import { representativeAttributes } from "../interfaces/representative.interface";

const url = `${API_SERVER_URL}/representative`;

interface props {
	id?: string | string[];
}

const useRepresentative = (props?: props) => {
	const [representative, setRepresentative] =
		useState<representativeAttributes>();
	const [representatives, setRepresentatives] = useState<
		representativeAttributes[]
	>([]);

	const getRepresentative = async (id: string) => {
		if (representative) return;

		const {
			data: { data },
		} = await axios.get(`${url}/${id}`);

		setRepresentative(data);
	};
	useEffect(() => {
		if (!props) return;

		if (typeof props.id == "string") getRepresentative(props.id);
	}, [props]);

	const getRepresentatives = async (query?: QueryRepresentativeDto) => {
		const {
			data: { data },
		} = await axios.get(url, { params: query });

		setRepresentatives(data);

		return data;
	};

	const createRepresentative = async (formData: CreateRepresentativeDto) => {
		await axios.post(url, formData);
	};

	const updateRepresentative = async (
		representativeId: string,
		formData: UpdateRepresentativeDto
	) => {
		await axios.put(`${url}/${representativeId}`, formData);
	};

	const deleteRepresentative = async (representativeId: string) => {
		await axios.delete(`${url}/${representativeId}`);
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
