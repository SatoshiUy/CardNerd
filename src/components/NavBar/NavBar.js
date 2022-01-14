import { useState } from 'react';
import { BsFillSunFill } from 'react-icons/bs'
import { HiOutlineMenu } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'
import useDarkMode from '../CustomHooks/useDarkMode';
const NavBar = ({isMobile}) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [isDarkMode, toggleDarkMode] = useDarkMode()
  const hangleMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <div className='flex items-center'>
      <div className='flex items-center'>
        <div className='text-20 mr-2 font-bold'>CardNerd</div>
        {!isDarkMode ? (<FaMoon size={'20px'} color='#e9c46a' className='cursor-pointer' onClick={() => (toggleDarkMode(!isDarkMode))}/>) : <BsFillSunFill size={'20px'} color='#e9c46a' className='cursor-pointer' onClick={() => (toggleDarkMode(!isDarkMode))}/>}
      </div>
      <ul className='md:flex md:flex-row md:gap-10 ml-auto z-10'>
        {openMenu && isMobile ? (
          <MdOutlineClose 
            size={'24px'} 
            className='cursor-pointer' 
            onClick={hangleMenu}/>
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu 
            size={'24px'} 
            className='cursor-pointer' 
            onClick={hangleMenu}/>
        ) : (
          <>
            <li className='text-hover'>Features</li>
            <li className='text-hover'>Menu</li>
            <li className='text-hover'>Our Story</li>
            <li className='text-hover ml-20'>Contact</li>
          </>
        )}
        {openMenu && (
          <div className='absolute right-8 bg-white p-8 text-center text-13 text-black'>
            <li className='cursor-pointer'>Features</li>
            <li className='cursor-pointer'>Menu</li>
            <li className='cursor-pointer'>Our Story</li>
            <li className='cursor-pointer'>Content</li>
          </div>
        )}
      </ul>
    </div>
  );
}
 
export default NavBar;