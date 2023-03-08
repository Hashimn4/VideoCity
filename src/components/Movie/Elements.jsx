import styled from "styled-components";

export const Body = styled.div`
    background-color: #3C86BF;
`
export const Container = styled.div`
    text-align: center;
    width: min(100%, 1100px);
    margin: 0 auto;
    padding: 10px;
    height: 100%;
`

export const Box = styled.div`
    @media screen and (min-width: 800px){
        position: relative;
    }
`

export const Image = styled.div`
    height: 400px;
    margin-bottom: 10px;
    img {
        width: 100%;
        object-fit: cover;
        height: 100%;
        @media screen and (min-width: 800px){
            position: absolute;
            left: 0;
        }
    }

`

export const Gradient2 = styled.div`
    @media screen and (min-width: 800px){
        background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0));
        z-index: 3;
        position: absolute;
        width: 100%;
        height: 100%;
    }
   
`

export const Content = styled.div`
    
    width: 100%;
    color: white;
    z-index: 4;
    & :nth-child(3) {
        line-height: 1.5rem;
    }
    
    @media screen and (min-width: 800px){
        position: absolute;
        top: 5em;
        left: 2em;
        width: 27em;
        text-align: left; 
    }
`

export const Title = styled.div`
    font-size: 1.45rem;
    font-weight: 600;
    text-align: center;
    color: white;
    @media screen and (min-width: 800px){
        font-size: 2rem;
    }
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
    align-items: center;
`

export const Rating = styled.div`
    text-align: center;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    gap: .2em;
    align-items: center;
    & :nth-child(1) {
        color: gold;
    }
`

export const Runtime = styled.div`
    text-align: center;
    color: white;
    font-weight: 600;
`

export const ReleaseYear = styled.div`
    font-weight: 600;
    color: white;
    text-align: center;
`

export const CastContainer = styled.div`
    //padding-top: 0.5em;
    margin: 20px 0;
    //padding-left: 10px;
`

export const Cast = styled.div`
    overflow: hidden;
    height: 300px;
    position: relative;
    border-radius: 50%;
    margin-top: 10px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        //opacity: .8;
        position: absolute;
        left: 0;
    }
    p {
        position: absolute;
        color: white;
        left: 50%;
        bottom: 0;
        height: 40%;
        transform: translate(-50%, 0);
        z-index: 5;
        font-size: 1.1rem;
        font-weight: 600;
    }
`

export const ReviewContainer = styled.div`
    max-width: 40em;
    background-color: #1674BC;
    height: 400px;
    overflow-y: scroll;
    margin: 0 auto;
    border-radius: 25px;
    color: white;
`

export const Review = styled.div`
    text-align: center;
    padding: 0 10px;
    line-height: 1.5rem;
    //display: block;
    
    color: white;
    border-radius: 25px;
    height: 100%;
`

export const SimilarContainer = styled.div`
    max-width: 1100px;
    margin: 20px auto;
`

export const SimilarMovie = styled.div`
    background-color: beige;
    font-size: 1.2rem;
    overflow: hidden;
    padding-top: 10px;
`