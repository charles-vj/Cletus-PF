import React from 'react'
import styled, { css } from 'styled-components'
import {Link } from 'react-router-dom'
import { MenuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';

const Nav = styled.nav`
    height : 60px;
    background :black;
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

const MenuBars = styled(FaBars)`
    display : none;

    @media screen and (max-width : 760px) {
        display : block;
        background-size: contain;
        height : 25px;
        width : 25px;
        cursor : pointer
        position : absolute;
        top : 0;
        right : 0;
        transform : translateY(-50%,30%);
    }
`;

const Navmenu = styled.i`
    display : flex;
    align-items : center;
    margin-right : -48px;

    @media screen and (max-width : 760px){
        display : none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${Navlink}
    font-style : normal;
`;

const NavBtn = styled.div`
    display : flex;
    align-items : center;
    margin-right : 24px;
    @media screen and (max-width : 760px){
        display : none;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">CLETUS</Logo>
            <MenuBars />
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
