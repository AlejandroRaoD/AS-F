import abreuSystemAPI from "@/config/AxiosInstance";
import { PromiseFormatRes } from "@/app/common/dtos/response-format.dto";
import { enrollmentPeriodAttributes } from "../interfaces/enrollmentPeriod.interface";
import { QueryEnrollmentPeriodDto } from "../dto/query-enrollment-period.dto";
import { CreateEnrollmentPeriodDto } from "../dto/create-enrollment-period.dto";
import { UpdateEnrollmentPeriodDto } from "../dto/update-enrollment-period.dto";

const url = `enrollment_period`;

export const getEnrollmentPeriod_Request = async (
	id: string
): Promise<PromiseFormatRes<enrollmentPeriodAttributes>> =>
	(await abreuSystemAPI.get(`${url}/${id}`)).data;

export const getEnrollmentPeriods_Request = async (
	query?: QueryEnrollmentPeriodDto
): Promise<PromiseFormatRes<enrollmentPeriodAttributes[]>> =>
	(await abreuSystemAPI.get(url, { params: query })).data;

export const createEnrollmentPeriod_Request = async (
	data: CreateEnrollmentPeriodDto
): Promise<PromiseFormatRes<enrollmentPeriodAttributes>> =>
	(await abreuSystemAPI.post(url, data)).data;

export const updateEnrollmentPeriod_Request = async (
	id: string,
	data: UpdateEnrollmentPeriodDto
): Promise<PromiseFormatRes<enrollmentPeriodAttributes>> =>
	(await abreuSystemAPI.put(`${url}/${id}`, data)).data;

export const deleteEnrollmentPeriod_Request = async (
	id: string
): Promise<PromiseFormatRes<enrollmentPeriodAttributes>> =>
	(await abreuSystemAPI.delete(`${url}/${id}`)).data;
