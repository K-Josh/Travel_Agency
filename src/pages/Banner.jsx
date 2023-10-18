import { Flex, VStack, Text, Button, Image, Box,  } from "@chakra-ui/react"
import { Dialogue, Dialogue1, Dialogue2, PageButton } from "../components/Components"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
// import { BsFillStarFill } from 'react-icons/bs'


const Banner = () => {
    
  return (
    <div className="relative py-3 lg:py-2 mb-10 lg:min-h-screen ">
      <Flex justifyContent={"center"} p={{base:3, md:6}} >
           {/* text and image */}
        <Flex direction={{ base: 'column', md: 'row' }} gap={{base:8, md:22}} alignItems={{base:'center', md:'center'}} className="lg:space-x-[5rem]" >
            <VStack alignItems={{base:'center', md:'flex-start'}} gap={{md:6}}>
                <h1 className="font-bold lg:w-[26rem] lg:text-5xl w-[20rem] text-center lg:text-start text-xl lg:mb-0 mb-1 lg:leading-[3rem] ">Get Started your exciting <span className="text-primary-orange">journey</span> with us.</h1>
                <Text w={'24rem'} mb={{base:2, md:6}} >
                 <p className="text-[14px] text-center lg:text-start lg:text-[18px]">A Team of experienced tourism professionals will provide you with the best advice and tips for your desired place. </p>
                </Text>
                <Button color="orange.orange"  variant={'outline'} colorScheme="orange.orange">Discover Now</Button>
            </VStack>
         <div>
                {/* images and boxes */}
          <Flex position={'relative'} className="group">
              <Box w='100%' p={2} rounded={'full'} bgGradient='linear(to-b, white, orange.orange)' className="group-hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                 <Image 
                  src="/Images/tourist.png"
                  alt="tourist"
                  h={{base:60, md:80}} 
                  w={{base:60, md:80}}
               />
            </Box>
                 {/* dialogue boxes */}
             <Flex>
               <Dialogue />
                
                <Dialogue1 />

                 <Dialogue2 />
             </Flex>
          </Flex>
         </div>
        </Flex>
            
      </Flex>
      {/* ..... */}
        <Flex justifyContent={"center"} p={{base:2, md:8}} direction={{base:'column',md: 'row' }} >
          <Box bg={'white'} color={"black"} p={{base:2, md:3}}rounded={'md'}>
             <Flex gap={{base:4, md:7}} alignItems={'center'} >
                <Flex alignItems={"center"} direction={'column'} >
                 <Flex alignItems={"center"} >
                  <h1 className="font-bold text-[10px] lg:text-[14px] ">Location  </h1> 
                  <MdOutlineKeyboardArrowDown className="text-primary-orange text-md cursor-pointer"/>
                 </Flex>
                  <span className="block">
                     <p className="text-[8px] lg:text-[12px] whitespace-nowrap font-light lg:font-normal">Where are you going</p> 
                    </span>
                  </Flex>
                  
                <Flex alignItems={"center"} direction={'column'} >
                 <Flex alignItems={"center"} >
                  <h1 className="font-bold text-[10px] lg:text-[16px] ">Date </h1> 
                  <MdOutlineKeyboardArrowDown className="text-primary-orange text-md cursor-pointer"/>
                 </Flex>
                  <span className="block">
                     <p className="text-[8px] lg:text-[12px] whitespace-nowrap font-light lg:font-normal">When will you go</p> 
                    </span>
                 </Flex>

                 <Flex alignItems={"center"} direction={'column'} >
                  <Flex alignItems={"center"} >
                   <h1 className="font-bold text-[10px] lg:text-[16px] ">Guest  </h1> 
                  <MdOutlineKeyboardArrowDown className="text-primary-orange text-md cursor-pointer"/>
                 </Flex>
                  <span className="block">
                     <p className="text-[8px] lg:text-[12px] whitespace-nowrap font-light lg:font-normal">Number of guest</p> 
                    </span>
                  </Flex>
                  
                <PageButton />
              </Flex>
            </Box>
        </Flex>
    </div>
  )
}

export default Banner