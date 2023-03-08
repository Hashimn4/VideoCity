import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {BsSearch} from 'react-icons/bs';
import {BiCameraMovie} from 'react-icons/bi';
import { DropDownLink, DropDownContent, DropDown, MobileLogo, Nav, NavbarContainer, NavLogo, MenuIcon, SearchIcon, NavMenu, NavItem} from './NavbarElements';
import { SidebarMenuSpecifics, SpecificsContainer } from '../Sidebar/SidebarElements';
import { Link } from 'react-router-dom';
const apiKey = "dd5b8d703a820cfdadbb383be2ab5aae";
const Navbar = ({toggle, searching}) => {
  return (
    <Nav>
      <NavbarContainer>
        <MenuIcon onClick={toggle}>
          <GiHamburgerMenu />
        </MenuIcon>
        <NavLogo to={'/'}>
          VideoCity
        </NavLogo>
        <MobileLogo to={'/'}>
          <BiCameraMovie />
        </MobileLogo>
        <NavMenu>
          <NavItem>
            
              Movies
              <DropDown>
                <DropDownContent>
                <DropDownLink to={'/popularmovies'}>Popular Movies</DropDownLink>
                <DropDownLink to={'/topratedmovies'}>Top Rated Movies</DropDownLink>
                </DropDownContent>
               
              </DropDown>
          </NavItem>
          <NavItem>
           
              TV Shows
              <DropDown>
                <DropDownContent>
                <DropDownLink to={'/populartvshows'}>Popular Shows</DropDownLink>
                <DropDownLink to={'/topratedtvshows'}>Top Rated Shows</DropDownLink>
                </DropDownContent>
               
              </DropDown>
          </NavItem>
        
          <NavItem>
            <Link to={'/contactus'} style={{color: "white", textDecoration: "none"}}>
            Contact
            </Link>
              
            
          </NavItem>
        </NavMenu>
        <SearchIcon onClick={searching}>
          <BsSearch />
        </SearchIcon>
       
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar