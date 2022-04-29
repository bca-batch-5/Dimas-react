import styled from "styled-components";
import img from "../../assets/group.svg"

export const HalamanBox = styled.div`
    display: flex;
    justify-content :center;
    align-items: center;
    width: 1440px;
    height: 961px;
`
export const HalKiri = styled.section`
    width: 55%;
    height : 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
`

export const HalKanan = styled.section`
    width: 45%;
    height : 100%;
    background-color: white;
`
export const ImageBox = styled.div`
    margin-top: 45px;
    width: 100%;
`

export const TextKiri =styled.div`
    margin-top: 570px;
    width: 100%;
    text-align: center;
    color : white;
`

export const TextKiriSub =styled.div`
    width:70%;
    margin-left: 15%;
    text-align :left;
`