import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #05497E;
    width: 100%;
    height: 80px;
    
   z-index: 20;
   position: fixed;
   top: 0;
   align-items: center;
   transition: 0.5s ease-in-out;
   opacity: ${({isClicked}) => (isClicked ? '100%' : '0')};
   right: ${({isClicked}) => (isClicked ? '0' : '-100%')};
   
`

export const SearchForm = styled.form`
    position: relative;
    width: 100%;
    max-width: 1100px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    //padding-left: 30px;
    height: 100%;
    input {
        width: 100%;
        border: none;
        height: 100%;
        font-size: 1.5rem;
        padding-left: 1rem;
       background-color: #05497E;
        color: white;
        outline: none;
    }
`

export const CloseButton = styled.div`
    color: white;
    
    font-size: 1.5rem;
    //position: absolute;
    right: 25px;
    :hover {
        cursor: pointer;
    }
    
`