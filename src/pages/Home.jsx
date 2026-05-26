import React from 'react'
import Hero from '../components/layout/Hero'
import GenderCollection from '../components/poduct/GenderCollection'
import NewArrivals from '../components/poduct/NewArrivals'

function Home() {
  return (
    <div>
        <Hero/>
        <GenderCollection/>
        <NewArrivals/>
    </div>
  )
}

export default Home