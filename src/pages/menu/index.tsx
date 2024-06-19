import React from "react";
import { Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import meatImg from "../../images/meat.jpg";
import vegetableImg from "../../images/vegetable.jpg";
import soupImg from "../../images/soup.jpg";
import "./index.scss";

const prefix = "menu-container-wrapper";

function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoDetail = (type: string) => {
    navigate(`${location.pathname}/${type.toLocaleLowerCase()}`);
  };

  return (
    <div className={prefix}>
      <div className={`${prefix}-vegetable menu-item-wrapper`}>
        <img src={vegetableImg} alt="Vegetable" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">蔬菜类</h5>
          <p className="card-text">里面记录的是一些日常生活中常炒的蔬菜</p>
          <Button type="primary" onClick={() => handleGoDetail("Vegetable")}>
            点击前往
          </Button>
        </div>
      </div>
      <div className={`${prefix}-meat menu-item-wrapper`}>
        <img src={meatImg} alt="Meat" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">肉类</h5>
          <p className="card-text">里面记录的是一些日常生活中常炒的肉类</p>
          <Button type="primary" onClick={() => handleGoDetail("Meat")}>
            点击前往
          </Button>
        </div>
      </div>
      <div className={`${prefix}-soul menu-item-wrapper`}>
        <img src={soupImg} alt="Soup" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">汤类</h5>
          <p className="card-text">里面记录的是一些日常生活中常炖的汤</p>
          <Button type="primary" onClick={() => handleGoDetail("Soup")}>
            点击前往
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
