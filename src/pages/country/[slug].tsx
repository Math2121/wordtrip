import {
  Box,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  Text,
  Tooltip,
  Wrap,
} from "@chakra-ui/react";
import { GetServerSideProps, GetStaticProps } from "next";
import { FiAlertCircle } from "react-icons/fi";
import BannerCountry from "../../components/Country/BannerCountry";
import Citys from "../../components/Country/Citys";
import Header from "../../components/Header";
import api from "../../services/api";
interface CountriesData {
  id: number;
  name: string;
  flag: string;
  capital: string;
  image: string;
}
interface ContinentProps {
  id: number;
  name: string;
  description: string;
  text: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOfCity: number;
  carrouselImage: string;
  bannerImage: string;
  countries: CountriesData[];
}
interface SliderProps {
  continent: ContinentProps[];
}

function Slug({ continent }: SliderProps) {

  return (
    <>
      <Header isHasBack={true} />
      <BannerCountry bannerImage={continent[0].bannerImage} name={continent[0].name} />
      <Container maxW="container.xl" mt={16}>
        <SimpleGrid minChildWidth="320px" columns={2}>
          <Box>
            <Text fontSize="md" color="black.300" columns={2} spacing={16}>
            {continent[0].text}
            </Text>
          </Box>
          <Flex
            align="center"
            justify="space-around"
            wrap="wrap"
            mt={["8", "0"]}
          >
            <Box>
              <Text
                fontSize="2xl"
                color="yellow.900"
                align="center"
                fontWeight="bold"
              >
              {continent[0].numberOfCountries}
              </Text>
              <Text fontSize="md" color="black.300" align="center">
                países
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="2xl"
                color="yellow.900"
                align="center"
                fontWeight="bold"
              >
                {continent[0].numberOfLanguages}
              </Text>
              <Text fontSize="md" color="black.300" align="center">
                línguas
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="2xl"
                color="yellow.900"
                align="center"
                fontWeight="bold"
              >
               {continent[0].numberOfCity}
              </Text>
              <Text fontSize="md" color="black.300" align="center">
                <Flex align="center">
                  cidades +100
                  <Tooltip
                    label="+200 cidades"
                    fontSize="md"
                    placement="bottom"
                  >
                    <Wrap ml={1}>
                      <Icon
                        as={FiAlertCircle}
                        color="white.300"
                        fontSize="sm"
                      />
                    </Wrap>
                  </Tooltip>
                </Flex>
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>

        <Citys city={continent[0].countries}/>
      </Container>
    </>
  );
}

export default Slug;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  const response = await api.get(`/continent/${slug}`);
  const continent = response.data;

  return {
    props: {
      continent,
    },
  };
};
