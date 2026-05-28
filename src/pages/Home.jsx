import React from 'react'
import Hero from '../components/layout/Hero'
import GenderCollection from '../components/poduct/GenderCollection'
import NewArrivals from '../components/poduct/NewArrivals'
import ProductDetails from '../components/poduct/ProductDetails'
import ProductGrid from '../components/poduct/ProductGrid'
import FeaturedCollection from '../components/poduct/FeaturedCollection'
import FeaturedSection from '../components/poduct/FeaturedSection'
 

const  placeholderProducts =[
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=12" }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=7" }],
  },
   {
    _id: 5,
    name: "Product 5",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=9" }],
  },
  {
    _id: 7,
    name: "Product 7",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=10" }],
  },
  {
    _id: 8,
    name: "Product 8",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=11" }],
  },
]
function Home() {
  return (
    <div>
        <Hero/>
        <GenderCollection/>
        <NewArrivals/>
        {/* best seller */}
        <h2 className='text-3xl text-center font-bold mb-4 '> best seller</h2>
        <ProductDetails/>

        <div className='container mx-auto'>
          <h2 className='text-3xl text-center font-bold mb-4'> top wear for women </h2>
          <ProductGrid products={placeholderProducts}/>
        </div>
        <FeaturedCollection/>
        <FeaturedSection/>
    </div>
  )
}

export default Home