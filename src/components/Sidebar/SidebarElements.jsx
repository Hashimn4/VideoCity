import styled from "styled-components";
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
    background-color: #1674BC;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    transition: 0.5s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    left: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    box-sizing: border-box;
`

export const SidebarMenu = styled.div`
    width: 100%;
    height: 65vh;
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 35%;
    text-decoration: none;
    text-align: center;
    font-size: 1.5rem;
`

export const SidebarMenuItemHome = styled(Link)`
    color: white;
    cursor: pointer;
    border-bottom: 1px solid white;
    padding-bottom: 5px;
    text-decoration: none;
`

export const SidebarMenuItem = styled.div`
    color: white;
    cursor: pointer;
    border-bottom: 1px solid white;
    padding-bottom: 5px;
    //transition: 1s ease-in;
   
`

export const SpecificsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //padding-bottom: 5px;
    
    gap: 0.5em;
    padding-bottom: 5px;
`

export const SidebarMenuSpecifics = styled(Link)`
    color: white;
  
   
    text-decoration: none;
`