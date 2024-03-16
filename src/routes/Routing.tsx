import React from 'react'
import { Route , Routes } from 'react-router-dom';
// import ErrorBoundary from '../ErrorBoundry/ErrorBoundry';
import Error from '../ErrorBoundry/Error';
import { useAuth } from '../context/authContext';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import SplitBill from '../pages/SplitBill';
import Settings from '../pages/Settings';
import Loader from '../components/Loader';
const Register = React.lazy(()=>import('../pages/Register')) ;
const Homepage = React.lazy(()=>import('../pages/Homepage')) ;
const Login = React.lazy(()=>import('../pages/Login')) ;
const Category = React.lazy(()=>import('../pages/Category')) ;
const Transaction = React.lazy(()=>import('../pages/Transaction')) ;
const Blog = React.lazy(()=>import('../pages/Blog')) ;
const About = React.lazy(()=>import('../pages/About')) ;
const Feedback = React.lazy(()=>import('../pages/Feedback')) ;

const Account = React.lazy(()=>import('../pages/Account')) ;
const ForgotPassword = React.lazy(()=>import('../pages/ForgotPassword')) ;
const UseForm = React.lazy(()=>import('../pages/UseForm')) ;
const YupForm = React.lazy(() => import('../pages/YupForm'));
const ContactUs = React.lazy(()=>import('../pages/ContactUs')) ;
const Chat = React.lazy(()=> import('../pages/Chat') )

const Test = React.lazy(()=>import('../pages/Test'))


type Props = {}

const Routing = (props: Props) => {

  const {auth} = useAuth();

  return (
    <>
    <React.Suspense fallback={<Loader/>}>  
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/split' element={<Profile/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/useForm' element={<UseForm/>}/>
        <Route path='/setting' element={<Settings/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/form' element={<YupForm/>}/>
        <Route path='/error' element={<Error/>}/>
        <Route path='/test' element={<Test/>}/>
    </Routes>
    
  
    </React.Suspense>
 
    </>
  )
}

export default Routing