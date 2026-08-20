import React from 'react'
import { heroData } from '../../data/hero'
import { Hero } from '../../components/organisms/Hero/Hero'
import { StoriesSection } from '../../components/organisms/StoriesSection/StoriesSection'

const LandingPage = () => {
  return (
    <div>
      <Hero {...heroData} />
      <StoriesSection />
    </div>
  )
}

export default LandingPage
