import React from 'react'
import "../../Styles/Title/Title"
import { TitleBox, TitleText } from '../../Styles/Title/Title';

const TitleOne = (props) => {
  const{children}=props;

  return (
    <TitleBox>
        <TitleText>{children}</TitleText>
    </TitleBox>
  )
}

export default TitleOne