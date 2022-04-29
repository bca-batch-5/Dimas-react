import React from 'react'
import "../../Styles/HalamanLayout/halamanStyle"
import { HalamanBox, HalKanan, HalKiri, ImageBox, TextKiri, TextKiriSub, } from '../../Styles/HalamanLayout/halamanStyle'
import ImgPhone1 from "../../assets/png-phone.png"
import ImgPhone2 from "../../assets/png-phone2.png"
import '../../Styles/HalamanLayout/HalamanStyle.css';

const halaman = (props) => {
    const{ children }=props;

  return (
    <HalamanBox>
        <HalKiri>
          <div className='title'>
            <p>PayPay</p>
          </div>
          <ImageBox>
          <img src={ImgPhone2} alt="phone2" className='phone-2'/>
          <img src={ImgPhone1} alt="phone1" className='phone-1'/>
          </ImageBox>
          <TextKiri>
            <h2 className='title-text'>App that Covering Banking Needs.</h2>
            <br />
            <TextKiriSub >
            <p className='subtext'>PayPay is an application that focussing in banking needs for all users
              in the world. Always updated and always following world trends.
              5000+ users registered in PayPay everyday with worldwide
              users coverage.</p>
            </TextKiriSub>
          </TextKiri>
        </HalKiri>
        <HalKanan>{children}</HalKanan>
    </HalamanBox>
  )
}

export default halaman