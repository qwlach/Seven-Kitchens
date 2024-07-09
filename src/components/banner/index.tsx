import React from "react";
import { SYSTEM_CLS_PREFIX } from "@/const";
import "./index.scss";

const prefix = `${SYSTEM_CLS_PREFIX}-banner-wrapper`;

function Banner() {
  return (
    <div className={prefix}>
      <div className="banner-left">Welcome To Seven Kitchens</div>
      <div className="banner-right">
        <div className="banner-right-user-wrapper">Vera</div>
      </div>
    </div>
  );
}

export default Banner;
