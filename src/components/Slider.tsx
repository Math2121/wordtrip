import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination,Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination,Autoplay]);
function Slider() {
  return (
    <Container maxW="container.xl" mt={24} mb={8}>
      <Text fontSize="2xl" color="black.300" align="center" mb={8}>
        <b>
          Vamos nessa?<br></br>
          Então escolha seu continente
        </b>
      </Text>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <Box
            bgImage="url('/images/continent.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            h="xs"
          >
            <Flex align="center" direction="column" justify="center" h="xs">
              <Text fontSize="2xl" color="white.300" align="center">
                <b>Europa</b>
              </Text>
              <Text fontSize="md" color="#DADADA" align="center">
                <b>O continente mais antigo.</b>
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            bgImage="url('/images/continent.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            h="xs"
          >
            <Flex align="center" direction="column" justify="center" h="xs">
              <Text fontSize="2xl" color="white.300" align="center">
                <b>Europa</b>
              </Text>
              <Text fontSize="md" color="#DADADA" align="center">
                <b>O continente mais antigo.</b>
              </Text>
            </Flex>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Slider;
