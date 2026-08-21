import { heroData } from '../../data/hero'
import { Hero } from '../../components/organisms/Hero/Hero'
import { StoriesSection } from '../../components/organisms/StoriesSection/StoriesSection'
import { CharacterCarousel } from '../../components/organisms/CharacterCarousel/CharacterCarousel'
// import StorySection from '../../components/organisms/StorySection/StorySection'

const LandingPage = () => {
  return (
    <div>
      <Hero {...heroData} />
      <StoriesSection />
      {/* <StorySection /> */}
      <CharacterCarousel />
    </div>
  )
}

export default LandingPage

