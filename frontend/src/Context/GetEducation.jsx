import axios from "axios";
import React, { useEffect, useState } from "react";

const GetEducation = () => {
  const [getEducation, setGetEducation] = useState("");
  useEffect(() => {
    let getEducation = async () => {
      const response = await axios.get(
        "http://localhost:3000/admin/getEducation",
        {
          withCredentials: true,
        }
      );
      setGetEducation(response.data);
    };
    getEducation();
  }, []);
  console.log(getEducation);

  return { getEducation, setGetEducation };
};

export default GetEducation;
