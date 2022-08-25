import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SidebarBtn,SidebarRoute } from './sidebarelemts'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} >
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>

        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink onClick={toggle} to="about" smooth={true} duration={500} spy={true} exact='true'>
                    About
                </SidebarLink>
                <SidebarLink onClick={toggle} to="signin" smooth={true} duration={500} spy={true} exact='true'>
                    Sign In
                </SidebarLink>
                <SidebarLink onClick={toggle} to="how_to" smooth={true} duration={500} spy={true} exact='true'>
                    How To Play
                </SidebarLink>
            </SidebarMenu>
            <SidebarBtn>
                <SidebarRoute onClick={() => { {toggle()} ; window.open("https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/") } }>Download</SidebarRoute>
            </SidebarBtn>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar