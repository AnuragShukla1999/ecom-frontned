import React from 'react'
import Navbar from '../components/Navbar'
import Layout from '../Layout/Layout'
import Carousel from '../components/Carousel'
import Product from '../components/Product'

const Home = () => {
  return (
    <Layout>
        {/* <Navbar/> */}

        <Carousel/>

        <Product/>
    </Layout>
  )
}

export default Home
