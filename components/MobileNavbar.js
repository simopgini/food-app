import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { HiHome, HiOutlineHome, HiSearch, HiOutlineSearch, HiClipboardList, HiOutlineClipboardList, HiUser, HiOutlineUser } from 'react-icons/hi';


const MobileNavbar = () => {

    // const [toggle, setToggle] = useState(false)
    //     const handleClick = () => {
    //     setToggle(!toggle)
    // }

    // const [active, setActive] = useState(false)
    // const handleClick = () => {
    //     setActive(!active)
    // }

    // const [color, setColor] = useState("green")
    // const handleClick = (color) => {
    //     setColor(color)
    // }

    // useEffect(() => {
    //     document.body.style.color = color
    // }, [color])

    // const [color, setColor] = useState("green")
    // const handleClick = (e) => {
    //     setColor(e.target.value)
    // }

    const router = useRouter();

    const [toggle, setToggle] = useState("active")
        const handleClick = () => {
        setToggle("deactive")
    }
    
    // const [icon, setIcon] = useState(<HiHome className='h-6 w-6 mr-1 hover:text-green transition'/>)
    // const handleIcon = () => {
    //     setIcon(<HiOutlineHome className='h-6 w-6 mr-1 hover:text-green transition'/>)
    // }

    // const [isActive, setIsActive] = useState(false);
    // const [isActive2, setIsActive2] = useState(false);
    // const [isActive3, setIsActive3] = useState(false);
    // const [isActive4, setIsActive4] = useState(false);


return (
    <nav className='sticky bottom-0 bg-white border-t border-gray-line'>
        <ul className='py-6 pb-8 px-10 flex justify-between items-center text-sm'>

            <li>
                <Link href="/" legacyBehavior>
                    <button className={router.pathname == "/" ? "active" : "deactive"}
                                onClick={handleClick}
                                >
                        {toggle ? <HiHome className='h-6 w-6 mr-1 hover:text-green transition'/> : <HiOutlineHome className='h-6 w-6 mr-1 hover:text-green transition'/>}
                    </button>
                </Link>
             </li>

            <li>
                <Link href="/search" legacyBehavior>
                    <a className={router.pathname == "/search" ? "active" : "deactive"}
                        onClick={handleClick}>
                        {toggle ? <HiSearch className='h-6 w-6 mr-1 hover:text-green transition'/> : <HiOutlineSearch className='h-6 w-6 mr-1 hover:text-green transition'/>}
                    </a>
                </Link>
            </li>
            
            <li>
                <Link href="/list" legacyBehavior>
                    <a className={router.pathname == "/list" ? "active" : "deactive"}
                    onClick={handleClick}>
                    {toggle ? <HiClipboardList className='h-6 w-6 mr-1 hover:text-green transition'/> : <HiOutlineClipboardList className='h-6 w-6 mr-1 hover:text-green transition'/>}                    
                    </a>
                </Link>
            </li>
            
            <li>
                <Link href="/profile" legacyBehavior>
                    <a className={router.pathname == "/profile" ? "active" : "deactive"}
                    onClick={handleClick}>
                    {toggle ? <HiUser className='h-6 w-6 mr-1 hover:text-green transition'/> : <HiOutlineUser className='h-6 w-6 mr-1 hover:text-green transition'/>}                    
                    </a>
                </Link>
            </li>






            {/* TEST */}
            {/* <li>
                <Link href="/" legacyBehavior>
                    <button className={router.pathname == "/" ? "active" : "deactive"} onClick={handleClick}>
                        {isActive ? <HiHome className='h-6 w-6 mr-1 hover:text-green transition' onClick={()=>{setIsActive(!isActive)}}/> : 
                                  <HiOutlineHome className='h-6 w-6 mr-1 hover:text-green transition' onClick={()=>{setIsActive(!isActive)}} />}            
                    </button>
                </Link>
             </li>

            <li>
                <Link href="/search" legacyBehavior>
                    <a className={router.pathname == "/search" ? "active" : "deactive"} onClick={handleClick}>
                        {isActive2 ? <HiSearch className='h-6 w-6 mr-1 hover:text-green transition' onClick={()=>{setIsActive2(!isActive)}}/> : 
                                  <HiOutlineSearch className='h-6 w-6 mr-1 hover:text-green transition' onClick={()=>{setIsActive2(!isActive)}} />}    
                    </a>
                </Link>
            </li>
            
            <li>
                <Link href="/list" legacyBehavior>
                    <a className={router.pathname == "/list" ? "active" : "deactive"} onClick={handleClick}>
                        {isActive3 ? <HiClipboardList className='h-6 w-6 mr-1 hover:text-green transition' onClick={()=>{setIsActive3(!isActive)}}/> : 
                                  <HiOutlineClipboardList className='h-6 w-6 mr-1 hover:text-green transition' onClick={()=>{setIsActive3(!isActive)}} />}
                    </a>
                </Link>
            </li>
            
            <li>
                <Link href="/profile" legacyBehavior>
                    <a className={router.pathname == "/profile" ? "active" : "deactive"} onClick={handleClick}>
                        {isActive4 ? <HiUser className='h-6 w-6 mr-1 hover:text-green transition' onClick={()=>{setIsActive4(!isActive)}}/> : 
                                  <HiOutlineUser className='h-6 w-6 mr-1 hover:text-green transition' onClick={()=>{setIsActive4(!isActive)}} />}
                    </a>
                </Link>
            </li> */}

            


            {/* <li>
                <Link href="/" legacyBehavior>
                    <a className={router.pathname == "/" ? "active" : "deactive"}>
                        <HomeIcon  className='h-6 w-6 mr-1 hover:text-green' 
                        />
                    </a>
                </Link>
             </li>

            <li>
                <a className={router.pathname == "/search" ? "active" : "deactive"}>
                    <Link href="/search" legacyBehavior>
                        <MagnifyingGlassIcon className='h-6 w-6 mr-1 hover:text-green transition ' />
                    </Link>
                </a>
            </li>
            
            <li>
                <a className={router.pathname == "/list" ? "active" : "deactive"}>
                    <Link href="/list" legacyBehavior>
                        <ClipboardIcon className='h-6 w-6 mr-1 hover:text-green' />                
                    </Link>
                </a>
            </li>
            
            <li>
                <a className={router.pathname == "/profile" ? "active" : "deactive"}>
                    <Link href="/profile" legacyBehavior>
                        <UserIcon disabled className='h-6 w-6 mr-1 hover:text-green' />
                    </Link>
                </a>

            </li> */}

        {/* <Link href="/">
            <HomeIcon default className='h-6 w-6 mr-1 text-green disabled:text-gray' />
        </Link>
        <Link href="/search">
            <MagnifyingGlassIcon disabled className='h-6 w-6 mr-1 text-gray hover:text-green active:text-green ' />
        </Link>
        <Link href="/list">
            <ClipboardIcon disabled className='h-6 w-6 mr-1 text-gray hover:text-green active:text-green ' />                
        </Link>
        <Link href="/profile">
            <UserIcon disabled className='h-6 w-6 mr-1 text-gray hover:text-green active:text-green ' />
        </Link> */}

        </ul>
    </nav>

    )
}

export default MobileNavbar;


