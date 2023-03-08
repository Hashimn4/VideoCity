import styled from "styled-components";

export const ContactContainer = styled.div`
    background-color: #3C86BF;
    height: 100vh;
    //padding-top: 5em;
    padding: 1em;
`

export const ContactSection = styled.div`
   margin: 0 auto;
   margin-top: 3em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    //border: 1px solid white;
    background-color: #1674BC;
    border-radius: 25px;
    padding: 1em;
    width: min(100%, 600px);
`

export const ContactTitle = styled.div`
    font-size: 3rem;
    color: white;
    font-weight: 600;
    text-align: center;
    //margin-bottom: 0.5em;

`

export const ContactForm = styled.form`
    width: 100%;
    height: 100%;
    
    
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    //gap: 1em;
    input {
        width: 100%;
        height: 100%;
        padding: 1em;
        background-color: #1674BC;
        color: white;
        border: none;
        //z-index: 2;
        font-size: 1.5rem;
        outline: none;
        ::placeholder {
            color: white;
            opacity: 0.5;}
            //z-index: 3;
        :-webkit-autofill,
        :-webkit-autofill:hover,
        :-webkit-autofill:focus,
        :-webkit-autofill:active {
            transition: all 0s 50000s;
            
        }
        
    }
    textarea {
        width: 100%;
        height: 100%;
        padding: 1em;
        background-color: #1674BC;
        color: white;
        border: none;
        
        font-size: 1.5rem;
        outline: none;
        ::placeholder {
            color: white;
            opacity: 0.5;
        }
    }
`

export const Name = styled.div`
    color: white;
    border-bottom: 1px solid white;
    //padding-bottom: 1em;
    //font-size: 2rem;
    //background-color: black;
    //transition: 2s ease-in-out;
    //box-sizing: border-box;
    :hover{
        border: 1px solid white;
        
    }

`

export const Email = styled.div`
    //color: white;
    border-bottom: 1px solid white;
    //padding-bottom: 1em;
    //font-size: 1.2rem;
    //background-color: blue;
    :hover {
        border: 1px solid white;
    }
`

export const Message = styled.div`
    color: white;
    border-bottom: 1px solid white;
    //padding-bottom: 1em;
    font-size: 1.2rem;
    //background-color: black;
    :hover {
        border: 1px solid white;
    }
`

export const ContactButton = styled.button`
    width: min(100%, 20em);
    text-align: center;
    padding: 15px 0;
    margin-top: 2em;
    margin-left: auto;
    margin-right: auto;
   //margin: 0 auto;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 10px;
    color: #3C86BF;
    background-color: white;
    border: none;
    transition: 0.3s ease-in-out;
    :hover {
        background-color: #3C86BF;
        color: white;
        cursor: pointer;
    }
`