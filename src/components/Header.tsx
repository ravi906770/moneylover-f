import React, { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import logo from "../assets/logo2.png"
import userImg from "../assets/avatar-icon.png"
import bg from "../assets/header-bg.png"
// import { useAuth } from "../context/authContext";



const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/transaction',
        display: 'Transaction'
    },
    {
        path: '/category',
        display: 'Category'
    },
    {
        path: '/blog',
        display: 'Blog'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
    {
        path: '/feedback',
        display: 'Feedback'
    },
    {
        path: '/faq',
        display: 'FAQ'
    }
]

const Header: React.FC = () => {

    // const {setAuth} = useAuth();


    const headerRef = useRef<HTMLElement>(null);

    const menuRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current?.classList.add('sticky_header');
            } else {
                headerRef.current?.classList.remove('sticky_header');
            }
        };

        window.addEventListener("scroll", handleScroll);
    

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); 


    const toggleMenu = () => menuRef.current?.classList.toggle('show_menu');



    return (

        <header className="header flex items-center bg-no-repeat bg-cover bg-center w-full h-[100px] leading-[100px]" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container max-w-full w-[1440px] px-5 mx-auto">
                <div className="flex items-center justify-between">

                    {/* logo  */}
                    <Link to="/"> 
                    <div>
                        <img src={logo} alt="" className="w-[250px] h-[30px]" />
                    </div>
                    </Link>
                   


                    {/* menuitem */}

                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {
                                navLinks.map((link, index) => {
                                    return (
                                        <>
                                            <li key={index}>
                                                <NavLink to={link.path} className={(navClass) => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[600]'} >
                                                    {link.display}
                                                </NavLink>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>



                    {/* nav right */}
                    <div className="flex items-center gap-4">
                        <div className="">
                            <Link to="/">
                                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                                    <img className="w-full rounded-full" src={userImg} alt="" />
                                </figure>
                            </Link>
                        </div>

                        <Link to="/register">
                            <button className="bg-primaryColor hover:bg-green-400 text-white py-2 px-6 font-[600] h-[44px] flex items-center justify-center
                  rounded-[50px]">Sign Up</button>
                        </Link>
                        <span className="md:hidden" onClick={toggleMenu}>
                            <BiMenu className="w-6 h-6 cursor-pointer" />
                        </span>
                    </div>
                </div>
            </div>
        </header> 
    )
}

export default Header