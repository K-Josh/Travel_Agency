import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs"
import { GrFacebookOption } from 'react-icons/gr'
import { PiTwitterLogoFill } from 'react-icons/pi'

const Footer = () => {
  const {colorMode} = useColorMode()
  return (
    <div className="min-w-screen">
      <Box>
        <Flex justifyContent={'center'}>
            <Box>
               {/*This is for the text and logo */}
         <Flex alignItems={'center'} justifyContent={'space-between'} gap={2} mb={{base:4, md:0}}>
           <Text fontWeight={'bold'} fontSize={{base:'sm',
             md:'xl',}}>
            Trabook 
          <span className='inline-flex px-2  items-center'>
             <Image 
             cursor={'pointer'}
             src='/Images/logo.png'
             alt='logo'
             w={{base:4, md:5}}
          />
          </span> 
         </Text>
        </Flex>
               <p className="text-[12px]">Book your trip in minutes, get full <br /> Control for much longer.</p>
                {/* these are the icons */}
               <Flex gap={2}>
                 {colorMode === 'dark' ? 
                 <Box bg={'orange.400'} rounded={'full'} boxSize={{base:'20px'}} justifyItems={'center'} p={0.5}>
                  <GrFacebookOption className=""/>
                 </Box> : 
                 <Box bg={'white'} rounded={'full'} boxSize={{base:'20px'}} justifyItems={'center'} p={0.5}>
                  <GrFacebookOption className="text-gray-icon "/>
                 </Box> 
                 }
                 {colorMode === 'dark' ? <Box bg={'orange.400'} rounded={'full'} boxSize={{base:'21px'}} justifyItems={'center'} p={0.5} textAlign={'center'}>
                  <BsInstagram className=" text-[17px] p-[0.2rem] "/>
                 </Box> :
                 <Box bg={'white'} rounded={'full'} boxSize={{base:'20px'}} justifyItems={'center'} p={0.5} textAlign={'center'}>
                  <BsInstagram className="text-gray-icon text-[18px] p-[0.2rem] text-center"/>
                 </Box>
                 }
                 {colorMode === 'dark' ? 
                 <Box bg={'orange.400'} rounded={'full'} boxSize={{base:'21px'}} justifyItems={'center'} p={0.5}>
                  <PiTwitterLogoFill className="text-white "/>
                 </Box> :
                 <Box bg={'white'} rounded={'full'} boxSize={{base:'20px'}} justifyItems={'center'} p={0.5}>
                  <PiTwitterLogoFill className="text-white "/>
                 </Box>
                 }
               </Flex>
            </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default Footer