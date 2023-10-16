import { Button, useColorMode,} from '@chakra-ui/react'
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'

const Header = () => {
    const {colorMode, toggleColorMode} =useColorMode()
  return (
    <div className='relative'>
      <Button
     m='1rem' 
     position={'absolute'}
     bottom={{
      base:'2rem',
      md: '2rem'
      }} 
      pos={'fixed'}
     onClick={()=> toggleColorMode()}
     >
        {colorMode === 'dark' ? <BsFillSunFill /> : <BsFillMoonStarsFill /> }
    </Button>
    </div>
  )
}

export default Header