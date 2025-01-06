import { useState, useEffect } from "react";
import { studentRelationAllDataAttributes } from "../interfaces/studentRepresentative.interface";

import {
	createStudentRelation_Request,
	deleteStudentRelation_Request,
	getStudentRelations_Request,
	updateStudentRelation_Request,
} from "../api/studentRelationApi";

import { QueryStudentRelationDto } from "../dto/query-student-relation.dto";
import { UpdateStudentRelationDto } from "../dto/update-student-relation.dto";
import { CreateStudentRelationDto } from "../dto/create-student-relation.dto";

interface props {
	query?: QueryStudentRelationDto;
}

const useStudentRelation = (props?: props) => {
	const [studentRelations, setStudentRelations] = useState<
		studentRelationAllDataAttributes[]
	>([]);

	const getStudentRelations = async (query?: QueryStudentRelationDto) => {
		const { data } = await getStudentRelations_Request(query);

		setStudentRelations(data);
	};

	useEffect(() => {
		if (!props) return;

		if (props.query) {
			if (studentRelations.length) return;
			getStudentRelations(props.query);
		}
	}, [props]);

	const createStudentRelation = async (formData: CreateStudentRelationDto) => {
		await createStudentRelation_Request(formData);
	};

	const updateStudentRelation = async (
		studentId: string,
		formData: UpdateStudentRelationDto
	) => {
		await updateStudentRelation_Request(studentId, formData);
	};

	const deleteStudentRelation = async (studentId: string) => {
		try {
			await deleteStudentRelation_Request(studentId);

			setStudentRelations((items) =>
				items.filter((item) => item._id != studentId)
			);
		} catch (error) {}
	};

	return {
		studentRelations,
		getStudentRelations,
		createStudentRelation,
		updateStudentRelation,
		deleteStudentRelation,
	};
};

export default useStudentRelation;
