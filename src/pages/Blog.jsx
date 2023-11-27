import { Flex,Box, VStack, Image, Input, Button, Text } from "@chakra-ui/react"
import { BlogSection } from "../components/Components"

const Blog = () => {
  return (
  <>
    <div className="relative lg:max-h-screen lg:mt-[0.4rem] mb-[2rem]">
      <Flex justifyContent={'center'} className=" items-center lg:flex-row">
        <h1 className="text-[16px] lg:text-[2rem] ">
          Get update with <span className="text-primary-orange">latest blog</span>
        </h1>
      </Flex>
      <Flex mt={6} justifyContent={'center'} direction={'column'} alignItems={'center'} gap={10}>
      <BlogSection />
       
       {/* box */}
       <Box className="bg-primary-orange" rounded={'md'} w={{base:'18rem',sm:'24rem', md:'39rem'}} h={{base:'8rem', sm:'9rem', md:'12rem'}}  p={1}>
        <Flex justifyContent={'space-between'}>
            <Flex alignItems={'center'}>
             <Image src="/Images/circles.png"
               w={{base:'7rem',md:'12rem'}}
               position={'absolute'}
               top={{base:'100.9rem', sm:'102rem',md:'27.7rem'}}
               right={{base:'12.6rem', sm:'22rem', md:'47rem'}}
              />
               <Flex justifyContent={'center'}>
                <VStack direction={'column'} >
                 <Text w={{sm:'22rem',md:'32rem'}} pl={{sm:'3rem'}} textAlign={'center'}>
                  <h1 className="lg:text-[1.8rem] text-center lg:pl-[5rem] whitespace-wrap">
                 Subscribe and Get Exclusive Deals & offers
                 </h1>
                 </Text>
                 <Input color={'black'} w={{base:'12rem',md:'20rem',}} h={{base:'2rem',md:'2.9rem'}} type={'email'} bg={'white'} position={'absolute'} top={{base:'103rem',md:'31.5rem'}} right={{base:'4rem',sm:'10rem',md:'30rem'}}>
                 </Input>
                 <Button size={{base:'xs', md:'md'}} _hover={{bg:'orange.500'}} position={'absolute'} bg={'orange.400'} top={{base:'103.3rem',md:'31.7rem'}} right={{base:'4.2rem',md:'31rem'}}>Subscribe</Button>

               </VStack>
               </Flex>
              <Image src="/Images/trees.png"
                w={{base:'4rem',md:'10rem'}}
                position={'absolute'}
                top={{base:'100rem', md:'28.7rem'}}
                right={{base:'1.7rem',md:'20rem'}}
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