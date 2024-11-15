import toast from "react-hot-toast";

const axiosErrorHandle = (error, callback?) => {
	const { response } = error;

	if (response?.data?.message) toast.error(response.data.message as string);
	else toast.error("ocurrio un error");

	if (callback) callback();
};

export default axiosErrorHandle;
