import { Grid, GridItem, Heading,Text,Box,Button,Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
function ThirdComponent() {
  return (
    <div>
      <Grid padding={"2rem"} gridTemplateColumns={{base:"repeat(3,1fr)",md:"repeat(3,1fr)",lg:"repeat(5,1fr)"}}>
<GridItem>
    <Heading fontSize={"1.8rem"} color={"black"} fontWeight={"400"}>Know Us</Heading>
    <Text>About Us</Text>
    <Text>Contact Us</Text>
    <Text>Press Coverage</Text>
    <Text>Careers</Text>
    <Text>Business Partnership</Text>
    <Text>Become a Health Partner</Text>
</GridItem>
<GridItem>
        <Heading fontSize={"1.8rem"} color={"black"} fontWeight={"400"}>Our Policies</Heading>
        <Text>Privacy Policy</Text>
        <Text>Terms and Conditions</Text>
        <Text>Editorial Policy</Text>
        <Text>Return Policy</Text>
        <Text>IP Policy</Text>
        <Text>Grievance Redressal Policy</Text>
      </GridItem>
      <GridItem>
        <Heading fontSize={"1.8rem"}color={"black"} fontWeight={"400"}>Our Services</Heading>
        <Text>Order Medicines</Text>
        <Text>Book Lab</Text>
        <Text>Consult a Doctor</Text>
        <Text>Ayurveda Articles</Text>
        <Text>Hindi Articles</Text>
        <Text>Care Plan</Text>
      </GridItem>
      <GridItem>
      <Box id="connect" marginRight="50px">
      <Text fontSize={"1.8rem"}color={"black"} >Connect</Text>
      <Text>social link</Text>
      <Box  display={"flex"}  gap={"1rem"}         >
        <Link href="https://www.facebook.com/1mgOfficial" mr="2">
          <Image src="https://cdn3d.iconscout.com/3d/free/thumb/free-facebook-logo-6858725-5638269.png?f=webp" width="35" height="35" alt="Facebook" />
        </Link>
       
        <Link href="https://www.twitter.com/1mgOfficial" mr="2">
          <Image src="https://w7.pngwing.com/pngs/59/223/png-transparent-bird-tweet-twitter-twitter-logo-social-media-icon.png" width="35" height="35" alt="Twitter" />
        </Link>
    
        <Link href="https://www.youtube.com/c/1mgofficial" mr="2">
          <Image src="https://w7.pngwing.com/pngs/208/269/png-transparent-youtube-play-button-computer-icons-youtube-youtube-logo-angle-rectangle-logo-thumbnail.png" width="35" height="35" alt="YouTube" />
        </Link>
        
        <Link href="https://www.linkedin.com/company/1mg" mr="2">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" width="35" height="35" alt="LinkedIn" />
        </Link>
      </Box>
      <Text mb="4">Want daily dose of health?</Text>
      <Button  bg={"#ff4f61"} color={"white"} _hover={{bg:"#ff4f61",color:"white"}}>Sign Up</Button>
    </Box>
      </GridItem>
      <GridItem>
        <Image src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png"/>
      </GridItem>
      </Grid>
    </div>
  )
}

export default ThirdComponent
