import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkM } from "react-router-dom";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    background: #05497E;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 5;
`

export const DropDown = styled.div`
    position: absolute;
    width: 150px;
    height: 100px;
    background-color: #05497E;
    display: none;
    
   
`

export const DropDownContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
   position: absolute;
   text-align: center;
    margin-top: 30px;
`

export const DropDownLink = styled(Link)`
    font-size: 1.0rem;
    color: white;
    text-decoration: none;
    transition: 0.5s ease-in-out;
    :hover {
       text-decoration: underline;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    padding: 0 25px;
`

export const MenuIcon = styled.div`
    display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
   
`

export const MobileLogo = styled(LinkM)`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        color: white;
        font-size: 2.5rem;
        cursor: pointer;
    }
`

export const NavLogo = styled(LinkR)`
    //display: flex;
    display: none;
    @media screen and (min-width: 769px){
        display: block;
        align-items: center;
        font-size: 1.7rem;
        //margin-left: 20px;
        text-decoration: none;
        color: white;
    }
   
`

export const SearchIcon = styled.div`
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
`

export const NavMenu = styled.ul`
    display: none;
    @media screen and (min-width: 786px) {
        display: block;
        display: flex;
        align-items: center;
        //width: min(400px, 650px);
        width: 400px;
        height: 100%;
        justify-content: space-between;
        //margin-left: 8em;
    }
`
   
export const NavItem = styled.li`
    font-size: 1.5rem;
    list-style: none;
    color: white;
    :hover {
        cursor: pointer;
    }
    &:hover ${DropDown} {
        display: block;
    
    }
`

