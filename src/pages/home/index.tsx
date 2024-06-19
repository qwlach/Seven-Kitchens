import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const prefix = "home-page-wrapper";

function Home() {
  const navigate = useNavigate();
  const handleEnter = (e: React.MouseEvent) => {
    console.log(e);
    console.log(11111);
    navigate("./menu");
  };

  return (
    <div className={prefix}>
      <p className="shining">Welcome to Seven Kitchens</p>
      <div className="enter" onClick={handleEnter}>
        Enter
      </div>
    </div>
  );
}

export default Home;
