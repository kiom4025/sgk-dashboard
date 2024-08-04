import React from 'react';
import { Layout, theme } from 'antd';
import { Route, Routes } from "react-router-dom";
import Dashboard from '../Components/Pages/Dashboard';
const { Content } = Layout;

const LayoutContent = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Routes>  {/* Replaced Switch with Routes in React Router v6 */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/PivotTable" element={<>PivotTable</>} />
      </Routes>
    </Content>
  );
};
export default LayoutContent;