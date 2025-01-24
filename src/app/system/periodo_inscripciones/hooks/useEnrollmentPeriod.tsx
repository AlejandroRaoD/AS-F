import { useState, useEffect } from "react";
import { enrollmentPeriodAttributes } from "../interfaces/enrollmentPeriod.interface";
import {
	createEnrollmentPeriod_Request,
	deleteEnrollmentPeriod_Request,
	getEnrollmentPeriod_Request,
	getEnrollmentPeriods_Request,
	updateEnrollmentPeriod_Request,
} from "../api/enrollmentPeriodApi";
import { QueryEnrollmentPeriodDto } from "../dto/query-enrollment-period.dto";
import { UpdateEnrollmentPeriodDto } from "../dto/update-enrollment-period.dto";
import { CreateEnrollmentPeriodDto } from "../dto/create-enrollment-period.dto";

interface props {
	id?: string | string[];
	query?: QueryEnrollmentPeriodDto;
}

const useEnrollmentPeriod = (props?: props) => {
	const [enrollmentPeriod, setEnrollmentPeriod] =
		useState<enrollmentPeriodAttributes>();
	const [enrollmentPeriods, setEnrollmentPeriods] = useState<
		enrollmentPeriodAttributes[]
	>([]);

	const [alreadyQuery, setAlreadyQuery] = useState(false);

	const getEnrollmentPeriod = async (id: string) => {
		if (enrollmentPeriod) return;

		const { data } = await getEnrollmentPeriod_Request(id);

		setEnrollmentPeriod(data);

		return data;
	};

	useEffect(() => {
		if (alreadyQuery) return;

		if (!props) return;

		if (typeof props.id == "string") getEnrollmentPeriod(props.id);

		if (props.query && !enrollmentPeriods.length)
			getEnrollmentPeriods(props.query);

		setAlreadyQuery(true);
	}, [props]);

	const getEnrollmentPeriods = async (query?: QueryEnrollmentPeriodDto) => {
		const { data } = await getEnrollmentPeriods_Request(query);

		setEnrollmentPeriods(data);
	};

	const createEnrollmentPeriod = async (
		formData: CreateEnrollmentPeriodDto
	) => {
		await createEnrollmentPeriod_Request(formData);
	};

	const updateEnrollmentPeriod = async (
		enrollmentPeriodId: string,
		formData: UpdateEnrollmentPeriodDto
	) => {
		await updateEnrollmentPeriod_Request(enrollmentPeriodId, formData);
	};

	const deleteEnrollmentPeriod = async (enrollmentPeriodId: string) => {
		try {
			await deleteEnrollmentPeriod_Request(enrollmentPeriodId);

			setEnrollmentPeriods((items) =>
				items.filter((item) => item._id != enrollmentPeriodId)
			);
		} catch (error) {}
	};

	return {
		enrollmentPeriod,
		enrollmentPeriods,
		getEnrollmentPeriod,
		getEnrollmentPeriods,
		createEnrollmentPeriod,
		updateEnrollmentPeriod,
		deleteEnrollmentPeriod,
	};
};

export default useEnrollmentPeriod;
