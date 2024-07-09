import React from "react";
import smileSvg from "@/images/smile.svg";
import articleSvg from "@/images/article.svg";

interface MenuInterface {
  [prop: string]: string;
}

export const SYSTEM_CLS_PREFIX = "seven-kitchens";
export const MENU_OBJ: MenuInterface = {
  "poisonous-chicken-soup": "/relaxing-moment/poisonous-chicken-soup",
  "house-price-view": "/article-excerpt/house-price-view"
};

export const SYSTEM_ITEM_LIST = [
  {
    key: "relaxing-moment",
    label: "轻松一刻",
    icon: <img src={smileSvg} alt="smile" />,
    children: [
      {
        key: "poisonous-chicken-soup",
        label: "毒鸡汤"
      }
    ]
  },
  {
    key: "article-excerpt",
    label: "文章摘录",
    icon: <img src={articleSvg} alt="smile" />,
    children: [
      {
        key: "house-price-view",
        label: "房价看法"
      }
    ]
  }
];
