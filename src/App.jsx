import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { API } from "./lib/api";

function App() {
  const [paintings, setPaintings] = useState([]);

  async function fetchPaintings() {
    const res = await fetch(`${API}`);
    const info = await res.json();
    setPaintings(info.records);
    console.log(info);
  }

  useEffect(() => {
    fetchPaintings();
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <Outlet context={{ paintings }} />
      </div>
    </>
  );
}

export default App;
