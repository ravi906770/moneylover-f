import React , {useState} from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom"
import register from "../assets/signup.gif"
import bg from "../assets/hero-bg.png"
import {useAuth}  from '../context/authContext'
import axios from 'axios'

type Props = {}

const Login = (props: Props) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setAuth} = useAuth();


  const navigate = useNavigate();
  const location = useLocation();
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/login`, {
        email,
        password,
      },{
        headers : {"Content-Type" : "application/json"},
        withCredentials : true
    });

    console.log(res)

    if(res){
      const access_token = res?.data.access_token;
      localStorage.setItem("access_token",access_token)
      setAuth({user:{
        email,
        password
      } ,access_token})

      navigate("/")
    }
    // console.log(res.data)
   
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <section className=" flex items-center  bg-no-repeat bg-center bg-cover py-[60px] 2xl:h-[800px]" style={{ backgroundImage: `url(${bg})` }}>
      <div className="max-w-full w-[1440px] px-5 mx-auto">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

          {/* ================== Hero Content ================== */}
          <div className="justify-between items-end">
            <img src={register} alt="" className="w-full rounded-full" />
          </div>
          {/* ================== Hero Content ================== */}
          <div className="flex gap-[30px] justify-between items-start w-full">
            <form className="w-full max-w-lg" onSubmit={()=>handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    email
                  </label>
                  <input  onChange={(e) => setEmail(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter Your Email" required />
                </div>
                
              </div>
              <div className="w-full md:w-1/2">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    password
                  </label>
                  <input  onChange={(e) => setPassword(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="password" placeholder="Enter Your Password" required />
                </div>
                <Link to="/forgot-password">
                <div className="w-full md:w-1/2 mt-10">
                  <label className="block uppercase tracking-wide text-primaryColor underline text-xs font-bold mb-2">
                    Forgot Password
                  </label>
                </div>
                </Link>
               
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  
                    <button type='submit' className="mt-10 bg-primaryColor text-white w-full h-full font-bold hover:bg-green-400 rounded-full">Login</button>
  
                </div>
              </div>

              <Link to="/register">
                <div className="flex flex-wrap -mx-3 mt-[75px]">
                  <div className="w-full px-3">
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      Don't have an Account ? Go to <span className='text-primaryColor text-[15px] font-bold underline'>Register</span>
                    </label>
                  </div>
                </div>
                </Link>
            </form>
            
          </div>


        </div>
      </div>
    </section>
    </>
  )
}

export default Login;