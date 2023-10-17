import { Flex, Image, VStack, Text, Box} from "@chakra-ui/react"
import {   LocationCard, SignupCard, WalletCard } from "../components/Components"
import Footer from "../components/Footer"


const ToDo = () => {
  return (
  <>
    <Flex justifyContent={'center'} >
     <div className="flex items-center lg:max-h-screen" >
       <Flex justifyContent={"center"} p={{base:3, md:6}}>
       <VStack  direction={['column',]}  alignItems={{base:'center',}} gap={{base:7, md:4}}>
        <Flex gap={{base:4, }} alignItems={'center'} className="space-x-[rem] ">
            <h1 className="text-lg text-center lg:text-4xl font-bold pl-[4rem] lg:pl-[14rem] whitespace-nowrap">Things you need <span className="text-primary-orange">to do</span></h1>
        <Box pl={{base:'4rem',md:'8rem'}} className="mx-[12rem]"> 
          <Image 
          src="/Images/airplanes.png"
           w={{base:10, md:24}}
            />
         </Box>
        </Flex>
         
        <Text fontSize={{base:'sm', md:'md'}}  className="text-center w-[24rem]">We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford. </Text>
         {/* cards */}
         <Flex direction={{base:"column", md:"row"}} alignItems={'center'} gap={4}>
            <SignupCard />
            <WalletCard />
            <LocationCard />
         </Flex>
       </VStack>
      </Flex>
     </div>
    </Flex>
    
    <Footer />
    </>
  )
}

export default ToDo