import React, {  useState } from 'react'
import { Input, InputBox } from '../../../Styles/Form/form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import "../../../babel-plugin-macros.config"
import "../../../babel.config"
import "../../../Styles/Form/form.css"



const Pass = (props) => {

const [Type, setType]=useState("password")
const [Icon,setIcon]=useState(faEyeSlash)
const [borderColor,setBorderColor]=useState("#A9A9A999")
const [colorBox,setColorBox]=useState("#A9A9A999")

function changeEye(){
  if (Type === "password") {
    setType("text")
    setIcon(faEye)
  }else{
    setType("password")
    setIcon(faEyeSlash)
  }
  
}

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
      <FontAwesomeIcon  className='left-ikon' icon={faLock}/>
      <Input  type={Type} placeholder={props.placeholder} onInput={changeColor} />
      <FontAwesomeIcon  className='ikon' icon={Icon} onClick={changeEye}/>
    </InputBox>
  )
}

export default Pass