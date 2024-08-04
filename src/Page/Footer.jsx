import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const LayoutFooter = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Matthews International ©{new Date().getFullYear()} Created by Moki
    </Footer>
  );
};
export default LayoutFooter;