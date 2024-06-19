import React from "react";
import { useLocation, useParams } from "react-router-dom";

function MenuDetail() {
  const location = useLocation();
  const params = useParams();
  console.log(params);
  console.log(location);
  return <div>11111</div>;
}

export default MenuDetail;
