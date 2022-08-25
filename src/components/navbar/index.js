import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink } from './navbarelements';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to="/">PUBG</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true'>About</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="signin">Sign In</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="how_to" smooth={true} duration={500} spy={true} exact='true' >How To Play</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink onClick={() => window.open("https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/")}>Download</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;