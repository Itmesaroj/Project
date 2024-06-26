import SignupForm from "../Component/Auth/SignFrom"
import ServiceCarousel from "../Component/Home/ServiceCarsoul"
import {Box,Flex} from "@chakra-ui/react"
function Sign() {
  return (
    <Box>
    <Flex
      flexDir={{ base: "column-reverse", md: "row" }}
      maxW={{ base: "99%", md: "80%" }}
      m={{ base: "20px auto", md: "40px auto" }}
      justifyContent="space-between"
      alignItems="center"
      gap={{ base: "20px", md: "auto" }}>
        <ServiceCarousel/>
      <SignupForm/>
      
    </Flex>
      
    </Box>
  )
}

export default Sign
