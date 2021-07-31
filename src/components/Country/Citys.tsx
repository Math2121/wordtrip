import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Citys {
  id: number;
  name: string;
  capital: string;
  flag:string;
  image: string;
}
interface CityProps {
  city: Citys[];
}
function Citys({city}:CityProps) {
  return (
    <>
     <Text fontSize="2xl" color="black.300" mt={16} mb={8} fontWeight="bold">
        Cidades +100
        </Text>
      <SimpleGrid minChildWidth="320px" columns={4}   spacing="16px">
       {city.map(item =>(
        <Box
          maxW="xs"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="yellow.900"
          h="xs"
        >
          <Image
            src={item.image}
            alt="london"
            boxSize="100%"
            h="3xs"
            objectFit="cover"
          />

          <Flex align="center" justify="space-around" mt="5">
            <Box>
              <Text fontSize="2xl" color="black.300">
                {item.name}
              </Text>
              <Text fontSize="md" color="gray.300">
              {item.capital}
              </Text>
            </Box>

            <Image src={item.flag} alt="" w={8} h={8} borderRadius="2xl"/>
          </Flex>
        </Box>
         ))}
      </SimpleGrid>
    </>
  );
}

export default Citys;
