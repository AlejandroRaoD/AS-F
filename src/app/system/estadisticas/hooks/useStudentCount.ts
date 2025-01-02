// src/app/estadisticas/hooks/useStudentCount.ts
import { useState, useEffect } from "react";
import axios from "axios";

const useStudentCount = () => {
  const [studentCount, setStudentCount] = useState<number>(0);

  useEffect(() => {
    const fetchStudentCount = async () => {
      try {
        const response = await axios.get("/api/students/count"); // Asegúrate de tener esta ruta en tu backend
        setStudentCount(response.data.count); // Asegúrate que la respuesta tenga un campo 'count'
      } catch (error) {
        console.error("Error fetching student count:", error);
      }
    };

    fetchStudentCount();
  }, []);

  return studentCount;
};

export default useStudentCount;
