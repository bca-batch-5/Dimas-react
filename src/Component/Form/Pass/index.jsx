import React from 'react'
import { Input, InputBox } from '../../../Styles/Form/form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import "../../../babel-plugin-macros.config"
import "../../../babel.config"
import "../../../Styles/Form/form.css"


const Pass = (props) => {
  const {placeholder}=props;
  return (
    <InputBox>
      <FontAwesomeIcon className='lock' icon={faLock}/>
      <Input type="password" placeholder={placeholder}/>
      <FontAwesomeIcon className='ikon' icon={faEyeSlash}/>
    </InputBox>
  )
}

export default Pass