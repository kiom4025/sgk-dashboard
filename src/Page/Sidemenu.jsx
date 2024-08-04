import React, { useState } from 'react';
import {
  AreaChartOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/">Dashboard</Link>, '1', <PieChartOutlined />),
  getItem(<Link to="/PivotTable">Pivot Table</Link>, '2', <AreaChartOutlined />),
];
const Sidemenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const renderMenuItems = items.map((item) => {
    var locationValidate
    const path = item.label.props.to;
    const pathIndex = location.pathname.lastIndexOf('/');
    if (pathIndex !== 0) {
      var parentPath = location.pathname.slice(0, pathIndex);
      locationValidate = parentPath === path;
    }
    else locationValidate = location.pathname === path;
    return {
      ...item,
      className: locationValidate ? 'ant-menu-item-selected' : ''
    };
  });
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        // defaultSelectedKeys={['1']}
        mode="inline"
        items={renderMenuItems}
      />
    </Sider>
  );
};
export default Sidemenu;