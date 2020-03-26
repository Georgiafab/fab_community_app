import React, { SFC,useCallback,useState } from 'react'
import { Menu } from 'antd';
import './index.scss';
import logo from '../../img/logo.png'
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;


type Prop = {}

const AppHeader: SFC<Prop> = props => {

    const handleClick = useCallback(
        (e) => {
            console.log('click ', e);
            setcurrent(e.key)
        },
        []
    );

    const [current, setcurrent] = useState('mail');



    return (
        <div className="app-header">
            <img src={logo} alt="logo" />
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="mail">
                    <MailOutlined />
          Navigation One
        </Menu.Item>
                <Menu.Item key="app" disabled>
                    <AppstoreOutlined />
          Navigation Two
        </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            <SettingOutlined />
              Navigation Three - Submenu
            </span>
                    }
                >
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
          </a>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default AppHeader