import { Flex, Image, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps {
  icon: string,
  children: string,
}

export function NavLink({ icon, children }: NavLinkProps) {
  return (
    <Flex 
      direction="column"
      align="center"
      justify="center"
    >
      <Image 
        src={icon}
        alt={children}
      />
      <Text
       mt="6"
       fontSize="2xl"
       fontWeight="600"
       lineHeight="9"
      >
        {children}
      </Text>
    </Flex>
  );
}