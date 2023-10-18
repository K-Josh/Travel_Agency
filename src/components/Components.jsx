import { Flex, Button, Link, Box, Image, VStack,  } from '@chakra-ui/react'
import { BsFillStarFill, BsArrowLeftCircle, BsArrowRightCircleFill } from 'react-icons/bs'
import { FaCalendarCheck, FaLocationArrow, } from 'react-icons/fa'
import { GiWallet } from 'react-icons/gi'
import { blog, places, vacation } from '../Data/Data'

export const NavButtons = () => {
  return (
    <div>
       {/* buttons */}
       <Flex gap={3} justifyContent={'center'}>
            <Button className='text-primary-orange ' color={'orange.400'} size={{base:'sm', md:'md'}} _hover={{bg:'orange.orange', color:'white'}}>Login</Button>
            <Button bg={'orange.orange'} px={{base:4, md:8}}  size={{base:'sm', md:'md'}} _hover={{bg:'orange.400'}} color={'white'}  >Sign up</Button>
        </Flex>
    </div>
  )
}
export const PageButton = () => {
  return (
    <>
       {/* buttons */}
     <Button bg={'orange.orange'} w={{base:12, md:32}} h={{base:2, sm:5, md:8}}  size={{base:'xs', sm:'sm', md:'xl'}} _hover={{bg:'orange.400'}} color={'white'} ><p className='text-[5px] lg:text-[10px]'>Explore Now</p></Button>
    </>
  )
}
  // links
export const Links = () => {
    return(
        <div className='font-primary'>
           <Flex gap={4} fontSize={{
          base:'sm',
          md:'md',
         }}
         direction={{
            base: 'column',
            md:'row'
         }}
         >
            <Link 
          className='underline-none'
          href='/'
          _hover={{textDecoration: 'none',}}
           >Home</Link>
         <Link _hover={{textDecoration: 'none',}} href='/testimonials'>
         About</Link>
         <Link _hover={{textDecoration: 'none',}} href='/destination'>
         Destination</Link>
         <Link _hover={{textDecoration: 'none',}} href='/booking'>
         Booking</Link>
         <Link _hover={{textDecoration: 'none',}} href='/tour'>
         Tour</Link>
         <Link _hover={{textDecoration: 'none',}} href='/blog'>
         Blog</Link>
       </Flex>   
     </div>
    )
}
  // Boxes
export const Dialogue = () => {
  return (
    <Box 
    bg={'white'} w={99} h={12} position={'absolute'} right={{base:2}} left={{md:-12}} top={{md:12}} color={"black"} rounded={'md'} p={1} fontSize={'sm'} className="transition-all ease-in duration-300 group-hover:scale-110" >
          <Flex alignItems={"center"} gap={2}>
            <span>
             <Image src="/Images/trophy.png"  align='trophy' w={8}/>
           </span>
             <p className="text-[11px] lg:text-[13px] ">Best Tour Awards</p>
          </Flex>
  </Box>
  )

}
export const Dialogue1 = () => {
  return (
    <Box 
    bg={'white'} w={117} h={16}  position={'absolute'} right={{base:-3, md:-3}}  top={{base:28,md:36}} color={"black"} rounded={'md'} p={1} fontSize={'sm'} j className="transition-all ease-in duration-300 group-hover:scale-110 justify-center shadow-sm" >
     <h4 className="font-bold text-[8px] text-center">Explore</h4>
  <Flex alignItems={"center"} gap={2}>
    <span>
     <Image src="/Images/google-maps.png"  align='trophy' w={10}/>
   </span>
     <p className="text-[10px]">Every corner of the world with us </p>
  </Flex>
 </Box>
  )
}

export const Dialogue2 = () => {
  return (
    <Box 
       bg={'white'} w={123} h={14}  position={'absolute'} left={{base:-3, md:1}}  top={{base:36,md:52}} color={"black"} rounded={'md'} p={1} fontSize={'sm'} j className="transition-all ease-in duration-300 group-hover:scale-110 justify-center shadow-sm" >
           <h3 className="font-bold text-center">27k</h3>
        <Flex alignItems={"center"} gap={2}>
           <span>
            <BsFillStarFill className="text-secondary-yellow text-md" align='star' />
           </span>
            <p className="text-[10px] whitespace-nowrap">customer reviewed </p>
       </Flex>
    </Box>
  )
}

// cards
export const SignupCard = () => {
  return(
    <Box 
    bg={'white'} w={{base:200, md:250}} h={{base:36, md:40}} color={"black"} rounded={'md'} p={3} fontSize={'sm'}  className="transition-all ease-in duration-300 group-hover:scale-110 space-y-5 justify-center shadow-sm" >
    <span>
         <FaCalendarCheck
         className="text-xl lg:text-3xl text-primary-orange" align='sign' />
        </span>
        <h2 className="font-bold lg:text-[1rem] ">Sign Up</h2>
     <Flex alignItems={"center"} gap={2}>
        
         <p className="text-[11px] lg:text-[13px] ">Completes all the work associated with planning and processing </p>
    </Flex>
 </Box>
  )
}
export const WalletCard = () => {
  return(
    <Box 
    bg={'white'} w={{base:200, md:250}} h={{base:36, md:40}} color={"black"} rounded={'md'} p={3} fontSize={'sm'}  className="transition-all ease-in duration-300 group-hover:scale-110 space-y-5 justify-center shadow-sm" >
    <span>
         <GiWallet
         className="text-xl lg:text-3xl text-secondary-blue" align='sign' />
        </span>
        <h2 className="font-bold lg:text-[1rem] ">Worth of Money</h2>
     <Flex alignItems={"center"} gap={2}>
        
         <p className="text-[11px] lg:text-[13px]  ">After successful access then book from exclusive deals & pricing </p>
    </Flex>
 </Box>
  )
}
export const LocationCard = () => {
  return(
    <Box 
    bg={'white'} w={{base:200, md:250}} h={{base:36, md:40}} color={"black"} rounded={'md'} p={3} fontSize={'sm'}  className="transition-all ease-in duration-300 group-hover:scale-110 space-y-5 justify-center shadow-sm" >
    <span>
         <FaLocationArrow
         className="text-xl lg:text-3xl text-secondary-yellow"  />
        </span>
        <h2 className="font-bold lg:text-[1rem] ">Exciting Travel</h2>
     <Flex alignItems={"center"} gap={2}>
        
         <p className="text-[11px] lg:text-[13px]  ">Start and explore a wide range of exciting travel experience.</p>
    </Flex>
 </Box>
  )
}

// booking discount cards
export const Madrid = () => {
  return (
    <>
    <Flex justifyContent={'center'} alignItems={'center'} direction={{base:'column', md:'row'}} gap={{base:1,md:5}} >
      {places.map((item, index)=> (
       <div key={index} >
       <VStack className=' group mt-[12px] lg:mt-[2rem]'>
        <Box className='group-hover:scale-110 cursor-pointer shadow-sm relative overflow-hidden transition-all duration-500 bg-black'>
         {/* image */}
         <div className='transition-all w-full h-full absolute rounded-md duration-300 z-50 cursor-pointer bg-black'>
                   {/* overlay with button */}
            <Box >
             <Button bg={'orange.orange'} px={4}  size={'sm'} _hover={{bg:'orange.400'}} color={'white'} className='absolute top-[-10rem] right-[-4rem] lg:right-[-6rem] group-hover:scale-110 transition-all duration-700 ease-in-out group-hover:top-[12rem] z-99'>Book Now</Button>
           </Box>
          </div>
           <Box w={{base:'16rem', md:'17rem'}}  bg={'white'} roundedBottom={'md'} roundedTop={'md'} className='space-y-3 '>
            <Image 
            src={item.image}
            alt='Madrid'
            objectFit={'cover'}
            roundedTop={'md'}
            w={'fit-content'}
            h={'fit-content'}
            boxSize={{base:'16rem', md:'17rem'}}
            className=''
           />
            <Flex color={'black'} py={2} px={4} justifyContent={'space-between'} >
             <p className='font-semibold '>{item.name}</p>
             <span className='whitespace-nowrap inline-flex items-center gap-2'>
             <BsFillStarFill className="text-secondary-yellow text-sm lg:text-md" align='star' />
             <p className='text-sm text-gray-text'>4.8</p>
           </span>
            </Flex>
            <Flex color={'black'} alignItems={'center'} justifyContent={'space-between'} px={4} pb={4}>
              <span className='inline-flex items-center gap-1'>
              <FaLocationArrow 
                className='text-gray-icon text-sm'
              />
               <span className='text-gray-text'><p className='text-[12px] lg:text-[15px]'>{item.country}</p>
               </span>
              </span>
              <span className='inline-flex text-[12px] space-x-3 lg:text-[15px] text-gray-text '>
                <p className='line-through opacity-80'>{item.oldPrice}</p>
                <p className='bg-pink-button text-primary-orange rounded-xl px-1 text-bold'>{item.newPrice}</p>
              </span>
            </Flex>
          </Box>
        </Box>
      </VStack>
       </div>
      ))}
    </Flex>
  
    <Box mt={{base:8, md:12}} cursor={'pointer'} >
     <Flex gap={4} >
       <BsArrowLeftCircle className='text-lg lg:text-2xl hover:scale-110 text-gray-icon hover:text-primary-orange' />
       <BsArrowRightCircleFill className='text-primary-orange text-lg lg:text-2xl hover:scale-110'/>
     </Flex>
    </Box>
  </>
  )
}

// booking discount cards
export const Vacation = () => {
  return (
    <>
      <Box mt={{base:8, md:2}} ml={{base:'12rem', md:'45rem'}} cursor={'pointer'} >
       <Flex gap={4} >
       <BsArrowLeftCircle className='text-lg lg:text-2xl hover:scale-110 text-gray-icon hover:text-primary-orange' />
       <BsArrowRightCircleFill className='text-primary-orange text-lg lg:text-2xl hover:scale-110'/>
     </Flex>
      </Box>
    <Flex justifyContent={'center'} alignItems={'center'} direction={{base:'column', md:'row'}} gap={{base:1,md:5}} >
      {vacation.map((item, index)=> (
       <div key={index} >
       <VStack className=' group mt-[12px] lg:mt-[rem]'>
        <Box className='group-hover:scale-95 cursor-pointer shadow-sm relative overflow-hidden transition-all duration-500 '>
         {/* image */}
           <Box w={{base:'15rem', md:'20rem'}}  bg={'white'} roundedBottom={'md'} roundedTop={'md'} h={{md:'26rem'}} className='space-y-3 '>
            <Image 
            src={item.image}
            alt={item.name}
            objectFit={'cover'}
            rounded={'md'}
            w={'fit-content'}
            h={'fit-content'}
            boxSize={{base:'15rem', md:'20rem'}}
            className=''
           />
            <Flex color={'black'} py={2} px={4} justifyContent={'space-between'} >
             <p className='font-semibold '>{item.country}</p>
             <span className='inline-flex text-[12px] space-x-3 lg:text-[15px] text-gray-text '>
                <p className=' text-primary-orange  px-1 font-bold'>{item.price}</p>
              </span>
            
            </Flex>
            <Flex color={'black'} alignItems={'center'} justifyContent={'space-between'} px={4} pb={4}>
              <span className='inline-flex items-center gap-2'>
              <FaLocationArrow 
                className='text-primary-orange text-sm'
              />
               <span className='text-gray-text'><p className='text-[12px] lg:text-[15px]'>{item.Days}</p>
               </span>
              </span>
              <span className='whitespace-nowrap inline-flex items-center gap-2'>
             <BsFillStarFill className="text-secondary-yellow text-sm lg:text-md" align='star' />
             <p className='text-sm text-gray-text'>4.8</p>
           </span>
            </Flex>
          </Box>
        </Box>
      </VStack>
       </div>
      ))}
    </Flex>
  
    
   </>
  )
}

// blog component
export const BlogSection = () => {
  return (
   <>
    <Flex direction={{base:'column', md:'row' }} justifyContent={{md:'center'}} gap={4}>
      {blog.map((item, index) => (
        <div key={index}>
          <VStack >
            <Box className='space-y-4 cursor-pointer  transition-all ease-in-out duration-500 hover:scale-105 lg:overflow-x-hidden'>
              <Image 
                src={item.image}
                rounded={'md'}
                w={{base:'12rem'}}
              />
              <p className='w-[12rem] text-[14px]'>{item.text}</p>
              <p className='text-[12px] text-gray-icon opacity-80'>{item.date}</p>
            </Box>
          </VStack>
        </div>
      ))}
    </Flex>
    
   </>
  )
}
