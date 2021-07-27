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
import { FiAlertCircle } from "react-icons/fi";
import BannerCountry from "../../components/Country/BannerCountry";
import Citys from "../../components/Country/Citys";
import Header from "../../components/Header";

function Slug() {
  return (
    <>
      <Header isHasBack={true} />
      <BannerCountry image="england" name="Europa" />
      <Container maxW="container.xl" mt={16}>
        <SimpleGrid minChildWidth="320px" columns={2}>
          <Box>
            <Text fontSize="md" color="black.300" columns={2} spacing={16}>
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Box>
          <Flex align="center" justify="space-around"  wrap="wrap"  mt={['8','0']}>
            <Box>
              <Text
                fontSize="2xl"
                color="yellow.900"
                align="center"
                fontWeight="bold"
              >
                50
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
                60
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
                27
              </Text>
              <Text fontSize="md" color="black.300" align="center">
                <Flex align="center">
                  cidades +100
                  <Tooltip label="+200 cidades" fontSize="md" placement="bottom">
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

        <Citys/>
      </Container>
    </>
  );
}

export default Slug;
