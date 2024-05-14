import { Box, Grid, Text, Input, Button, Image,GridItem,useToast } from "@chakra-ui/react";
import {Flex, Textarea } from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const toast = useToast();
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
           toast({
            title: 'Order Successfully',
            position: 'top-right',
            status: 'success',
            duration: 3000,
            isClosable: true,
            
          });
          setTimeout(()=>{
            localStorage.removeItem("Cart");
            navigate("/")
          },3000)
        }
    return (
        <Box id="main" padding={"2rem"}>
            <Text margin={"0px 1rem "} fontSize="1.5rem"color="#ff6f61">Address for Shopping</Text>
            <Grid gap="2rem" gridTemplateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)"}} bg="#fff" fontSize="16px" fontFamily="Clear Sans, Helvetica Neue, Helvetica, Arial, sans-serif"  color="#333">
                <GridItem id="addressfill"  boxShadow="0 1px 2px 0 rgba(0, 0, 0, 0.20)" bg="#fff" mb="16px" p="16px">
                    <Textarea id="addresstext" placeholder="Flat Number, Building Name, Street/Locality" fontSize="12px"></Textarea>
                    <Text id="addresserror" w="521.328px" h="17.141px" fontSize="10px"  color="#ef4747" mt="-3px"></Text>
                    <Input type="text"  placeholder="Landmark (optional)"  mb="16px" border="1px solid #e8e8e8" borderRadius="4px" p="0 4px" ></Input>
                    <Input type="text" placeholder="Pincode"  mb="16px" ></Input>
                    <Input type="text" placeholder="Locality"  mb="16px" ></Input>
                    <Input type="text"  placeholder="City"  mb="16px"   ></Input>
                    <Input type="text" placeholder="State"  mb="16px" ></Input>
                    <Input type="text"  placeholder="Customer Name"  mb="16px"></Input>
                    <Input type="text" required placeholder="10 Digit Mobile Number"  mb="16px"></Input>
                   
                    <Flex id="addressbottom"  justifyContent="flex-end" gridGap="10px">
                        <Link to="/">
                        <Button bg="transparent" color="#ff6f61"  textDecoration="none" display="inline-flex" fontWeight="500" fontSize="16px" borderRadius="4px" cursor="pointer" alignItems="center" justifyContent="center" >
                            <span >ORDER CANCEL</span>
                        </Button>
                        </Link>
                        
                        <Button onClick={handleSubmit}id="save" bg="#ff6f61" color="#fff" p="0 16px" textDecoration="none" display="inline-flex" fontWeight="500" fontSize="16px" borderRadius="4px" cursor="pointer" alignItems="center" justifyContent="center" border="1px solid #ff6f61">
                            ORDER
                        </Button>
                        
                    </Flex>
                </GridItem>
<GridItem >
    <Image src="https://img.pikbest.com/png-images/20191028/dynamic-card-knows-how-to-push-the-shopping-cart-to-buy-things-gif_2515304.png!bw700" width={"400px"} margin={"auto"}/>
</GridItem>
            </Grid>
            {/* Last Row Content */}
        </Box>
    );
};



export default CheckoutForm;
