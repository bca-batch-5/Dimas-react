import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import React,{useState} from 'react'
import { Input, InputBox } from '../../../Styles/Form/form'
import "../../../babel-plugin-macros.config"
import "../../../babel.config"
import "../../../Styles/Form/form.css"


const Username = () => {
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
    <InputBox borderColor={borderColor} colorBox={colorBox}>
      <FontAwesomeIcon className='left-ikon' icon={faUser}/>
      <Input type="text" placeholder='Username' onInput={changeColor}/>
    </InputBox>
  )
}

export default Username