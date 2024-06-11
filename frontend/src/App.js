import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="App"></div>;
}

export default App;
