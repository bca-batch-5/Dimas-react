import styled from "styled-components";

export const ButtonBox = styled.div`
    width: 60%;
    margin-top: 130px;
    
`
export const Tombol = styled.button`
    width: 100%;
    background-color: blue;
    font-size: 20px;
    color: white;
    border : none;
    border-radius : 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    height: 35px;

    &:hover {
        background-color: black;
    }
`