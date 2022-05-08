import styled from "styled-components";

export const InputBox = styled.div`
    border: none;
    border-bottom : 2px solid ${(props) => props.borderColor };
    width : 60%;
    padding-top: 70px;
    color:${(props) => props.colorBox };
`

export const Input = styled.input`
    border: none;
    outline: none;
    align-items: center;
    height: 25px;
    padding-left: 10px;
    width: 87%;
`
