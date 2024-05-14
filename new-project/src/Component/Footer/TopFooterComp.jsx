import { Box, Flex, Heading ,Stack,Text} from "@chakra-ui/react"

function TopFooterComp() {
  return (
    <div>
      <Box bg="white" width={"100%"} height={"200px"} flexDirection={"column"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Heading width={"100%"} textAlign={"center"} margin={"1rem"}>INDIAS LARGEST HEALTHCARE PLATFORM</Heading>
        <Flex width={"100%"} justifyContent={"space-evenly"} alignItems={"center"}>
            <Stack>
                <Heading fontSize={"2rem"} fontWeight={"900"}>160M+</Heading>
                <Text>Visitors</Text>
            </Stack>
            <Stack>
                <Heading fontSize={"2rem"} fontWeight={"900"} >27M+</Heading>
                <Text>Orders Delivered</Text>
            </Stack>
            <Stack>
                <Heading fontSize={"2rem"} fontWeight={"900"}>1800+</Heading>
                <Text>Cities</Text>
            </Stack>
        </Flex>
      </Box>
    </div>
  )
}

export default TopFooterComp
