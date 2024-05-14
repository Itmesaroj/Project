import { useState, useEffect } from "react";
import { Flex, Box, Grid, Button } from '@chakra-ui/react';
import ProductCard from "../Component/Prouduts/ProductCard";
import { useSearchParams } from "react-router-dom";
import Filter from "../Component/Prouduts/Filter";

async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page')) || 1);
  const itemsPerPage = 12;

  useEffect(() => {
    async function fetchAndUpdateData() {
      setLoading(true);
      try {
        const apiResponse = await getData("https://capsule-web-server.onrender.com/all");
        setProducts(apiResponse);
        console.log(apiResponse);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchAndUpdateData();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePrevPage = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setSearchParams(prevParams => {
      const params = new URLSearchParams(prevParams);
      params.set('page', prevPage.toString());
      return params.toString();
    });
    setCurrentPage(prevPage);
  };

  const handleNextPage = () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    setSearchParams(prevParams => {
      const params = new URLSearchParams(prevParams);
      params.set('page', nextPage.toString());
      return params.toString();
    });
    setCurrentPage(nextPage);
  };

  return (
    <>
      <Flex gap={4} pt="40px" bg={"#f6f6f6"} flexDir={{ base: "column", lg: "row" }}>
        <Filter
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          products={products}
        />
        <Box width={{ base: "100%", lg: "72%" }} m={{ base: 0, lg: "auto" }}>
          <Grid templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={"20px"}>
            {currentProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </Grid>
          <Flex justify="center" mt={4}>
            <Button mr={2} onClick={handlePrevPage} disabled={currentPage === 1}>Previous</Button>
            {Array.from({ length: totalPages }, (_, index) => (
              <Button key={index + 1} onClick={() => { setCurrentPage(index + 1); setSearchParams(prevParams => {
                const params = new URLSearchParams(prevParams);
                params.set('page', (index + 1).toString());
                return params.toString();
              }) }} color={currentPage === index + 1 ? "#ff6f61" : "black"}>{index + 1}</Button>
            ))}
            <Button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default AllProducts;
