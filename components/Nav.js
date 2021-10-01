// import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
// import { useState } from 'react'

// const { SubMenu } = Menu;

// import React from 'react'

// const Nav = () => {
//   const current = 'mail'
  
//   handleClick = e => {
//     console.log('click ', e);
    
//     const [active, setActive] = useState(null);
    
//     setActive(e.key)
//   }

//   return (
//     <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
//         <Menu.Item key="mail" icon={<MailOutlined />}>
//           Navigation One
//         </Menu.Item>
//         <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
//           Navigation Two
//         </Menu.Item>
//         <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
//           <Menu.ItemGroup title="Item 1">
//             <Menu.Item key="setting:1">Option 1</Menu.Item>
//             <Menu.Item key="setting:2">Option 2</Menu.Item>
//           </Menu.ItemGroup>
//           <Menu.ItemGroup title="Item 2">
//             <Menu.Item key="setting:3">Option 3</Menu.Item>
//             <Menu.Item key="setting:4">Option 4</Menu.Item>
//           </Menu.ItemGroup>
//         </SubMenu>
//         <Menu.Item key="alipay">
//           <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//             Navigation Four - Link
//           </a>
//         </Menu.Item>
//       </Menu>
//   )
// }

// export default Nav








import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/'>Categories</Link>
        </li>
        <li>
          <Link href='/latestproducts'>Latest products</Link>
        </li>
        <li>
          <Link href='/Auth/login'>Join Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
