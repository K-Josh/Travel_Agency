import { Flex, Box} from "@chakra-ui/react"
import Footer from "../components/Footer"
import { BlogSection } from "../components/Components"

const Blog = () => {
  return (
  <>
    <div className="lg:min-h-screen lg:mt-[6rem]">
      <Flex justifyContent={'center'} className=" items-center lg:flex-row">
        <h1 className="text-[16px] lg:text-[2rem] ">
          Get update with <span className="text-primary-orange">latest blog</span>
        </h1>
      </Flex>
      <Flex mt={6} justifyContent={'center'}>
      <BlogSection />
       <Box>
        
       </Box>
      </Flex>
    </div>

    <Footer />
  </>
  )
}

export default Blog