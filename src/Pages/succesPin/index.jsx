import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Component/Button'
import SubTitle from '../../Component/SubTitle'
import TitleOne from '../../Component/TitleOne'
import Halaman from '../../Layouts/halaman'
import '../login/login.css'
import Succes from '../../assets/success.png'

const SuccesPin = () => {
  return (
    <Halaman>
        <img src={Succes} alt="succesIcon" className='succesIcon' />
        <TitleOne>Your PIN Was Successfully Created</TitleOne>
        <SubTitle>Your PIN was successfully created and you can now access all the features in PayPay. Login to your new account and start exploring!</SubTitle>
        <form className='form-box'>
        <Link to={'/'}>
        <Button>Login Now</Button>
        </Link>
    </form>
    </Halaman>
  )
}

export default SuccesPin