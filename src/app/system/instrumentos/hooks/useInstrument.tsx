import { useState, useEffect } from "react";
import { instrumentAttributes } from "../interfaces/instrument.interface";
import {
	createInstrument_Request,
	deleteInstrument_Request,
	getInstrument_Request,
	getInstruments_Request,
	updateInstrument_Request,
} from "../api/instrumentApi";
import { QueryInstrumentDto } from "../dto/query-instrument.dto";
import { CreateInstrumentDto } from "../dto/create-instrument.dto";
import { UpdateInstrumentDto } from "../dto/update-instrument.dto";

interface props {
	id?: string | string[];
	query?: QueryInstrumentDto;
}

const useInstrument = (props?: props) => {
	const [instrument, setInstrument] = useState<instrumentAttributes>();
	const [instruments, setInstruments] = useState<instrumentAttributes[]>([]);

	const [alreadyQuery, setAlreadyQuery] = useState(false);

	const getInstrument = async (id: string) => {
		if (instrument) return;

		const { data } = await getInstrument_Request(id);

		setInstrument(data);
	};

	useEffect(() => {
		if (alreadyQuery) return;

		if (!props) return;

		if (typeof props.id == "string") getInstrument(props.id);

		if (props.query && !instruments.length) getInstruments(props.query);

		setAlreadyQuery(true);
	}, [props]);

	const getInstruments = async (query?: QueryInstrumentDto) => {
		const { data } = await getInstruments_Request(query);

		setInstruments(data);
	};

	const createInstrument = async (formData: CreateInstrumentDto) => {
		await createInstrument_Request(formData);
	};

	const updateInstrument = async (
		instrumentId: string,
		formData: UpdateInstrumentDto
	) => {
		await updateInstrument_Request(instrumentId, formData);
	};

	const deleteInstrument = async (instrumentId: string) => {
		try {
			await deleteInstrument_Request(instrumentId);

			setInstruments((items) => items.filter((item) => item._id != instrumentId));
		} catch (error) {}
	};

	return {
		instrument,
		instruments,
		getInstrument,
		getInstruments,
		createInstrument,
		updateInstrument,
		deleteInstrument,
	};
};

export default useInstrument;
