import { Text, Stack, Heading,FormControl,InputGroup,InputLeftAddon,Input,Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function SignupForm() {
  return (
    <Stack
      textAlign={"left"}
      padding={{ base: "35px", md: "50px" }}
      maxW={{ base: "100%", md: "40%" }}
      minW="30%"
      shadow={{ base: "none", md: "xs" }}
    >
      <Heading fontSize="30px">Sign Up</Heading>
      <Text color={"grey"} fontSize="14px" paddingBottom={{ base: 5, md: 10 }}>
        Please enter your mobile number to receive one time password (OTP)
      </Text>
      <FormControl>
      <InputGroup marginBottom={{ base: 10, md: 20 }}>
        <InputLeftAddon
          children={"+91"}
          borderRadius={0}
          bg="#fff"
          border={0}
        />
        <Input
          type={"number"}
          borderRadius={0}
          placeholder="Enter Your Number"
          variant="flushed"
          focusBorderColor="#ff6f61"
          isRequired
          
        />
      </InputGroup>

      <Link to="/account">
      <Button
        bg={"#ff6f61"}
        
        _hover={{
          bg: "#ff4f61",
        }}
        w="100%"
      >
        Continue
      </Button>
      </Link>
     

    </FormControl >
      <Text align={"center"} color="grey" pt={3}>
        Have an account ?{" "}
        <Link color={"#ff6f61"} fontWeight="700" href="/login">
          Login
        </Link>
      </Text>
      <Text align={"center"} color="grey" fontSize={"12px"}>
        By signing up, you agree to our Terms and Conditions & Privacy Policy
      </Text>
    </Stack>
  );
}

export default SignupForm;
