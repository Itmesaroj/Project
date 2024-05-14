import { useContext } from "react";
import { Link } from "react-router-dom";
import { GridItem, Box, Image, Text, Flex, Button, Heading, useToast } from "@chakra-ui/react";
import { BsStarFill } from "react-icons/bs";
import { AuthContext } from '../../Context/AuthContext';
function ProductCard({ product }) {
  const toast = useToast();
  const { Auth } = useContext(AuthContext);
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
 
  const getShortenedTitle = (title) => {
    const words = title.split(' ');
    const shortenedWords = words.slice(0, 10); 
    return shortenedWords.join(' ');
  };

  return (
    <GridItem w="100%" padding={4} textAlign="left" bg="#fff">
      <Link to={`/${product.id}`}>
        <Box maxW={"100%"} h={"150px"} mb={"10px"} align={"center"}>
          <Image h="100%" src={product.src} />
        </Box>
        <Text color="grey" fontSize={"15px"} mb={"10px"} fontWeight={600} textAlign="center">
          {getShortenedTitle(product.title)}{"..."}
        </Text>
        <Text color="grey" fontSize={"13px"} mb={"10px"} fontWeight={600}>
          {product.packsize ? product.packsize : null}
        </Text>
        {product.rating && (
          <Flex gap={"20px"}>
            <Button bg="#1aab2a" size={"xs"} color={"#fff"} fontSize={"13px"} mb={"10px"} fontWeight={600} _hover={{}}>
              {product.rating} <BsStarFill />
            </Button>
            <Text fontSize={"13px"} mb={"10px"} color="#ff6f61" fontWeight={600}>
              {product.CardRatingDetail}
            </Text>
          </Flex>
        )}
        <Flex gap={"10px"}>
          <Text color="grey" fontSize={"13px"} mb={"10px"} textDecor="line-through" fontWeight={600}>
            {product["strike-price"] ? `₹${product["strike-price"]}` : null}
          </Text>
          <Text fontSize={"13px"} mb={"10px"} color="green" fontWeight={600}>
            {product["discount-percent"] ? `₹${product["discount-percent"]}` : null}
          </Text>
        </Flex>
      </Link>
      <Flex align={"center"} justify="space-between">
        <Heading color="grey" fontSize={"15px"} mb={"10px"} fontWeight={600}>
          {product["price"] ? `₹${product["price"]}` : null}
        </Heading>
        <Button loadingText={"Adding"} zIndex={100} bg={"#fff"} size={"sm"} color="#ff6f61" _hover={{ bg: "#ff6f61", color: "#fff" }} onClick={handleAdd}>
          {"Add"}
        </Button>
      </Flex>
    </GridItem>
  );
}

export default ProductCard;
