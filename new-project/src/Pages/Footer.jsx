import { Box, Divider } from "@chakra-ui/react";
import TopFooterComp from "../Component/Footer/TopFooterComp";
import SecondFooterComp from "../Component/Footer/SecondFooterComp";
import ThirdComponent from "../Component/Footer/ThirdComponent";
import ForthComponent from "../Component/Footer/ForthComponent";
import FivComponent from "../Component/Footer/FivComponent";

const Footer = () => {
  return (
    <>
    <Box width={"100%"} marginTop={"1rem"}>
        <TopFooterComp/>
        <Divider/>
        <SecondFooterComp/>
        <ThirdComponent/>
        <Divider/>
        <ForthComponent/>
        <Divider/>
        <FivComponent/>
    </Box>
    </>
  );
};

export default Footer;
