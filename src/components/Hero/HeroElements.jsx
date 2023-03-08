import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
    text-align: center;
   background-color: #3C86BF;
    padding: 0.5em 0 3em 1em;
   height: 100%;
   //height: 100%;
`

export const CardContainer = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    //background-color: aqua;
    text-decoration: none;
    color: white;

    h1 {
      margin: 0.5em;
    }
`
export const Card = styled.div`

   //background-color: beige;
   //border: 2px solid red;
  overflow: hidden;
  min-height: 25rem;
  //width: 250px;
  //text-align: center;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    //object-position: center;
    position: absolute;
    left: 0;
  }

  p {
    text-align: center;
    z-index: 10;
    position: absolute;
    bottom: 0;
    height: 35%;
    left: 50%;
    width: 100%;
    font-size: 1.2rem;
    transform: translate(-50%, 0);
    color: white;
    font-weight: 600;
  }
`

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`
