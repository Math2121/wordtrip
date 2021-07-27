import {
  Box,
  Center,
  Container,
  Flex,
  Icon,
  Image,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";
interface LinkHeader {
  isHasBack?: boolean;
}
function Header({ isHasBack = false }: LinkHeader) {
  return (
    <>
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between" w="100%" h="100px">
          {isHasBack ? (
            <Link href="/">
              <Icon
                as={FiChevronLeft}
                w={8}
                h={8}
                float="left"
                display="block"
              />
            </Link>
          ) : (
            <Box></Box>
          )}

          <Image src="/images/Logo.svg" alt="WordTrip" />

          <Box></Box>
        </Flex>
      </Container>
    </>
  );
}

export default Header;
