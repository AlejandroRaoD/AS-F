"use client";
import Button from "@/app/common/components/Button";
import useStudentRelation from "../hooks/useStudentRelation";
import { studentRelationAllDataAttributes } from "../interfaces/studentRepresentative.interface";
import TrashIcon from "@/app/common/components/icons/TrashIcon";
import IconButton from "@/app/common/components/IconButton";

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
		<div className="flex justify-between items-center p-2 rounded hover:bg-cyan-50 border-b">
			<div>
				{data.representativeId.name} ({data.familyBond})
			</div>

			{edit && (
				<IconButton size="small" onClick={onDelete}>
					<TrashIcon />
				</IconButton>
			)}
		</div>
	);
};

export default StudentRelationItem;
