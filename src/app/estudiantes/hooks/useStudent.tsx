import { useState, useEffect } from "react";
import { QueryStudentDto } from "../dto/query-student.dto";
import { CreateStudentDto } from "../dto/create-student.dto";
import { UpdateStudentDto } from "../dto/update-student.dto";
import { studentAttributes } from "../interfaces/student.interface";
import {
	createStudent_request,
	deleteStudent_request,
	getStudent_request,
	getStudents_request,
	updateStudent_request,
} from "../api/studentApi";

interface props {
	id?: string | string[];
}

const useStudent = (props?: props) => {
	const [student, setStudent] = useState<studentAttributes>();
	const [students, setStudents] = useState<studentAttributes[]>([]);

	const getStudent = async (id: string) => {
		if (student) return;

		const {
			data: { data },
		} = await getStudent_request(id);

		setStudent(data);
	};
	useEffect(() => {
		if (!props) return;

		if (typeof props.id == "string") getStudent(props.id);
	}, [props]);

	const getStudents = async (query?: QueryStudentDto) => {
		const {
			data: { data },
		} = await getStudents_request(query);

		setStudents(data);
	};

	const createStudent = async (formData: CreateStudentDto) => {
		await createStudent_request(formData);
	};

	const updateStudent = async (
		studentId: string,
		formData: UpdateStudentDto
	) => {
		await updateStudent_request(studentId, formData);
	};

	const deleteStudent = async (studentId: string) => {
		await deleteStudent_request(studentId);
	};

	return {
		student,
		students,
		getStudent,
		getStudents,
		createStudent,
		updateStudent,
		deleteStudent,
	};
};

export default useStudent;
