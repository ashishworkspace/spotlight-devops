import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState({});
  const msg = async () => {
    const response = await axios.get("http://backend2.myapp.com/customer2");
    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {
    msg();
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};

export default App;
