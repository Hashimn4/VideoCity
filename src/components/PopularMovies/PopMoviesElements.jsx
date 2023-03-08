import styled from "styled-components";

export const PopularContainer = styled.div`
    background-color: #3C86BF;
    padding: 1rem;
    height: 100%;
    p {
        text-align: center;
    }
    text-align: center;
`

export const CardHolder = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    height: 100%;
    display: grid;
    gap: 1rem;
    @media screen and (max-width: 500px){
       grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 501px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 700px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (min-width: 900px){
        grid-template-columns: repeat(5, 1fr);
    }
`

export const ButtonContainer = styled.button`
    padding: 20px 0;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    margin-top: 1rem;
    width: 100%;
    color: #3C86BF;
    transition: 0.1s ease-in;

    @media screen and (min-width: 501px){
        width: 75%;
    }
    @media screen and (min-width: 700px){
        width: 50%;
    }
    @media screen and (min-width: 900px){
        width: 25%;
    }

    &:hover {
        background-color: #05497E;
        color: white;
        cursor: pointer;
    }
`

export const Card2 = styled.div`
    min-height: 300px;
    position: relative;
    text-align: center;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        left: 0;
    }

    /* @media screen and (min-width: 501px){
        height: 300px;
    }
    @media screen and (min-width: 700px){
        height: 400px;
    } */
`


export const Title2 = styled.div`
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    position: absolute;
    bottom: 0;
    height: 60%;
    text-align: center;
    z-index: 4;
    width: 100%;
    left: 50%;
    transform: translate(-50%, 0);
`