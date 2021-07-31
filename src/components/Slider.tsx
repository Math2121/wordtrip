import {
  Box,
  Container,
  Flex,
  Link,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import SliderName from "../components/SliderName";
SwiperCore.use([Navigation, Pagination, Autoplay]);
interface Continent {
  id: number;
  name: string;
  description: string;
  carrouselImage: string;
}

interface SliderProps {
  sliders: Continent[];
}
function Slider({ sliders }: SliderProps) {
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
        {sliders &&
          sliders.map((item) => (
            <SwiperSlide key={item.id}>
              <LinkOverlay href={`/country/${item.id}`}>
                <Box
                  style={{
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    backgroundBlendMode: "darken",
                    background: `rgba(0, 0, 0, 0.35) url('${item.carrouselImage}')`,
                  }}
                  h="xs"
                >
                  <SliderName
                    nameCountry={item.name}
                    description={item.description}
                  />
                </Box>
              </LinkOverlay>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
}

export default Slider;
