import axios from "axios";
import React, { useEffect, useState } from "react";

const GetEducation = () => {
  const [getEducation, setGetEducation] = useState("");
  useEffect(() => {
    let getEducation = async () => {
      const response = await axios.get("/api/admin/getEducation");
      setGetEducation(response.data);
    };
    getEducation();
  }, []);
  return { getEducation, setGetEducation };
};

export default GetEducation;
