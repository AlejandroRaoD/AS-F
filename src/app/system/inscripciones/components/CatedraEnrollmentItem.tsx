import IconButton from "@/app/common/components/IconButton";
import useCatedra from "../../catedra/hook/useCatedra";
import { EnrollmentContent } from "../interfaces/studentEnrollment.interface";
import TrashIcon from "@/app/common/components/icons/TrashIcon";

interface props {
	data: EnrollmentContent;
	onDelete?();
}

const CatedraEnrollmentItem = ({ data, onDelete }: props) => {
	const { catedraId, comodatoId } = data;

	const { catedra } = useCatedra({ id: catedraId });

	return (
		<div className="flex items-center justify-between py-1 px-2 rounded hover:shadow">
			<div>{catedra && catedra.name}</div>

			{onDelete && (
				<div>
					<IconButton onClick={onDelete} size="small">
						<TrashIcon />
					</IconButton>
				</div>
			)}
		</div>
	);
};

export default CatedraEnrollmentItem;
