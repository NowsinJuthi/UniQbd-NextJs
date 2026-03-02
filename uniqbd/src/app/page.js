import React from 'react'
import HomeSlider from './components/HomePage/Slider'
import Topup from './components/HomePage/GameTopUp/Topup'
import GiftCard from './components/HomePage/GiftCard/GiftCard'
import Footer from './components/Footer/Footer'

function page() {
  return (
    <div>
      <h1 className=''>
        <HomeSlider/>
        <Topup/>
        <GiftCard/>
      </h1>
    </div>
  )
}

export default page
