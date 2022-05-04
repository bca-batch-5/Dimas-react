import React from 'react'
import Halaman from '../../Layouts/halaman'
import TitleOne from "../../Component/TitleOne"
import Email from '../../Component/Form/Email'
import "./login.css"
import SubTitle from '../../Component/SubTitle'
import Pass from '../../Component/Form/Pass'
import Button from '../../Component/Button'

const Login = () => {
  return (
    <Halaman>
      <TitleOne>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</TitleOne>
      <SubTitle>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</SubTitle>
      <form className='form-box'>
        <Email/>
        <br /><br /><br />
        <Pass/>
        <div className='forgotPass'>
        <a href="#">Forgot Password?</a>
        </div>
        <Button>Login</Button>
        <div className='signup'>
          <p>Don't have an account? Lets <a href="#">Sign Up</a></p>
        </div>
      </form>
    </Halaman>
  )
}

export default Login