// Account.js
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Text, Flex, Box, FormControl, HStack, Stack, FormLabel, Input, Select, InputGroup, InputRightElement, Button, useToast} from "@chakra-ui/react";
import { ViewOffIcon } from "@chakra-ui/icons";
import ServiceCarousel from '../Home/ServiceCarsoul';
import { AuthContext } from '../../Context/AuthContext';
const initialData = {
  fName: "",
  lName: "",
  email: "",
  gender: "Male",
  password: "",
  mobileNumber: "",
};

function Account() {
  const [Data, setData] = useState(initialData);
  const toast = useToast();
  const navigate = useNavigate();
  const {setUser,setAuth}=useContext(AuthContext);
  const [loader, setLoader] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!Data.fName || !Data.lName || !Data.email || !Data.gender || !Data.password) {
      toast({
        title: 'Please fill all the fields',
        position: 'bottom-left',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return; 
    }
  
    if (Data.password.length < 8) {
      toast({
        title: 'Password length must be greater than 8',
        position: 'bottom-left',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return; 
    }
  
    setLoader(true);
    setTimeout(() => {
      localStorage.setItem('UserData', JSON.stringify(Data));
      localStorage.setItem('Auth', JSON.stringify(true));
      const storedAuth = JSON.parse(localStorage.getItem("Auth"));
      const storedUserData = JSON.parse(localStorage.getItem("UserData"));
      console.log(storedAuth);
      console.log(storedUserData);
      setUser(storedUserData);
      setAuth(storedAuth);
      setLoader(false); 
      toast({
        title: 'Sign Up Successfully',
        position: 'top-right',
        status: 'success',
        duration: 5000,
        
        isClosable: true,
      });
      navigate('/');
    }, 3000); 
  };
  
  return (
    <>
      <Box>
        <Flex
          flexDir={{ base: "column-reverse", md: "row" }}
          maxW={{ base: "99%", md: "80%" }}
          m={{ base: "20px auto", md: "40px auto" }}
          justifyContent="space-between"
          alignItems="center"
          gap={{ base: "20px", md: "auto" }}
        >
          <ServiceCarousel />

          <Stack
            textAlign={"left"}
            padding={{ base: "35px", md: "50px" }}
            maxW={{ base: "100%", md: "100%" }}
            minW="30%"
            shadow={{ base: "none", md: "xs" }}
          >
            <Heading fontSize="30px">Sign Up</Heading>
            <Text color={"grey"} fontSize="14px" paddingBottom={{ base: 5, md: 10 }}>
              Please enter your All Correct Details for Access more Features
            </Text>

            <form onSubmit={handleSubmit}>
              <Stack spacing={8} mx={"auto"} maxW={"lg"}>
                <Box rounded={"lg"} bg={"white"}>
                  <Stack spacing={4}>
                    <HStack>
                      <Box>
                        <FormControl id="firstName" isRequired>
                          <FormLabel>First Name</FormLabel>
                          <Input
                            type="text"
                            name="fName"
                            value={Data.fName}
                            onChange={handleChange}
                            required
                          />
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl id="lastName">
                          <FormLabel>Last Name</FormLabel>
                          <Input
                            type="text"
                            name="lName"
                            value={Data.lName}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </Box>
                    </HStack>
                    <FormControl id="gender" isRequired>
                      <FormLabel>Gender</FormLabel>
                      <Select name="gender" value={Data.gender} onChange={handleChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer No to say">Prefer NO to say</option>
                      </Select>
                    </FormControl>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        value={Data.email}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          type={"password"}
                          name="password"
                          value={Data.password}
                          onChange={handleChange}
                        />
                        <InputRightElement h={"full"}>
                          <ViewOffIcon />
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Button   isLoading={loader}
              loadingText=" Registering" 
                      variant="outline"
                      bg={"#ff6f61"}
                      w="100%"
                      _hover={{
                        bg: "#ff4f61",
                      }}
                      type="submit"
                    >
                      Register
                    </Button>

                    <Text color={"grey"} fontSize="14px" paddingBottom={{ base: 5, md: 10 }}>
                      By signing up, you agree to our Terms and Conditions & Privacy Policy
                    </Text>
                  </Stack>
                </Box>
              </Stack>
            </form>
          </Stack>
         
        </Flex>
      </Box>
    </>
  );
}

export default Account;
