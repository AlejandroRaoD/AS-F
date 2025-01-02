import { useState, useEffect } from "react";
import axios from "axios";

const useStaffCount = () => {
  const [staffCount, setStaffCount] = useState(0);

  useEffect(() => {
    const fetchStaffCount = async () => {
      try {
        const response = await axios.get("/api/staff/count");
        setStaffCount(response.data.count);
      } catch (error) {
        console.error("Error fetching staff count:", error);
      }
    };

    fetchStaffCount();
  }, []);

  return staffCount;
};

export default useStaffCount;