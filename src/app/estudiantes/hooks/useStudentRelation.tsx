import axios from "axios";
import { useState, useEffect } from "react";
import { API_SERVER_URL } from "@/config";
import { studentRepresentativeAttributes } from "../interfaces/studentRepresentative.interface";
import { QueryStudentRepresentativeDto } from "../dto/query-student-representative.dto";
import { CreateStudentRepresentativeDto } from "../dto/create-student-representative.dto";
import { UpdateStudentRepresentativeDto } from "../dto/update-student-representative.dto";
import {
	createStudentRelation_request,
	getStudentRelation_request,
	getStudentRelations_request,
	updateStudentRelation_request,
} from "../api/studentRelationApi";

const url = `${API_SERVER_URL}/student/relation`;

interface props {
	id?: string | string[];
}

const useStudentRelation = (props?: props) => {
	const [studentRelation, setStudentRelation] =
		useState<studentRepresentativeAttributes>();
	const [studentRelations, setStudentRelations] = useState<
		studentRepresentativeAttributes[]
	>([]);

	const getStudentRelation = async (id: string) => {
		if (studentRelation) return;

		const {
			data: { data },
		} = await getStudentRelation_request(id);

		setStudentRelation(data);
	};
	useEffect(() => {
		if (!props) return;

		if (typeof props.id == "string") getStudentRelation(props.id);
	}, [props]);

	const getStudentRelations = async (query?: QueryStudentRepresentativeDto) => {
		const {
			data: { data },
		} = await getStudentRelations_request(query);

		setStudentRelations(data);
	};

	const createStudentRelation = async (
		formData: CreateStudentRepresentativeDto
	) => {
		await createStudentRelation_request(formData);
	};

	const updateStudentRelation = async (
		studentRelationId: string,
		formData: UpdateStudentRepresentativeDto
	) => {
		await updateStudentRelation_request(studentRelationId, formData);
	};

	const deleteStudentRelation = async (studentRelationId: string) => {
		await deleteStudentRelation(studentRelationId);
	};

	return {
		studentRelation,
		studentRelations,
		getStudentRelation,
		getStudentRelations,
		createStudentRelation,
		updateStudentRelation,
		deleteStudentRelation,
	};
};

export default useStudentRelation;
