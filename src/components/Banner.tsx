import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box 
      w="100%"
      h="335px"
      bgImage="url('/images/banner_background.jpg')" 
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Flex justify="space-between">
        <Flex 
          direction="column"
          align="right"
          ml="36"
        >
          <Text
            w="426px"
            fontSize="4xl"
            fontWeight="500"
            mt="20"
            color="wlight.50"
          >
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text
            w="524px"
            fontSize="xl"
            fontWeight="400"
            mt="5"
            color="wlight.100"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        { isWideVersion && 
          <Image 
            src="/images/airplane.svg" 
            alt="airplane" 
            mt="20"
            mr="36"
          />
        }
      </Flex>
    </Box>
  );
}