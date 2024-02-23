import React from 'react'
import Header from '../components/Header'
import Routing from '../routes/Routing'
import Footer from '../components/Footer'

type Props = {}

const Layout = (props: Props) => {
  return (
    <>
    <Header/>
        <main>
            <Routing/>
        </main>
    <Footer/>
    </>
  )
}

export default Layout