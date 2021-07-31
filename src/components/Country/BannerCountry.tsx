import { Box, Container, Flex, Text } from "@chakra-ui/react";

interface BannerCountryProps {
  bannerImage: string;
  name: string;
}

function BannerCountry({bannerImage,name}:BannerCountryProps) {

  return (
    <>
      <Box
        bg={`url(${bannerImage})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h="xl"
      >
        <Container maxW="container.xl">
          <Flex align="flex-end" h="xl">
            <Text fontSize="2xl" color="white.400" pb={16}>
              {name}
            </Text>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default BannerCountry;
