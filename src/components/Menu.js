import React from 'react';
import { MenuStyles } from './styled/MenuStyles';
import Hamburger from '../assets/shared/mobile/menu.svg';
import Nav from './Nav';
import { Button } from './styled/Button';

const Menu = () => {
    return (
        <>
            <img src={Hamburger} alt="menu" />
        </>
    )
}

export default Menu