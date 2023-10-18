import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { GrFacebookOption } from 'react-icons/gr'

const Footer = () => {
  return (
    <div>
      <Box>
        <Flex justifyContent={'center'}>
            <Box >
               {/* logo */}
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