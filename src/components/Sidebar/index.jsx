import React, {useState} from 'react'
import { SidebarContainer, SidebarMenu, SidebarMenuItemHome, SidebarMenuItem, SidebarMenuSpecifics, SpecificsContainer } from './SidebarElements';
import {RxCross1} from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Sidebar = ({isOpen, toggle}) => {
  const [isMActive, setIsMActive] = useState(false);
  const [isSActive, setIsSActive] = useState(false);

  return (
    <SidebarContainer isOpen={isOpen}>
        <SidebarMenu>
          <SidebarMenuItemHome to={'/'} onClick={toggle}>
        
              Home
            
          </SidebarMenuItemHome>
          <SidebarMenuItem onClick={() => setIsMActive(!isMActive)}>
            Movies {isMActive? '-' : '+'}
            {isMActive && 
              <SpecificsContainer>
                <SidebarMenuSpecifics onClick={toggle} to={'/popularmovies'}>- Popular Movies</SidebarMenuSpecifics>
                <SidebarMenuSpecifics onClick={toggle} to={'/topratedmovies'}>- Top Rated Movies</SidebarMenuSpecifics>
              </SpecificsContainer>
            }
          </SidebarMenuItem>
          <SidebarMenuItem onClick={() => setIsSActive(!isSActive)}>
            TV Shows {isSActive? '-' : '+'}
            {isSActive && 
              <SpecificsContainer>
                <SidebarMenuSpecifics onClick={toggle} to={'/populartvshows'}>- Popular TV Shows</SidebarMenuSpecifics> 
                <SidebarMenuSpecifics onClick={toggle} to={'/topratedtvshows'}>- Top Rated TV Shows</SidebarMenuSpecifics>
              </SpecificsContainer>}
          </SidebarMenuItem>
          <SidebarMenuItem onClick={toggle}>
            <Link to={'/contactus'} style={{color: "white", textDecoration: "none"}}>
              Contact Us
            </Link>
            
          </SidebarMenuItem>
          <SidebarMenuItem onClick={toggle}>
            <RxCross1 />
          </SidebarMenuItem>
          
        </SidebarMenu>
    </SidebarContainer>
  )
}

export default Sidebar;