import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const prefix = "menu-detail-wrapper";
interface menuInterface {
  label: string;
  value: string;
}

interface listFace {
  [key: string]: menuInterface[];
}

const soupList: menuInterface[] = [
  {
    label: "冬瓜排骨汤",
    value: "冬瓜加排骨"
  }
];
const vegetableList: menuInterface[] = [];
const meatList: menuInterface[] = [];

const menuList: listFace = {
  vegetable: vegetableList,
  meat: meatList,
  soup: soupList
};

function MenuDetail() {
  const location = useLocation();
  const params = useParams();
  const [currentMenuList, setCurrentMenuList] = useState<menuInterface[]>([]);

  const { id } = params;

  useEffect(() => {
    if (id) {
      const arr = menuList[id];
      setCurrentMenuList(arr);
    }
  }, [id]);

  console.log(params);
  console.log(location);
  console.log(currentMenuList, "currentMenuList");
  return <div className={prefix}>11111</div>;
}

export default MenuDetail;
