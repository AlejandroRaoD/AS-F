import { useState, useEffect } from "react";
import { QueryStudentDto } from "../dto/query-student.dto";
import { CreateStudentDto } from "../dto/create-student.dto";
import { studentAttributes } from "../interfaces/student.interface";
import {
	createStudent_Request,
	deleteStudent_Request,
	getStudent_Request,
	getStudents_Request,
	updateStudent_Request,
} from "../api/studentApi";
import { UpdateStudentDto } from "../dto/update-student.dto";

interface props {
	id?: string | string[];
}

const useStudent = (props?: props) => {
	const [student, setStudent] = useState<studentAttributes>();
	const [students, setStudents] = useState<studentAttributes[]>([]);

	const getStudent = async (id: string) => {
		if (student) return;

		const { data } = await getStudent_Request(id);

		setStudent(data);
	};
	useEffect(() => {
		if (!props) return;

		if (typeof props.id == "string") getStudent(props.id);
	}, [props]);

	const getStudents = async (query?: QueryStudentDto) => {
		const { data } = await getStudents_Request(query);

		setStudents(data);
	};

	const createStudent = async (formData: CreateStudentDto) => {
		await createStudent_Request(formData);
	};

	const updateStudent = async (
		studentId: string,
		formData: UpdateStudentDto
	) => {
		await updateStudent_Request(studentId, formData);
	};

	const deleteStudent = async (studentId: string) => {
		try {
			await deleteStudent_Request(studentId);

			setStudents((items) => items.filter((item) => item._id != studentId));
		} catch (error) {}
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
