import React from 'react'
import "./halamanStyle"
import { HalamanBox, HalKanan, HalKiri } from './halamanStyle'



const halaman = (props) => {
    const{ children,textKanan }=props;

  return (
    <HalamanBox>
        <HalKiri>
           <h1>Selamat Datang</h1>
        </HalKiri>
        <HalKanan>{textKanan}</HalKanan>
    </HalamanBox>
  )
}

export default halaman