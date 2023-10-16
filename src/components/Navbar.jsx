import {Flex, Text, Image, Show, Hide, Box, useDisclosure, useColorMode, Collapse} from '@chakra-ui/react'
import { NavButtons, Links } from './Components'


const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure()
    const {colorMode} = useColorMode()
  return (
    <Flex  justifyContent={'space-between'} gap={{ base: 3,}} p={4}
    direction={{ base: 'column', md: 'row' }}
    >
      {/* logo */}
      <Flex alignItems={'center'} justifyContent={'space-between'} gap={2} mb={{base:4, md:0}}>
         <Text fontWeight={'bold'} fontSize={{
          base:'sm',
          md:'xl',
         }}>
         Trabook 
          <span className='inline-flex px-2  items-center'>
             <Image 
             cursor={'pointer'}
             src='/Images/logo.png'
             alt='logo'
             w={{base:4, md:5}}
             onClick={onToggle}
             className='animate-bounce'
          />
          </span> 
         </Text>
            {/* buttons */}
         <Show below='md'>
           <NavButtons />
         </Show>
      </Flex>
          {/* links */}
       
         <div onClick={useColorMode}>
           
          {colorMode === 'dark' ? 
          <Collapse in={isOpen}  transition={{exit: {delay: 1}, enter: {duration: 0.5}}}>
           <Hide above='md'>
             <Box 
               p={3}
               className='bg-primary-orange'
               rounded={'md'}
               shadow={'md'}
             >
              <Links />
             </Box>
          </Hide> 
       </Collapse>
            :
         <Show above='md'>
            <Links/>
          </Show>}
          {colorMode === 'light' ? 
          <Collapse in={isOpen}  transition={{exit: {delay: 1}, enter: {duration: 0.5}}}>
           <Hide above='md'>
             <Box 
               p={3}
               className='bg-primary-orange'
               rounded={'md'}
               shadow={'md'}
             >
              <Links />
             </Box>
           </Hide>
          </Collapse>  
            :
         <Show above='md'>
            <Links/>
          </Show>}
            
       </div>
        
        
            {/* Buttons */}
          <Hide below='md'>
            <NavButtons />
          </Hide>
    </Flex>
  )
}

export default Navbar