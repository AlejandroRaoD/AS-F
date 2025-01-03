{/*import { useState, useEffect } from "react";
import { QueryBienDto } from "../dto/query-bien.dto";
import { CreateBienDto } from "../dto/create-bien.dto";
import { bienAttributes } from "../interfaces/bien.interface";
import {
  createBien_Request,
  deleteBien_Request,
  getBien_Request,
  getBienes_Request,
  updateBien_Request,
} from "../api/bienApi";
import { UpdateBienDto } from "../dto/update-bien.dto";

interface props {
  id?: string | string[];
}

const useBienes = (props?: props) => {
  const [bien, setBien] = useState<bienAttributes>();
  const [bienes, setBienes] = useState<bienAttributes[]>([]);

  const getBien = async (id: string) => {
    if (bien) return;

    const { data } = await getBien_Request(id);

    setBien(data);
  };

  useEffect(() => {
    if (!props) return;

    if (typeof props.id == "string") getBien(props.id);
  }, [props]);

  const getBienes = async (query?: QueryBienDto) => {
    const { data } = await getBienes_Request(query);

    setBienes(data);
  };

  const createBien = async (formData: CreateBienDto) => {
    await createBien_Request(formData);
  };

  const updateBien = async (
    bienId: string,
    formData: UpdateBienDto
  ) => {
    await updateBien_Request(bienId, formData);
  };

  const deleteBien = async (bienId: string) => {
    try {
      await deleteBien_Request(bienId);

      setBienes((items) => items.filter((item) => item._id != bienId));
    } catch (error) {}
  };

  return {
    bien,
    bienes,
    getBien,
    getBienes,
    createBien,
    updateBien,
    deleteBien,
  };
};

export default useBienes;*/}
