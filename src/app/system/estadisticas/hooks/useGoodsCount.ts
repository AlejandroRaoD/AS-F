import { useState, useEffect } from "react";
import axios from "axios";

const useGoodsCount = () => {
  const [goodsCount, setGoodsCount] = useState(0);

  useEffect(() => {
    const fetchGoodsCount = async () => {
      try {
        const response = await axios.get("/api/goods/count");
        setGoodsCount(response.data.count);
      } catch (error) {
        console.error("Error fetching goods count:", error);
      }
    };

    fetchGoodsCount();
  }, []);

  return goodsCount;
};

export default useGoodsCount;