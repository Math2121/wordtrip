import { Flex, Text } from "@chakra-ui/react";
interface SliderProps{
  nameCountry:string;
  description:string;
}

function IndexTsx({nameCountry,description}:SliderProps) {
  return (
    <>
      <Flex align="center" direction="column" justify="center" h="xs">
        <Text fontSize="2xl" color="white.300" align="center">
          <b>{nameCountry}</b>
        </Text>
        <Text fontSize="md" color="#DADADA" align="center">
          <b>{description}</b>
        </Text>
      </Flex>
    </>
  );
}

export default IndexTsx;
