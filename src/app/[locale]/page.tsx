import Footer from '@/components/layouts/footer'
import Header from '@/components/layouts/header'

import Arena from '@/components/ui/arena'
import Character from '@/components/ui/character'
import Hero from '@/components/ui/hero'

async function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Character />
      <Arena />
      <Footer />
    </div>
  )
}

export default HomePage
