import { useState, useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import {  Heading, useToast } from "@chakra-ui/react";
import { BsStarFill } from "react-icons/bs";
import { AuthContext } from '../../Context/AuthContext';

async function getData(url) {

  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch data");
  }
}

function SingleProduct() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {category, id } = useParams();
  const toast = useToast();
  const { Auth } = useContext(AuthContext);
  console.log(category,id)
  async function fetchAndUpdateData(url) {
    setLoading(true);
    try {
      const apiResponse = await getData(url);
      console.log(apiResponse)
      setProduct(apiResponse);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }
  const handleAdd = () => {
    if (!Auth) {
      toast({
        title: 'Please Login/signup to add product to cart',
        position: 'bottom-left',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
    else{
      let Cart = JSON.parse(localStorage.getItem("Cart")) ||[]; 
      console.log(Cart);
      let obj = {
      }
      Object.keys(product).forEach(key => {
        if (product[key] && !obj[key]) {
          obj[key] = product[key];
        }
      });
      Cart.push(obj);
      alert("Product is add in the Cart")
      localStorage.setItem("Cart", JSON.stringify(Cart))
    
  }
  }
 
  useEffect(() => {
    const url = `https://capsule-web-server.onrender.com/${category}/${id}`;
    fetchAndUpdateData(url);
  }, [category, id]);

  if (loading) return <h2>Loading</h2>;
  if (error) return <h2>Some Error Occurred</h2>;

  return (
    <>
      <Stack
        direction={{ base: "column", lg: "row" }}
        maxW="80%"
        m="40px auto"
        gap={{ base: "40px", lg: 0 }}
      >
        <Flex
          gap={3}
          m="auto"
          flexDir={{ base: "column", lg: "row" }}
        >
          <Box minW={{ base: "100%", lg: "40%" }} align={{ base: "center", lg: "right" }}>
            <Image src={product.src} height={"300px"} />
          </Box>
          <Box minW={{ base: "100%", lg: "40%" }}  padding={4} textAlign="left" bg="#fff">
        <Text color="Black" fontSize={"25px"} mb={"10px"} fontWeight={600} textAlign="center">
          {(product.title)}{"..."}
        </Text>
        <Text color="grey" fontSize={"13px"} mb={"10px"} fontWeight={600}>
          {product.packsize ? product.packsize : null}
        </Text>
        {product.rating && (
          <Flex gap={"20px"}>
            <Button bg="#1aab2a" size={"xs"} color={"#fff"} fontSize={"16px"} mb={"10px"} fontWeight={600} _hover={{}}>
              {product.rating} <BsStarFill />
            </Button>
            <Text fontSize={"13px"} mb={"10px"} color="#ff6f61" fontWeight={600}>
              {product.CardRatingDetail}
            </Text>
          </Flex>
        )}
        <Flex gap={"10px"}>
          <Text color="grey" fontSize={"17px"} mb={"10px"} textDecor="line-through" fontWeight={600}>
            {product["strike-price"] ? `₹${product["strike-price"]}` : null}
          </Text>
          <Text fontSize={"19px"} mb={"10px"} color="green" fontWeight={600}>
            {product["discount-percent"] ? `₹${product["discount-percent"]}` : null}
          </Text>
        </Flex>

      <Flex align={"center"} justify="space-between">
        <Heading color="grey" fontSize={"25px"} mb={"10px"} fontWeight={600}>
          {product["price"] ? `₹${product["price"]}` : null}
        </Heading>
        <Button loadingText={"Adding"} zIndex={100} bg={"#ff6f61"} width={"300px"}size={"md"} color="black" _hover={{ bg: "#ff6f61", color: "#fff" }} onClick={handleAdd}>
          {"Add"}
        </Button>
      </Flex>
    </Box>
        </Flex>
      </Stack>
    </>
  );
}

export default SingleProduct;
