import { Box, Flex,useColorModeValue,Image,Button,Stack,Popover,PopoverTrigger,Text } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'
import viteLogo from '/logo.svg'
import { NAV_ITEMS} from "./Navabove";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
function Navbar(){
    const linkHoverColor = useColorModeValue("#ff6f61", "white");
    const {Auth}=useContext(AuthContext);
    return(
        <>
        <Box>
            <Flex  bg={useColorModeValue("white", "gray.800")} color={useColorModeValue("gray.600", "white")} minH={"50px"} py={{ base: 2 }} px={{ base: 2 }}borderBottom={1} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.900")} justify="space-around">
                <Box margin="0px" padding="0px">
                    <NavLink to={"/"}>
                    <Image src={viteLogo} padding={"0px"} width={"100px"}/>
                    </NavLink>
                  
                </Box>
                <Stack direction={"row"} spacing={4} align={"center"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <NavLink to={navItem.href}>
                <Text
                  p={2}
                  fontSize={"md"}
                  fontWeight={700}
                  
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Text>
              </NavLink>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
         
          <Flex  m={"0 20px"} gap={"20px"} align="center">
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={2}
            display={{ base: "none", md: "none", lg: "flex" }}
          >
           
            <NavLink to={(Auth)?'/Profile':'/signup'}>
              <Button
                fontSize={"1.2rem"}
                fontWeight={400}
                variant={"link"}
                color={"black"}
              >
                  <FaRegUser /> 
                  <p fontSize={"10px"}>User</p>
              </Button>
            </NavLink>
          </Stack>
          <Text
            as="p"
            cursor={"pointer"}
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            Offer
          </Text>
          <NavLink to="/cart">
            <Box >
            <i className="fa-solid fa-cart-shopping" style={{fontSize:"1.2rem" ,color:"black"}}></i>
            </Box>
          
          </NavLink>
          <Text
            as="p"
            cursor="pointer"
            display={{ base: "none", md: "none", lg: "flex" }}
            fontSize={"14px"}
          >
            Need Help?
          </Text>
        </Flex>
            </Flex>
        </Box>
        </>
    )
}
export default Navbar;