import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Component/Button'
import Pin from '../../Component/Pin'
import SubTitle from '../../Component/SubTitle'
import TitleOne from '../../Component/TitleOne'
import Halaman from '../../Layouts/halaman'
import '../login/login.css'

const CreatePin = () => {
  return (
   <Halaman>
    <TitleOne>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</TitleOne>
    <SubTitle>Create 6 digits pin to secure all your money and your data in PayPay app. Keep it secret and don't tell anyone about your Zwallet account password and the PIN.</SubTitle>
    <form className='form-box'>
        <Pin/>
        <Link to={'./succespin'}>
        <Button>Confirm</Button>
        </Link>
    </form>
   </Halaman>
  )
}

export default CreatePin