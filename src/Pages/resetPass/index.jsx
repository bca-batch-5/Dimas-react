import React from 'react'
import Halaman from '../../Layouts/halaman'
import TitleOne from '../../Component/TitleOne'
import SubTitle from '../../Component/SubTitle'
import Pass from '../../Component/Form/Pass'
import Button from '../../Component/Button'
import { Link } from 'react-router-dom'
import "../login/login.css"

const ResetPass = () => {
  return (
    <Halaman>
        <TitleOne>Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In a Minutes.</TitleOne>
        <SubTitle>Now you can create a new password for your PayPay account. Type your password twice so we can confirm your new passsword.</SubTitle>
        <form className='form-box'>
            <Pass placeholder="Create New Password"/>
            <Pass placeholder="Create New Password"/>
            <Link to={'/'}>
            <Button>Confirm</Button>
            </Link>
        </form>
    </Halaman>
  )
}

export default ResetPass