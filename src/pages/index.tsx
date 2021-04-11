import { Box, Flex, Text } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Carrousel } from "../components/Carrousel";
import { Header } from "../components/Header";
import { Travel } from "../components/Travel";

export default function Home() {
  return (
    <Box>
      <Header />
      <Banner />
      <Travel />

      <Flex 
        mt="14" 
        direction="column" 
        align="center" 
        justify="center"
        fontSize="4xl"
        fontWeight="500"
        color="wdark.500"
      >
        <Text>
          Vamos nessa?
        </Text>
        <Text>
          Então escolha seu continente
        </Text>
      </Flex>
      <Carrousel />
    </Box>
  );
}
