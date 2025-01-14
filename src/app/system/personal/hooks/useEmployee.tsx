import { useState, useEffect } from "react";
import { employeeAttributes } from "../interfaces/employee.interface";
import {
	createEmployee_Request,
	deleteEmployee_Request,
	getEmployee_Request,
	getEmployees_Request,
	updateEmployee_Request,
} from "../api/employeeApi";
import { QueryEmployeeDto } from "../dto/query-employee.dto";
import { CreateEmployeeDto } from "../dto/create-employee.dto";
import { UpdateEmployeeDto } from "../dto/update-employee.dto";

interface props {
	id?: string | string[];
	query?: QueryEmployeeDto;
}

const useEmployee = (props?: props) => {
	const [employee, setEmployee] = useState<employeeAttributes>();
	const [employees, setEmployees] = useState<employeeAttributes[]>([]);

	const [alreadyQuery, setAlreadyQuery] = useState(false);

	const getEmployee = async (id: string) => {
		if (employee) return;

		const { data } = await getEmployee_Request(id);

		setEmployee(data);
	};

	useEffect(() => {
		if (alreadyQuery) return;

		if (!props) return;

		if (typeof props.id == "string") getEmployee(props.id);

		if (props.query && !employees.length) getEmployees(props.query);

		setAlreadyQuery(true);
	}, [props]);

	const getEmployees = async (query?: QueryEmployeeDto) => {
		const { data } = await getEmployees_Request(query);

		setEmployees(data);
	};

	const createEmployee = async (formData: CreateEmployeeDto) => {
		await createEmployee_Request(formData);
	};

	const updateEmployee = async (
		employeeId: string,
		formData: UpdateEmployeeDto
	) => {
		await updateEmployee_Request(employeeId, formData);
	};

	const deleteEmployee = async (employeeId: string) => {
		try {
			await deleteEmployee_Request(employeeId);

			setEmployees((items) => items.filter((item) => item._id != employeeId));
		} catch (error) {}
	};

	return {
		employee,
		employees,
		getEmployee,
		getEmployees,
		createEmployee,
		updateEmployee,
		deleteEmployee,
	};
};

export default useEmployee;
