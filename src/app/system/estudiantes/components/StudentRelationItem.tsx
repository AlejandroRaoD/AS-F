"use client";
import Button from "@/app/common/components/Button";
import useStudentRelation from "../hooks/useStudentRelation";
import { studentRelationAllDataAttributes } from "../interfaces/studentRepresentative.interface";

interface props {
	data: studentRelationAllDataAttributes;
	edit?: boolean;
	// redirect?: string;
}

const StudentRelationItem = (props: props) => {
	const { data, edit = false } = props;

	const { deleteStudentRelation } = useStudentRelation();

	const onDelete = async () => {
		await deleteStudentRelation(data._id);
		window.location.reload();
	};

	return (
		<>
			<p>
				{data.representativeId.name} ({data.familyBond})
			</p>

			{edit && <Button onClick={onDelete}>Eliminar</Button>}
		</>
	);
};

export default StudentRelationItem;
