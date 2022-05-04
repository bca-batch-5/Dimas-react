import React from 'react'
import { InputPin, PinBox } from '../../Styles/Pin/PinStyle'


const Pin = () => {
  return (
    <PinBox>
        <InputPin type="text" maxLength={1} id="first"/>
        <InputPin type="text" maxLength={1} id="sec"/>
        <InputPin type="text" maxLength={1} id="third"/>
        <InputPin type="text" maxLength={1} id="fourth"/>
        <InputPin type="text" maxLength={1} id="fifth"/>
        <InputPin type="text" maxLength={1} id="six"/>
    </PinBox>
  )
}

export default Pin