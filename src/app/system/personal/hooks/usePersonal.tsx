{/*import { useState, useEffect } from "react";
import { QueryPersonalDto } from "../dto/query-personal.dto";
import { CreatePersonalDto } from "../dto/create-personal.dto";
import { personalAttributes } from "../interfaces/personal.interface";
import {
	createPersonal_Request,
	deletePersonal_Request,
	getPersonal_Request,
	getPersonals_Request,
	updatePersonal_Request,
} from "../api/personalApi";
import { UpdatePersonalDto } from "../dto/update-personal.dto";

interface props {
	id?: string | string[];
}

const usePersonal = (props?: props) => {
	const [personal, setPersonal] = useState<personalAttributes>();
	const [personals, setPersonals] = useState<personalAttributes[]>([]);

	const getPersonal = async (id: string) => {
		if (personal) return;

		const { data } = await getPersonal_Request(id);

		setPersonal(data);
	};

	useEffect(() => {
		if (!props) return;

		if (typeof props.id == "string") getPersonal(props.id);
	}, [props]);

	const getPersonals = async (query?: QueryPersonalDto) => {
		const { data } = await getPersonals_Request(query);

		setPersonals(data);
	};

	const createPersonal = async (formData: CreatePersonalDto) => {
		await createPersonal_Request(formData);
	};

	const updatePersonal = async (
		personalId: string,
		formData: UpdatePersonalDto
	) => {
		await updatePersonal_Request(personalId, formData);
	};

	const deletePersonal = async (personalId: string) => {
		try {
			await deletePersonal_Request(personalId);

			setPersonals((items) => items.filter((item) => item._id != personalId));
		} catch (error) {
			console.error("Error eliminando personal:", error);
		}
	};

	return {
		personal,
		personals,
		getPersonal,
		getPersonals,
		createPersonal,
		updatePersonal,
		deletePersonal,
	};
};

export default usePersonal; */}
