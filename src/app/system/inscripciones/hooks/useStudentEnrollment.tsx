import { useState, useEffect } from "react";
import {
	createStudentEnrollment_Request,
	deleteStudentEnrollment_Request,
	getStudentEnrollment_Request,
	getStudentEnrollments_Request,
	updateStudentEnrollment_Request,
} from "../api/studentEnrollmentApi";
import { QueryStudentEnrollmentDto } from "../dto/query-student-enrollment.dto";
import { studentEnrollmentAttributes } from "../interfaces/studentEnrollment.interface";
import { UpdateStudentEnrollmentDto } from "../dto/update-student-enrollment.dto";
import { CreateStudentEnrollmentDto } from "../dto/create-student-enrollment.dto";

interface props {
	id?: string | string[];
	query?: QueryStudentEnrollmentDto;
}

const useStudentEnrollment = (props?: props) => {
	const [studentEnrollment, setStudentEnrollment] = useState<studentEnrollmentAttributes>();
	const [studentEnrollments, setStudentEnrollments] = useState<studentEnrollmentAttributes[]>([]);

	const [alreadyQuery, setAlreadyQuery] = useState(false);

	const getStudentEnrollment = async (id: string) => {
		if (studentEnrollment) return;

		const { data } = await getStudentEnrollment_Request(id);

		setStudentEnrollment(data);
	};

	useEffect(() => {
		if (alreadyQuery) return;

		if (!props) return;

		if (typeof props.id == "string") getStudentEnrollment(props.id);

		if (props.query && !studentEnrollments.length) getStudentEnrollments(props.query);

		setAlreadyQuery(true);
	}, [props]);

	const getStudentEnrollments = async (query?: QueryStudentEnrollmentDto) => {
		const { data } = await getStudentEnrollments_Request(query);

		setStudentEnrollments(data);
	};

	const createStudentEnrollment = async (formData: CreateStudentEnrollmentDto) => {
		await createStudentEnrollment_Request(formData);
	};

	const updateStudentEnrollment = async (
		studentEnrollmentId: string,
		formData: UpdateStudentEnrollmentDto
	) => {
		await updateStudentEnrollment_Request(studentEnrollmentId, formData);
	};

	const deleteStudentEnrollment = async (studentEnrollmentId: string) => {
		try {
			await deleteStudentEnrollment_Request(studentEnrollmentId);

			setStudentEnrollments((items) => items.filter((item) => item._id != studentEnrollmentId));
		} catch (error) {}
	};

	return {
		studentEnrollment,
		studentEnrollments,
		getStudentEnrollment,
		getStudentEnrollments,
		createStudentEnrollment,
		updateStudentEnrollment,
		deleteStudentEnrollment,
	};
};

export default useStudentEnrollment;
