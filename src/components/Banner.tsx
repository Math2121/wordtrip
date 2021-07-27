import {
  Box,
  Container,
  Flex,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

function Banner() {
  return (
    <Box
      backgroundImage="url('/images/sky.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      pt="24px"
      pb="24px"
      h={['3xs','2xs']}
    >
      <Container maxW="container.xl">
        <Flex align="center" position="relative" wrap={['wrap','nowrap']}  h={['3xs','2xs']}>
          <Box >
            <Stack spacing="24px">
              <Text fontSize="2xl" color="white.400">
                5 Continentes,<br></br> infinitas possibilidades.
              </Text>

              <Text fontSize="sm" color="white.300">
                Chegou a hora de tirar do papel a viagem que você<br></br>{" "}
                sempre sonhou.
              </Text>
            </Stack>
          </Box>
          <Spacer />
          <Image src="/images/Airplane.svg"    objectFit="cover" alt="avião" mt="34px"  w="sm" display={['none','block']}/>
        </Flex>
      </Container>
    </Box>
  );
}

export default Banner;
