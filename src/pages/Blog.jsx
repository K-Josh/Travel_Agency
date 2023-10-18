import { Flex,Box, VStack, Image, Input, Button, Text } from "@chakra-ui/react"
import { BlogSection } from "../components/Components"

const Blog = () => {
  return (
  <>
    <div className="relative lg:max-h-screen lg:mt-[0.4rem] ">
      <Flex justifyContent={'center'} className=" items-center lg:flex-row">
        <h1 className="text-[16px] lg:text-[2rem] ">
          Get update with <span className="text-primary-orange">latest blog</span>
        </h1>
      </Flex>
      <Flex mt={6} justifyContent={'center'} direction={'column'} alignItems={'center'} gap={10}>
      <BlogSection />
       
       {/* box */}
       <Box className="bg-primary-orange" rounded={'md'} w={{base:'22rem', md:'39rem'}} h={{base:'', md:'12rem'}}  p={2}>
        <Flex justifyContent={'space-between'}>
            <Flex alignItems={'center'}>
             <Image src="/Images/circles.png"
               w={{md:'12rem'}}
               position={'absolute'}
               top={{md:'27.7rem'}}
              />
               <Flex justifyContent={'center'}>
                <VStack direction={'column'} >
                 <Text w={{md:'32rem',}} textAlign={'center'}>
                  <h1 className="lg:text-[1.8rem] text-center lg:pr-[3rem] whitespace-wrap">
                 Subscribe and Get Exclusive Deals & offers
                 </h1>
                 </Text>
                 <Input color={'black'} w={{md:'20rem',}} h={'2.9rem'} type={'email'} bg={'white'} position={'absolute'} top={{md:'31.5rem'}} right={{md:'30rem'}}>
                 </Input>
                 <Button size={{base:'sm', md:'md'}} _hover={{bg:'orange.500'}} position={'absolute'} bg={'orange.400'} top={{md:'31.7rem'}} right={{md:'31rem'}}>Subscribe</Button>

               </VStack>
               </Flex>
              <Image src="/Images/trees.png"
                w={{md:'10rem'}}
                position={'absolute'}
                top={{md:'28.7rem'}}
                right={{md:'20rem'}}
              />
            </Flex>
        </Flex>
      </Box>
      </Flex>
        
    </div>

  </>
  )
}

export default Blog