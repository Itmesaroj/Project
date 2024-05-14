import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"


function SecondFooterComp() {
  return (
    <Box width="100%" bg={"white"} padding={"1rem"}>
        <Flex alignItems={"center"} justify={"center"} gap={"2rem"}>

        <Text fontSize={"1.2rem"}>Get the link to download App</Text>
        <Input placeholder="Enter Phone Number" maxWidth={"300px"}/>
        <Button fontWeight={"700"} bg={"#ff4f61"} color={"white"} _hover={{bg:"#ff4f61",color:"white"}}>Seacrh</Button>
        </Flex>
       
    </Box>
  )
}

export default SecondFooterComp
