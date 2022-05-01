import React from 'react'
import { Input, InputBox } from '../../../Styles/Form/form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import "../../../babel-plugin-macros.config"
import "../../../babel.config"
import "../../../Styles/Form/form.css"


const Pass = () => {
  return (
    <InputBox>
      <FontAwesomeIcon className='ikon' icon={faEyeSlash}/>
      <Input type="password" placeholder='Password'/>
    </InputBox>
  )
}

export default Pass