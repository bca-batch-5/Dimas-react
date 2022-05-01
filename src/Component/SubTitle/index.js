import React from 'react'
import { SubTitleBox, SubTitleText } from '../../Styles/subTitle/subTitle';


const SubTitle = (props) => {
const{ children }=props;

  return (
    <SubTitleBox>
        <SubTitleText>
            {children}
        </SubTitleText>
    </SubTitleBox>
  )
}

export default SubTitle