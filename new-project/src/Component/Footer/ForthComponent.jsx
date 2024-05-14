import { Box, Grid, GridItem,Heading,Image,Text } from "@chakra-ui/react";
import secure from '../../Image/secure.jpeg';
import affordable from '../../Image/affordable.jpeg'
const ForthComponent = () => {
  return (
    <Grid
      id="secondbox"
      templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
      gap={4}
      padding={"2rem"}
    >
      <GridItem  display={"flex"} >
      <Image  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSh1jV1L9oD0qstPdXTF8AbkNiTIvDtGQerOpGoEBAiKGyKgYfr" width={"150px"}/>
        <Box maxWidth={"60%"}>
          <Heading fontSize="1.5rem" fontWeight={"600"}>Reliable</Heading>
          <Text style={{ color: "gray" }}>All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited</Text>
        </Box>
      </GridItem>
      <GridItem display={"flex"} >
      <Image  src={secure} width={"150px"}/>
        <Box >
          <Heading fontSize="1.5rem" fontWeight={"600"}>Secure</Heading>
          <Text style={{ color: "gray" }}>All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited</Text>
        </Box>
      </GridItem>
      <GridItem  display={"flex"}>
      <Image  src={affordable} width={"150px"}/>
        <Box>
          <Heading  fontSize="1.5rem" fontWeight={"600"}>Affordable</Heading>
          <Text style={{ color: "gray" }}>All products displayed on Tata 1mg are procured from verified and licensed pharmacies. All labs listed on the platform are accredited</Text>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default ForthComponent;
