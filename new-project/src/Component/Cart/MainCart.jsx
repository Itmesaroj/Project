import { useContext, useState, useEffect } from "react";
import { Button, Flex, Heading, Stack, Text, useToast, Image, Box, Checkbox, Grid ,Container} from '@chakra-ui/react';
import { CartContext } from "../../Context/CartContext";
import { MdPlace } from "react-icons/md";
import { Link } from "react-router-dom";

const MainCart = () => {
    const { cartData, handleUpdate } = useContext(CartContext);
    const toast = useToast();

    const [cartItems, setCartItems] = useState(cartData);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCartItems(cartData);
        setTotalPrice(calculateTotalPrice(cartData));
    }, [cartData]);

    const calculateTotalPrice = (items) => {
        return items.reduce((total, product) => total + product.price, 0);
    };

    useEffect(()=>{
        const cart = JSON.parse(localStorage.getItem('Cart')) || [];
        handleUpdate(cart);
    },[])
    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        handleUpdate(updatedCart);
        toast({
            title: "Item Removed",
            status: "success",
            duration: 2000,
            isClosable: true,
        });
    };

    return (
        <>{(cartItems.length!==0)?(
            <Grid
            width={{ base: "95%", lg: "90%" }}
            margin={"auto"}
            px={4}
            py={2}
            gap="20px"
          
            borderRadius="5px"
            gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        >
            {cartItems.length !== 0 && (
                <Flex flexDirection="column">
                    {cartItems.map((product) => (
                        <Stack
                            bg="white"
                            key={product.id}
                            marginTop="20px"
                            min-width={{ base: "60%", lg: "100%" }}
                            textAlign="justify"
                            maxH="300px"
                            padding="2rem"
                            boxShadow="0 1px 2px 0 rgba(0, 0, 0, 0.2)"
                            spacing="2"
                            alignItems="flex-start"
                            shadow={"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"}
                        >
                            <Flex justifyContent="space-between" alignItems="center">
                                <Image src={product.src} maxW="100px" />
                                <Text color="#000" fontSize="13px" fontWeight={600} margin="2rem">
                                    {product.title}
                                </Text>
                                <Heading
                                    ml={2}
                                    color="#1aab2a"
                                    fontSize="15px"
                                    fontWeight={600}
                                >
                                    ₹{product.price}
                                </Heading>
                            </Flex>
                            <Text
                                color="grey"
                                fontSize="13px"
                                mb="20px"
                                fontWeight={600}
                            >
                                {product.packsize}
                            </Text>
                            <Button
                                onClick={() => removeFromCart(product.id)}
                                loadingText="Removing"
                                size="sm"

                                color="black"
                                _hover={{
                                    bg: "#ff6f61",
                                    color: "#fff",
                                }}
                            >
                                Remove
                            </Button>
                        </Stack>
                    ))}
                </Flex>
            )}
            <Box width={{ base: "100%", lg: "80%" }} display="grid" gridGap="20px" marginTop="20px" maxHeight="400px">
                <Box backgroundColor="#fff" padding="16px" borderRadius="4px" boxShadow="0 1px 2px 0 rgba(0, 0, 0, 0.2)">
                    <Image src="https://e7.pngegg.com/pngimages/917/134/png-clipart-t-shirt-sales-discounts-and-allowances-coupon-retail-sale-sticker-text-retail.png" width="100%" maxHeight="200"alt="Coupon Image" />
                    <Box color="#1aab2a" marginTop="12px">
                        <Text fontWeight="bold">You can save extra ₹15 on this order</Text>
                    </Box>
                    <Text fontSize="12px" fontWeight="bold" color="rgb(91, 83, 83)">Become a Member</Text>
                    <Text fontSize="12px" color="rgb(91, 83, 83)">Care plan membership ₹165 <s>₹549</s> / 3 months</Text>
                    <Flex marginTop="10px">
                        <Box padding="6px 10px" width="46%" textAlign="center" margin="5px 20px 0 0" backgroundColor="#fff" color="#ff6f61" fontWeight="bold" cursor="pointer" borderRadius="4px" border="1.5px solid #ff6f61">
                            Know More
                        </Box>
                    </Flex>
                </Box>
                <Box backgroundColor="#fff" boxShadow="0 1px 2px 0 rgba(0, 0, 0, 0.2)" padding="16px" borderRadius="4px" fontFamily="Clear Sans, Helvetica Neue, Helvetica, Arial, sans-serif">
                    <Flex justifyContent="space-between">
                        <Text>Check the health of your vital organs now</Text>
                        <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStztoHxSgxIIzPxzX3NqA2MBZIMC6tCxBPZXMeDm_Zd0SjkSH9" height="30px" width="40px" alt="" />
                    </Flex>
                    <Flex alignItems="center">
                        <Checkbox id="checkboxsize" />
                        <Box marginLeft="10px" fontSize=".7rem">
                            <Text htmlFor="checkboxsize">Book a full body checkup starting at only Rs 429</Text>
                            <Text className="healthorganfont">Get this test done from the comfort of your home</Text>
                            <Text className="healthorganfont">Find out your health status</Text>
                            <Text id="paysamplegreen">Pay later on home sample collection</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box backgroundColor="#fff" boxShadow="0 1px 2px 0 rgba(0, 0, 0, 0.2)" padding="16px" borderRadius="4px" fontFamily="Clear Sans, Helvetica Neue, Helvetica, Arial, sans-serif">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Text>Item Total(MRP)</Text>
                        <Text>₹{totalPrice}</Text>
                    </Flex>
                </Box>
                <Box padding="20px 16px 12px" maxHeight={"120px"} bg="white" boxShadow="0 1px 2px 0 rgba(0, 0, 0, 0.2)">
                    <Flex fontSize="1.2rem" justifyContent="space-between">
                        <Text>Your delivery location</Text>
                        <Flex alignItems="center" gap=".5rem">
                            <MdPlace />
                            <Text>New Delhi</Text>
                        </Flex>
                    </Flex>
                    <Flex justifyContent="center" >
                        <Link to={"/chackOutFrom"}>
                        <Button textDecoration="none" bg= "white"
                                    color= "rgb(255, 111, 97)"
                                    border="2px solid rgb(255, 111, 97)" display="inline-flex" alignItems="center"  width="200px" justifyContent="center"  _hover={{color:"white",backgroundColor:"rgb(255, 111, 97)"
                                    
                                }}  height="40px" cursor="pointer" margin="1rem"  borderRadius="4px">
                            CHECKOUT
                        </Button>
                        </Link>
                    </Flex>
                </Box>
            </Box>
        </Grid>
        ):(
            <Container maxW="5xl">
            <Stack align="center" py={"40px"} lineHeight="2">
                <Box>
                    <Image w={"200px"} src="https://www.1mg.com/images/online_consultation/empty-cart-icon.svg" />
                </Box>
                <Text fontWeight="bold" fontSize={"25px"}>Oops..</Text>
                <Text>Looks like there is no item in your cart yet.</Text>
                <Link to={"/"}>
                <Button px="30px" bg={"#ff6f61"} color="#fff" borderRadius={"5px"} fontSize={"16px"} fontWeight="bold" _hover={{ bg: "#ff4f41" }}>
                    Add Products
                </Button></Link>
            </Stack>
        </Container>
        )      
        } 
        </>
    );
};

export default MainCart;
