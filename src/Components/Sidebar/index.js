import React from 'react'
import { CloseIcon, Icon, SidebarContainer,SidebarWrapper,SidebarMenu,SidebarLink,SidebarRoute,SideBtnWrap } from './SidebarElement'

function Sidebar({isOpen,toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="Events" onClick={toggle}>
                        Events
                    </SidebarLink>
                    <SidebarLink to="News" onClick={toggle}>
                        News
                    </SidebarLink>
                    <SidebarLink to="Login" onClick={toggle}>
                        Login
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" onClick={toggle}>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
