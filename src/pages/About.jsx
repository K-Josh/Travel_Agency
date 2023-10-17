import { Flex, Text, VStack, Box, Avatar, Image, Show } from "@chakra-ui/react"
import { BsArrowLeftCircle, BsArrowRightCircleFill } from "react-icons/bs"
import Footer from "../components/Footer"


const About = () => {
  return (
    <div className="lg:min-h-screen flex justify-center lg:mx-10 ">
      <Flex justifyContent={{md:'space-between'}} alignItems={'center'} mb={{md:'8rem'}} direction={{base:'column', md:'row'}} px={{base:3, md:6}} className="space-y-[2rem]  lg:space-x-[5rem] ">
        <Flex justifyContent={{md:'start'}}>
         <VStack alignItems={{base:'center', md:'flex-start'}} gap={{md:6}} >
            <Text className="text-lg lg:text-start lg:text-4xl font-bold lg:w-[24rem] ">What people say <span className="text-primary-orange">about us.</span></Text>
            <p className="text-[14px] lg:text-lg lg:w-[32rem] w-[22rem]  text-center lg:text-start">Our clients send us bunch of smiles with our services and we love them.
            </p>
         <Box mt={{base:8, md:2}} cursor={'pointer'} >
            <Flex gap={4} >
            <BsArrowLeftCircle className='text-lg lg:text-2xl hover:scale-110 text-gray-icon hover:text-primary-orange' />
           <BsArrowRightCircleFill className='text-primary-orange text-lg lg:text-2xl hover:scale-110'/>
         </Flex>
        </Box>
         </VStack> 
         <Show below="md">
          <Image 
            src="/Images/planes.png"
            w={{base:'6rem'}}
            alt="planes"
          />
          </Show>
        </Flex>
        <Flex position={'relative'}>
         <VStack >
            <Box className="group cursor-pointer shadow-sm">
             <Avatar position={'absolute'} top={{base:'-1rem'}} left={{base:'-2rem'}} className="absolute z-50 group-hover:scale-95 transition-all ease-in duration-300 "/>
                   {/*first box  */}
                <Box bg={'white'} w= {{base:'17rem'}} rounded={'md'} h={{base:'10rem'}} p={4} className="group-hover:scale-95 transition-all ease-in duration-300">
                 <div className="flex-col space-y-4 flex-start">
                <Text color={'black'} fontFamily={'Poppins'} fontSize={'12px'}>
                “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                </Text>
                <Text color={'black'} fontSize={{base:'12px'}} >
                <span className="font-bold block"> Mike taylor</span>
                <span className="inline-block"> Lahore, Pakistan</span>
                 </Text>
                  </div>
                 </Box>

                   {/* another box */}
                <Box w= {{base:'18rem'}} rounded={'md'} h={{base:'10rem'}} bottom={{base:'-4rem'}} right={{base:'-2rem'}} p={4} bg={'#E5E5E5'} className="absolute group-hover:scale-95 -z-10 transition-all ease-in duration-300">
                  <div className="flex-col space-y-4 flex-start">
                  <Text color={'black'} fontFamily={'Poppins'} className="w-[14rem] " fontSize={'12px'}>
                   “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                  </Text>
                     <Text color={'black'} fontSize={{base:'12px'}} className="opacity-70">
                      <span className="font-bold block"> Chris Thomas</span>
                        <span className="inline-block"> CEO of Red Button</span>
                      </Text>
                     </div>
                </Box>
             </Box>
         </VStack>
        </Flex>
         {/* image */}
         <Show above="md">
         <div>
          <Image 
            src="/Images/planes.png"
            w={{md:'12rem'}}
            alt="planes"
            mb={{md:'10rem'}}
          /> 
         </div>
         </Show>
      </Flex>

      <Footer />
    </div>
  )
}

export default About