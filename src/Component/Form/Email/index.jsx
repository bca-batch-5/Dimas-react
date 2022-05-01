import React from 'react'
import { Input, InputBox } from '../../../Styles/Form/form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "../../../babel-plugin-macros.config"
import "../../../babel.config"
import "../../../Styles/Form/form.css"

const Email = () => {
  return (
    <InputBox>
      <FontAwesomeIcon className='ikon' icon={faEnvelope} /> 
      <Input type="email" placeholder='example@example.com'/>
    </InputBox>
  )
}

export default Email