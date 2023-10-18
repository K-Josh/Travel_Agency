import { Flex, Text, VStack } from "@chakra-ui/react"
import { Madrid } from "../components/Components"

const Booking = () => {
  return (
    <>
    <Flex alignItems={'center'} justifyContent={'center'} mb={{base:4}}>
       <div className="flex items-center ">
         <VStack  alignItems={{base:'center',}}>
            <Text className="text-lg text-center lg:text-4xl font-bold whitespace-nowrap">Exclusive <span className="text-primary-orange">deals & discounts</span></Text>
            <p className="text-[14px] lg:text-lg lg:w-[24rem] w-[16rem] text-center ">Discover our fantastic early booking discounts & start planning your journey.
            </p>
            <Madrid/>
         </VStack>
       </div> 
    </Flex>

    </>
  )
}

export default Booking