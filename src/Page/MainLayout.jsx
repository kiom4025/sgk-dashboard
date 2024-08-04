import React from 'react';
import { Layout } from 'antd';
import Sidemenu from './Sidemenu';
import LayoutHeader from './Header';
import LayoutContent from './Content';
import LayoutFooter from './Footer';

const MainLayout = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <LayoutHeader />
      <Layout>
        <Sidemenu />
        <Layout>
          <LayoutContent />
          <LayoutFooter />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default MainLayout;