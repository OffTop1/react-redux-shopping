import React from 'react';
import { Menu } from 'semantic-ui-react'

const Navbar = () =>(
    <Menu>
        <Menu.Item
          name='browse'
        >
          Магазин книг
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='signup' 
          >
            Итого: &nbsp;<b>0</b>&nbsp;руб.
          </Menu.Item>

          <Menu.Item
            name='help'          
          >
            Корзина &nbsp;<b>(0)</b>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
);


export default Navbar;

