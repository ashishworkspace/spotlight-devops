import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState({});
  const msg = async () => {
    fetch('http://server-customer-1:5000/customer1')
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
