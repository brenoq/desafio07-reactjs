import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Box, Flex, Text } from "@chakra-ui/react";

SwiperCore.use([Navigation, Pagination])

export function Carrousel() {
  return (
    <Flex 
      m="0 auto"
      mt="14"
      mb="10"
      w="1240px" 
    >
      <Swiper
        id="main"
        navigation 
        pagination={{clickable: true}} 
        loop={true} 
      >
        <SwiperSlide key="1">
          <Flex
            bgImage="url('/images/continent/europe.png')"
            bgSize="cover"
            bgRepeat="no-repeat"
            align="center" 
            justify="center"
            w="1240px"
            h="450px"
          >
            <Box color="white" textAlign="center" fontWeight="700">
              <Text fontSize="5xl">Europa</Text>
              <Text fontSize="2xl" mt="4">O continente mais antigo</Text>
            </Box>
          </Flex>
        </SwiperSlide>

        <SwiperSlide key="2">
          <Flex
            bgImage="url('/images/continent/asia.png')"
            bgSize="cover"
            bgRepeat="no-repeat"
            align="center" 
            justify="center"
            w="1240px"
            h="450px"
          >
            <Box color="white" textAlign="center" fontWeight="700">
              <Text fontSize="5xl">Asia</Text>
              <Text fontSize="2xl" mt="4">O maior continente</Text>
            </Box>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}

