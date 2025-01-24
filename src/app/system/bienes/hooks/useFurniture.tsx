import { useState, useEffect } from "react";
import { furnitureAttributes } from "../interfaces/furniture.interface";
import { createFurniture_Request, deleteFurniture_Request, getFurniture_Request, getFurnitures_Request, updateFurniture_Request } from "../api/furnitureApi";
import { QueryFurnitureDto } from "../dto/query-furniture.dto";
import { CreateFurnitureDto } from "../dto/create-furniture.dto";
import { UpdateFurnitureDto } from "../dto/update-furniture.dto";


interface props {
  id?: string | string[];
  query?: QueryFurnitureDto;
}

const useFurniture = (props?: props) => {
  const [furniture, setFurniture] = useState<furnitureAttributes>();
  const [furnitures, setFurnitures] = useState<furnitureAttributes[]>([]);

  const [alreadyQuery, setAlreadyQuery] = useState(false);


  const getFurniture = async (id: string) => {
    if (furniture) return;

    const { data } = await getFurniture_Request(id);

    setFurniture(data);
  };

  useEffect(() => {
    if (alreadyQuery) return;

    if (!props) return;

    if (typeof props.id == "string") getFurniture(props.id);

		if (props.query && !furnitures.length) getFurnitures(props.query);

    setAlreadyQuery(true);
  }, [props]);

  const getFurnitures = async (query?: QueryFurnitureDto) => {
    const { data } = await getFurnitures_Request(query);

    setFurnitures(data);
  };

  const createFurniture = async (formData: CreateFurnitureDto) => {
    await createFurniture_Request(formData);
  };

  const updateFurniture = async (
    furnitureId: string,
    formData: UpdateFurnitureDto
  ) => {
    await updateFurniture_Request(furnitureId, formData);
  };

  const deleteFurniture = async (furnitureId: string) => {
    try {
      await deleteFurniture_Request(furnitureId);

      setFurnitures((items) => items.filter((item) => item._id != furnitureId));
    } catch (error) {}
  };

  return {
    furniture,
    furnitures,
    getFurniture,
    getFurnitures,
    createFurniture,
    updateFurniture,
    deleteFurniture,
  };
};

export default useFurniture;
