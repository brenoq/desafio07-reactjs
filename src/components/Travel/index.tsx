import { Divider, Flex } from "@chakra-ui/react";

import { NavLink } from "./NavLink";

export function Travel() {
  return (
    <Flex direction="column" align="center" >
      <Flex
        w="1160px"
        margin="0 auto"
        mt="20"
        align="center"
        justify="space-between"
      >
        <NavLink icon="/images/cocktail.svg">vida noturna</NavLink>
        <NavLink icon="/images/surf.svg">praia</NavLink>
        <NavLink icon="/images/building.svg">moderno</NavLink>
        <NavLink icon="/images/museum.svg">clássico</NavLink>
        <NavLink icon="/images/earth.svg">e mais...</NavLink>
      </Flex>
      <Divider 
        w="90px" 
        border="2px" 
        borderColor="wdark.500"
        mt="20"
      />
    </Flex>

  );
}