import React from 'react'
import { Route , Routes } from 'react-router-dom';
import Register from '../pages/Register';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Category from '../pages/Category';
import Transaction from '../pages/Transaction';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Feedback from '../pages/Feedback';
import ContactUs from '../pages/ContactUs';
import Account from '../pages/Account';
import FAQ from '../pages/FAQ';
import ForgotPassword from '../pages/ForgotPassword';


type Props = {}

const Routing = (props: Props) => {
  return (
    <>
   
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
    </Routes>
    </>
  )
}

export default Routing