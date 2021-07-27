import { Box, SimpleGrid, Image, Text, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

function Types() {
  return (
    <Container maxW="container.xl">
    <SimpleGrid  minChildWidth="120px"  columns={5} gap={4} align="center" mt={24}>
      <Box>
        <Image
          src="/images/cocktail.svg"
          alt="Vida noturna"
          objectFit="cover"
        />
        <Text fontSize="sm" color="black.400" mt={4}>
        <b>
          vida noturna
          </b>
        </Text>
      </Box>
      <Box>
        <Image
          src="/images/surf.svg"
          alt="praia"
          objectFit="cover"
        />
        <Text fontSize="sm" color="black.400" mt={4}>
        <b>
        praia
        </b>
        </Text>
      </Box>
      <Box>
        <Image
          src="/images/building.svg"
          alt="moderno"
          objectFit="cover"
        />
        <Text fontSize="sm" color="black.400" mt={4}>
        <b>
        moderno
        </b>
        </Text>
      </Box>
      <Box>
        <Image
          src="/images/museum.svg"
          alt="Vida noturna"
          objectFit="cover"
        />
        <Text fontSize="sm" color="black.400" mt={4}>
        <b>
        clássico
        </b>
        </Text>
      </Box>

      <Box>
        <Image
          src="/images/earth.svg"
          alt="e mais..."
          objectFit="cover"
        />
        <Text fontSize="sm" color="black.400" mt={4}>
          <b>
        e mais...
        </b>
        </Text>
      </Box>
    </SimpleGrid>
    </Container>
  );
}

export default Types;
