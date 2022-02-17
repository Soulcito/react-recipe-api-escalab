import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from './../assets/img/logo.png';
import { Height } from '@material-ui/icons';

const Header = () => (
  <AppBar position='sticky'>
    <Toolbar>
      <img src={logo} style={{ width:32 , Height: 32 }} alt='logo'/>
      &nbsp;&nbsp;
      <h1>Nutrinioal App</h1>
    </Toolbar>
  </AppBar>
)

export default Header;