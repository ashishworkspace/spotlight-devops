import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState({});
  const msg = async () => {
    fetch('http://server-customer-2:5000/customer2')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      });
  };
  useEffect(() => {
    msg();
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};

export default App;
