import React from 'react'
import Halaman from '../../Layouts/halaman'
import TitleOne from '../../Component/TitleOne'
import SubTitle from '../../Component/SubTitle'
import Email from '../../Component/Form/Email'
import Pass from '../../Component/Form/Pass'
import Button from '../../Component/Button'
import { Link } from 'react-router-dom'
import "../login/login.css"
import Username from '../../Component/Form/UserName'

const Signup = () => {
  return (
    <Halaman>
      <TitleOne>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</TitleOne>
      <SubTitle>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</SubTitle>
      <form className='form-box'>
        <Username/>
        <Email/>
        <Pass placeholder="Password"/>
        <Button>Sign Up</Button>
        <div className='login'>
          <p>Already have an account? Let's <Link to={'/'} className="direction-two" >Login</Link></p>
        </div>
      </form>
    </Halaman>
  )
}

export default Signup