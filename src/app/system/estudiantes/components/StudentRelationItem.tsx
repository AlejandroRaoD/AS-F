"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/app/common/components/Input";
import axiosErrorHandle from "@/app/common/helpers/axiosErrorHandle";
import Button from "@/app/common/components/Button";
import useStudentRelation from "../hooks/useStudentRelation";
import { CreateStudentRelationDto } from "../dto/create-student-relation.dto";
import Title from "@/app/common/components/Title";
import { studentRelationAllDataAttributes } from "../interfaces/studentRepresentative.interface";

interface props {
	data: studentRelationAllDataAttributes;
	// redirect?: string;
}

const StudentRelationItem = (props: props) => {
	const { data } = props;
	const [isSubmiting, setIsSubmiting] = useState(false);
	const { createStudentRelation } = useStudentRelation();

	return (
		<>
			<p>
				{data.representativeId.name} ({data.familyBond})
			</p>
		</>
	);
};

export default StudentRelationItem;
