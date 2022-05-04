import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Input, InputBox } from '../../../Styles/Form/form'
import "../../../babel-plugin-macros.config"
import "../../../babel.config"
import "../../../Styles/Form/form.css"


const Username = () => {
  return (
    <InputBox>
      <FontAwesomeIcon className='ikon' icon={faUser}/>
      <Input type="text" placeholder='Username'/>
    </InputBox>
  )
}

export default Username