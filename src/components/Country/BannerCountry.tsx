import { Box, Container, Flex, Text } from "@chakra-ui/react";

interface BannerCountryProps {
  image: string;
  name: string;
}

function BannerCountry({image,name}:BannerCountryProps) {
  return (
    <>
      <Box
        bg="url('/images/england.png')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h="xl"
      >
        <Container maxW="container.xl">
          <Flex align="flex-end" h="xl">
            <Text fontSize="2xl" color="white.400" pb={16}>
              Europa
            </Text>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default BannerCountry;
