import React from 'react'
import Header from '../components/Header'
import Routing from '../routes/Routing'
import Footer from '../components/Footer'
import MyChatBot from '../components/MyChatbot'

type Props = {}

const Layout = (props: Props) => {
  return (
    <>
    <Header/>
        <main>
            <Routing/>
            <MyChatBot/>
        </main>
       
    <Footer/>
    </>
  )
}

export default Layout