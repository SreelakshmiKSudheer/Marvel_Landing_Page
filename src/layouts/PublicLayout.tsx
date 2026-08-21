import Header from '../components/organisms/Header/Header'
import Footer from '../components/organisms/Footer/Footer'
import { Outlet } from 'react-router'

const PublicLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout
