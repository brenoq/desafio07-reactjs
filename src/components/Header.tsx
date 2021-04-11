import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      align="center"
      justify="center"
      w="100%"
    >
      <Image 
        src="/images/logo.svg"
        alt="logo"
        height="45.92px"
        m="6"
      />
    </Flex>
  );
}