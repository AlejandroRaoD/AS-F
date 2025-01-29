import { useState, useEffect } from "react";
import { systemLogAttributes } from "../interfaces/systemLog.interface";
import { getSystemLogs_Request } from "../api/systemLog.api";

interface props {
	// id?: string | string[];
}

const useSystemLog = (props?: props) => {
	// const [systemLog, setSystemLog] = useState<systemLogAttributes>();
	const [systemLogs, setSystemLogs] = useState<systemLogAttributes[]>([]);

	// const getSystemLog = async (id: string) => {
	// 	if (systemLog) return;

	// 	const { data } = await getSystemLog_Request(id);

	// 	setSystemLog(data);
	// };

	useEffect(() => {
		getSystemLogs();

		// if (!props) return;

		// if (typeof props.id == "string") getSystemLog(props.id);
	}, [props]);

	const getSystemLogs = async () => {
		const { data } = await getSystemLogs_Request();

		setSystemLogs(data);
	};

	// const createSystemLog = async (formData: CreateSystemLogDto) => {
	// 	await createSystemLog_Request(formData);
	// };

	// const updateSystemLog = async (
	// 	systemLogId: string,
	// 	formData: UpdateSystemLogDto
	// ) => {
	// 	await updateSystemLog_Request(systemLogId, formData);
	// };

	// const deleteSystemLog = async (systemLogId: string) => {
	// 	await deleteSystemLog_Request(systemLogId);
	// };

	return {
		// systemLog,
		systemLogs,
		// getSystemLog,
		getSystemLogs,
		// createSystemLog,
		// updateSystemLog,
		// deleteSystemLog,
	};
};

export default useSystemLog;
