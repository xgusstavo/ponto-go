import {
  Button,
  Flex,
  Heading,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { IoPersonAddSharp } from "react-icons/io5";

export function ClientList() {
  const [isLargerThan750] = useMediaQuery("(min-width: 750px)");

  return (
    <Flex w={"100%"} justify={"space-between"} align={"center"} p={5}>
      <VStack alignItems={"start"}>
        <Heading fontSize={"2xl"} fontWeight={600}>
          Lista de Clientes
        </Heading>
        <Text fontSize={"md"} fontWeight={400}>
          20 clientes cadastrados
        </Text>
      </VStack>

      <Button
        height="40px"
        width={isLargerThan750 ? "200px" : "50px"}
        bg={"primary.100"}
        color={"white"}
        fontWeight={600}
        fontSize={isLargerThan750 ? "md" : "lg"}
        _hover={{ bg: "primary.200" }}
      >
        {isLargerThan750 ? "+ Cadastrar cliente" : <IoPersonAddSharp />}
      </Button>
    </Flex>
  );
}
