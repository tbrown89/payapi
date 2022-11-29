import React from 'react';
import { HeaderStyles } from './styled/HeaderStyles';
import Logo from './Logo';
import Nav from './Nav';
import Menu from './Menu';

const Header = () => {
    return (
        <HeaderStyles>
            <Logo />
            <Menu />
        </HeaderStyles>
    )
}

export default Header