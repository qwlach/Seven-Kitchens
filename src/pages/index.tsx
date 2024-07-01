import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Watermark } from "antd";

const Home = lazy(() => import("./home"));
const Menu = lazy(() => import("./menu"));
const MenuDetail = lazy(() => import("./menu-detail"));

function App() {
  console.log(process.env.contentPath, "1234567");

  const prefix = process.env.contentPath;

  return (
    <Watermark content={"七小厨"} className="app-watermark-wrapper">
      <BrowserRouter>
        <Suspense fallback={<div></div>}>
          <Routes>
            <Route path={prefix} element={<Home />}></Route>
            <Route path={`${prefix}/menu`} element={<Menu />}></Route>
            <Route path={`${prefix}/menu/:id`} element={<MenuDetail />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Watermark>
  );
}

export default App;
