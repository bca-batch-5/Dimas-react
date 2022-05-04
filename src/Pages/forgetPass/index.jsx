import React from 'react'
import Halaman from '../../Layouts/halaman'
import TitleOne from "../../Component/TitleOne"
import SubTitle from '../../Component/SubTitle'
import "../login/login.css"
import Button from '../../Component/Button'
import Email from '../../Component/Form/Email'
import { Link } from 'react-router-dom'

const ForgetPass = () => {
  return (
    <Halaman>
      <TitleOne>Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In a Minutes.</TitleOne>
      <SubTitle>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</SubTitle>
      <form className='form-box'>
        <Email/>
        <Link to={'/resetpass'}>
        <Button>Confirm</Button>
        </Link>
      </form>
    
    </Halaman>
  )
}

export default ForgetPass