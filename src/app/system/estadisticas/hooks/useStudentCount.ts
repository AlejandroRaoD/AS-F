import { useState, useEffect } from "react";
import axios from "axios";

const useStudentCount = () => {
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    const fetchStudentCount = async () => {
      try {
        const response = await axios.get("/api/students/count");
        setStudentCount(response.data.count);
      } catch (error) {
        console.error("Error fetching student count:", error);
      }
    };

    fetchStudentCount();
  }, []);

  return studentCount;
};

export default useStudentCount;