import React from 'react'
import { ButtonBox, Tombol } from '../../Styles/Button/Button';

const Button = (props) => {
const{children}=props;


  return (
    <ButtonBox>
        <Tombol>{children}</Tombol>
    </ButtonBox>
  )
}

export default Button