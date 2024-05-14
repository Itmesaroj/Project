import { Box, Divider, Heading, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Filter({ searchParams, setSearchParams, products }) {
  const [priceSort, setPriceSort] = useState(searchParams.get('priceSort') || "");
  const [ratingSort, setRatingSort] = useState(searchParams.get('ratingSort') || "");
  const [discountSort, setDiscountSort] = useState(searchParams.get('discountSort') || "");
  useEffect(()=>{
    handleDiscount(discountSort);
    handlePrice(priceSort);
    handleRating(ratingSort);
    
  },[priceSort, ratingSort, discountSort])
  const handleRating = (value) => {
    if(value!==""){
        if (value === "asc") {
            products = products.sort((a, b) => a.rating - b.rating);
          } else if (value === "desc") {
            products = products.sort((a, b) => b.rating - a.rating);
          }
          setSearchParams(prevParams => {
            const params = new URLSearchParams(prevParams);
            params.set('ratingSort', value);
            return params.toString();
          });
          setRatingSort(value);
        }
    };

  const handleDiscount = (value) => {
   if(value!==""){
    products=products.sort((a,b)=>b.discount-a.discount);
    setSearchParams(prevParams => {
      const params = new URLSearchParams(prevParams);
      params.set('discountSort', value);
      return params.toString();
    });
    setDiscountSort(value);
   }
  };

  const handlePrice = (value) => {
    if (value !== "") {
      if (value === "asc") {
        products = products.sort((a, b) => a.price - b.price);
      } else if (value === "desc") {
       products = products.sort((a, b) => b.price - a.price);
      }
      setSearchParams(prevParams => {
        const params = new URLSearchParams(prevParams);
        params.set('priceSort', value);
        return params.toString();
      });
      setPriceSort(value);
    }
  };
  

  return (
    <Box
      w={{ base: "100%", lg: "20%" }}
      flexShrink={{ base: 1, lg: 0 }}
      ml={{ base: 0, lg: "20px" }}
      mt="10px"
      p={4}
      maxH={{ base: "max-content", lg: "100vh" }}
      textAlign="left"
      bg="#fff"
    >
      <Stack gap={2}>
        <Heading fontSize={"20px"} color="#ff6f61">Price</Heading>
        <Select onChange={(e) => handlePrice(e.target.value)}  value={priceSort} >
          <option value="">Select</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </Select>
        <Divider />
        <Heading fontSize={"20px"} color="#ff6f61">Rating</Heading>
        <Select onChange={(e) => handleRating(e.target.value)}  value={ratingSort}>
          <option value="">Select</option>
          <option value="asc">Rating: Low to High</option>
          <option value="desc">Rating: High to Low</option>
        </Select>
        <Divider />
        <Heading fontSize={"20px"} color="#ff6f61">Discount</Heading>
        <Select onChange={(e) => handleDiscount(e.target.value)} value={discountSort}>
          <option value="">Select</option>
          <option value="lt10">10% and above</option>
          <option value="gte20">20% and above</option>
          <option value="gte40">40% and above</option>
          <option value="gte60">60% and above</option>
        </Select>
      </Stack>
    </Box>
  );
}

export default Filter;
