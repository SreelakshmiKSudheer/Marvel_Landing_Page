import React from 'react'
import { heroData } from '../../data/hero'
import { Hero } from '../../components/organisms/Hero/Hero'

const LandingPage = () => {
  return (
    <div>
      <Hero {...heroData} />
      
    </div>
  )
}

export default LandingPage
