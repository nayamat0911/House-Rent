
import React from 'react';
import styled, { css } from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {menuData} from '../data/MenuData';
import {Button} from './Button'
import Bars from '../images/bars.svg';
import {FaBars} from 'react-icons/fa';


const Nav = styled.nav`
height:60px;
display:flex;
justify-content:space-between;
padding:1rem 2rem;
z-index:100;
width:100%;
position:fixed;

`;
const NavLink = css`
color:#fff;
display:flex;
padding:0 1rem;
align-items:center;
height:100%;
cursor:pointer;
text-decoration:none;

`;

const Logo = styled(Link)`
${NavLink}
font-style:italic;
`;

const MenuBars = styled(FaBars)`
 display:none;
 @media screen and (max-width:768px){
    display:block;
    color:#fff;
    font-size:25px;
}
`;
const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right:-48px;

@media screen and (max-width:768px){
    display:none;
}
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
display:flex;
align-items:center;
margin-right:24px;

@media screen and (max-width:768px){
    display:none;
}
`;

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to ='/'>ELIXR</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to = {item.link} key ={index}>{item.title}</NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to= '/contact' primary = 'true' >Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
