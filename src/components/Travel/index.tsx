import { Divider, Flex, Grid, GridItem } from "@chakra-ui/react";

import { NavLink } from "./NavLink";

export function Travel() {
  return (
    <Flex direction="column" align="center" >
      <Grid
        w="100%"
        margin="0 auto"
        mt="20"
        paddingLeft="36"
        paddingRight="36"
        align="center"
        justify="space-between"
        templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
        flexWrap="wrap"
        gap={[1,5]}
      >
        <GridItem>
          <NavLink icon="/images/cocktail.svg">vida noturna</NavLink>
        </GridItem>
        <GridItem>
          <NavLink icon="/images/surf.svg">praia</NavLink>
        </GridItem>
        <GridItem>
          <NavLink icon="/images/building.svg">moderno</NavLink>
        </GridItem>
        <GridItem>
          <NavLink icon="/images/museum.svg">clássico</NavLink>
        </GridItem>
        <GridItem colSpan={[2, 2, 2, 1]}>
          <NavLink icon="/images/earth.svg">e mais...</NavLink>
        </GridItem>
      </Grid>
      <Divider 
        w="90px" 
        border="2px" 
        borderColor="wdark.500"
        mt="20"
      />
    </Flex>

  );
}