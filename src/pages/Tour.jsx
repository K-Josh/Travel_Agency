import { Box, Flex,Image, VStack, Text } from "@chakra-ui/react"
import { Vacation } from "../components/Components"


const Tour = () => {
  return (
    <div className="lg:min-h-screen mb-[40px]">
      <Flex justifyContent={'center'} direction={{base:'column', md:'row'}} mt={4}>
        <VStack>
         <Flex gap={{base:4, }} alignItems={'center'} className="space-x-[0rem] ">
            <h1 className="text-lg text-center lg:text-4xl font-bold pl-[4rem] lg:pl-[14rem] whitespace-nowrap">Best<span className="text-primary-orange"> vacation plan</span></h1>
         <Box pl={{base:'4rem',md:'8rem'}} className="mx-[12rem]"> 
          <Image 
          src="/Images/trees.png"
           w={{base:10, md:24}}
            />
         </Box>
         </Flex>
         <Text fontSize={{base:'sm', md:'20px'}}  className="text-center w-[20rem] lg:w-[32rem]">Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers!  
         </Text>
         <Vacation />
        </VStack>
      </Flex>
    
    </div>
  )
}

export default Tour