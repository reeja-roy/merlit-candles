import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const localData = localStorage.getItem("user");
    if (localData) {
      const parsedData = JSON.parse(localData);
      setUserData(parsedData);
    }
  }, []);

  return (
    <header className="flex flex-row justify-between item-center bg-white text-black w-full p-2 ">
      <div>
        <h1 className="playfair-font">Merlit-Candles</h1>
      </div>
      <div className="flex  p-2 gap-4">
        <button onClick={() => navigate("/trending")}>Trending</button>
        <button onClick={() => navigate("/collections")}>Collections</button>
        <button onClick={() => navigate("/contactus")}>Contact Us</button>
        <button onClick={() => navigate("/privacy")}>privacy policy</button>

        {user?.token ? (
          <p>{user.fullName}</p> 
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}

      </div>
    </header>
  );
};

export default Navbar;
