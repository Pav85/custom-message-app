import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [customMessage, setCustomMessage] = useState("");

  // hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []); //

  // hook to fetch message when the component mounts
  useEffect(() => {
    fetchMessage();
  }, []);

  // function to fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/data");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // function to fetch message from the backend
  const fetchMessage = async () => {
    try {
      const response = await axios.get("/api/message");
      setCustomMessage(response.data.message);
    } catch (error) {
      console.error("Error fetching message: ", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data.message || "Loading..."}</h1>
        {/* custom message displayed in app */}
        <h2>{customMessage || "Loading..."}</h2>
      </header>
    </div>
  );
}

export default App;
