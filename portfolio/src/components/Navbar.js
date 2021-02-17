import React from 'react'
import styled, { css } from 'styled-components'
import {Link } from 'react-router-dom'
import { MenuData } from '../data/MenuData';
import { Button } from './Button';


const Nav = styled.nav`
    height : 60px;
    background :red;
    display : flex;
    justify-content :  space-between;
    padding : 1rem 2rem;
    z-index : 100;
    position : fixed;
    width : 100%
    
`;

const Navlink = css`
   color : #fff;
   display : flex;
   align-items : center;
   padding : 0 1rem;
   height : 100%;
   cursor : pointer;
   text-decoration : none;
`;

const Logo = styled(Link)`
    ${Navlink}
    font-style : italic;
`;

const MenuBar = styled.i``;

const Navmenu = styled.i`
    display : flex;
    align-items : center;
    margin-right : -48px;
`;

const NavMenuLinks = styled(Link)`
    ${Navlink}
`;

const NavBtn = styled.div`
    display : flex;
    align-items : center;
    margin-right : 24px;
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">Cletus</Logo>
            <MenuBar />
            <Navmenu>
                {MenuData.map((item,index) => (
                    <NavMenuLinks to = {item.link}  key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </Navmenu>
            <NavBtn>
                <Button to="./contact" primary='true'>Contact us</Button>
            </NavBtn>
            
        </Nav>
    )
}

export default Navbar
