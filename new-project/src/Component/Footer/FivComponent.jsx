import { Box, Link, Divider } from "@chakra-ui/react";


function FivComponent() {
  return (
    <Box  textAlign="center" mt={6} bg={"white"}>
    <Box  display="flex" justifyContent="center">
      <Box className="img1" mr={4}>
        <Link href="http://legitscript.com" target="_blank" title="Verify LegitScript Approval">
          <img src="https://static.legitscript.com/seals/729605.png" alt="LegitScript approved" width="130" height="90" />
        </Link>
      </Box>
      <Box >
        <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1580717209/URS_ebgmxc.png" alt="" width="110px" height="100px" />
      </Box>
    </Box>
    <Box  mt={4}>
      <h3>Indias only LegitScript and ISO/IEC 27001 certified online healthcare platform</h3>
    </Box>
    <Divider mt={6} mb={6} />
    <Box textAlign="center">
      <h3>Know More About Tata 1mg</h3>
      <Box mt={2}>
        <img src="https://img.1mg.com/images/down-arrowRebrand.svg" alt="" width="11px" height="9px" />
      </Box>
    </Box>
  </Box>

  )
}

export default FivComponent
