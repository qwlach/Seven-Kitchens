import React, { Suspense, lazy } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Watermark, Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Banner } from "@/components";
import { SYSTEM_CLS_PREFIX, SYSTEM_ITEM_LIST, MENU_OBJ } from "@/const";

const { Header, Sider, Content } = Layout;
const prefix = process.env.contentPath;

const PoisonousChickenSoup = lazy(() => import("../pages/poisonous-chicken-soup"));
const HousePriceView = lazy(() => import("../pages/house-price-view"));

function App() {
  const navegate = useNavigate();

  const handleClickMenu: MenuProps["onClick"] = (e) => {
    const key: string = e.key;
    navegate(MENU_OBJ[key]);
  };

  return (
    <Layout className={SYSTEM_CLS_PREFIX}>
      <Header>
        <Banner />
      </Header>
      <Layout>
        <Sider collapsible theme="light">
          <Menu
            mode="inline"
            defaultSelectedKeys={["poisonous-chicken-soup"]}
            defaultOpenKeys={["relaxing-moment"]}
            style={{ height: "100%", borderRight: 0 }}
            items={SYSTEM_ITEM_LIST}
            onClick={handleClickMenu}
          />
        </Sider>
        <Layout>
          <Content>
            <Watermark content={"七小厨博客"} className="app-watermark-wrapper">
              <Suspense fallback={<div></div>}>
                <Routes>
                  <Route path={prefix} element={<PoisonousChickenSoup />} />
                  <Route
                    path={`${prefix}${MENU_OBJ["poisonous-chicken-soup"]}`}
                    element={<PoisonousChickenSoup />}
                  />
                  <Route
                    path={`${prefix}${MENU_OBJ["house-price-view"]}`}
                    element={<HousePriceView />}
                  />
                </Routes>
              </Suspense>
            </Watermark>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
