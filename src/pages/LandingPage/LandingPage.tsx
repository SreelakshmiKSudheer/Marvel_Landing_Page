import { heroData } from '../../data/hero'
import { Hero } from '../../components/organisms/Hero/Hero'
import { UniverseMap } from '../../components/organisms/UniverseMap/UniverseMap'
import { StoriesSection } from '../../components/organisms/StoriesSection/StoriesSection'
import { CharacterCarousel } from '../../components/organisms/CharacterCarousel/CharacterCarousel'
import { NewsSection } from '../../components/organisms/NewsSection/NewsSection'
import { UnlimitedBanner } from '../../components/organisms/UnlimitedBanner/UnlimitedBanner'

const LandingPage = () => {
  return (
    <div>
      <Hero {...heroData} />
      {/* <UniverseMap /> */}
      <StoriesSection />
      <CharacterCarousel />
      <NewsSection />
      <UnlimitedBanner />
    </div>
  )
}

export default LandingPage
