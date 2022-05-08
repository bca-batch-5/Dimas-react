import React, {useState} from 'react'
import { Input, InputBox } from '../../../Styles/Form/form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "../../../babel-plugin-macros.config"
import "../../../babel.config"
import "../../../Styles/Form/form.css"

const Email = () => {
  const [borderColor,setBorderColor]=useState("#A9A9A999")
  const [colorBox,setColorBox]=useState("#A9A9A999")
  
  
  function changeColor(e) {
    if (e.target.value !== "") {
      setBorderColor("blue")
      setColorBox("blue")
    }else{
      setBorderColor("#A9A9A999")
      setColorBox("#A9A9A999")
    }
    
  }
  return (
    <InputBox borderColor={borderColor} colorBox={colorBox} >
      <FontAwesomeIcon className='left-ikon' icon={faEnvelope}  /> 
      <Input  type="email" placeholder='example@example.com' onInput={changeColor}/>
    </InputBox>
  )
}

export default Email