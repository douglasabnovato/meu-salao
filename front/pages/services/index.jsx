import React from 'react';
import { Layout } from 'antd';
import { LayoutStyled } from './styles';

const { Header, Footer, Sider, Content } = Layout;

const services = () => {
    return ( 
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>                 
    );    
};

export default services;