import { Box, Flex, Image, } from "@chakra-ui/react"
import { GrFacebookOption } from 'react-icons/gr'

const Footer = () => {
  return (
    <div>
      <Box>
        <Flex justifyContent={'center'}>
            <Box >
               <Flex justifyContent={'center'}>
                <h1 className="font-bold">Trabook
                 <span className="inline-flex ">
                    <Image 
                        src="/Images/logo.png"
                        alt="logo"
                        w={{base:'12px', md:'16px'}}
                    />
                 </span>
                </h1>
               </Flex> 
               <p className="text-[12px]">Book your trip in minutes, get full <br /> Control for much longer.</p>
               <Flex>
                 <Box bg={'white'} rounded={'full'} boxSize={{base:'20px'}} justifyItems={'center'} p={0.5}>
                  <GrFacebookOption className="text-gray-icon "/>
                 </Box>
               </Flex>
            </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default Footer