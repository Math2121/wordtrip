import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

function Citys() {
  return (
    <>
     <Text fontSize="2xl" color="black.300" mt={16} mb={8} fontWeight="bold">
        Cidades +100
        </Text>
      <SimpleGrid minChildWidth="320px" columns={4}  spacing="45px">
       
        <Box
          maxW="xs"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="yellow.900"
          h="xs"
        >
          <Image
            src="/images/london.png"
            alt="london"
            boxSize="100%"
            h="3xs"
            objectFit="cover"
          />

          <Flex align="center" justify="space-around" mt="5">
            <Box>
              <Text fontSize="2xl" color="black.300">
                Londres
              </Text>
              <Text fontSize="md" color="gray.300">
                Reino Unido
              </Text>
            </Box>

            <Image src="/images/flag.png" alt="" />
          </Flex>
        </Box>
        <Box
          maxW="xs"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="yellow.900"
          h="xs"
        >
          <Image
            src="/images/london.png"
            alt="london"
            boxSize="100%"
            h="3xs"
            objectFit="cover"
          />

          <Flex align="center" justify="space-around" mt="5">
            <Box>
              <Text fontSize="2xl" color="black.300">
                Londres
              </Text>
              <Text fontSize="md" color="gray.300">
                Reino Unido
              </Text>
            </Box>

            <Image src="/images/flag.png" alt="" />
          </Flex>
        </Box>
        <Box
          maxW="xs"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="yellow.900"
          h="xs"
        >
          <Image
            src="/images/london.png"
            alt="london"
            boxSize="100%"
            h="3xs"
            objectFit="cover"
          />

          <Flex align="center" justify="space-around" mt="5">
            <Box>
              <Text fontSize="2xl" color="black.300">
                Londres
              </Text>
              <Text fontSize="md" color="gray.300">
                Reino Unido
              </Text>
            </Box>

            <Image src="/images/flag.png" alt="" />
          </Flex>
        </Box>
        <Box
          maxW="xs"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="yellow.900"
          h="xs"
        >
          <Image
            src="/images/london.png"
            alt="london"
            boxSize="100%"
            h="3xs"
            objectFit="cover"
          />

          <Flex align="center" justify="space-around" mt="5">
            <Box>
              <Text fontSize="2xl" color="black.300">
                Londres
              </Text>
              <Text fontSize="md" color="gray.300">
                Reino Unido
              </Text>
            </Box>

            <Image src="/images/flag.png" alt="" />
          </Flex>
        </Box>
        <Box
          maxW="xs"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="yellow.900"
          h="xs"
        >
          <Image
            src="/images/london.png"
            alt="london"
            boxSize="100%"
            h="3xs"
            objectFit="cover"
          />

          <Flex align="center" justify="space-around" mt="5">
            <Box>
              <Text fontSize="2xl" color="black.300">
                Londres
              </Text>
              <Text fontSize="md" color="gray.300">
                Reino Unido
              </Text>
            </Box>

            <Image src="/images/flag.png" alt="" />
          </Flex>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default Citys;
