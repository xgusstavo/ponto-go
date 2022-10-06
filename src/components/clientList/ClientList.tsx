import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";

export function ClientList() {
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
        width="200px"
        bg={"primary.100"}
        color={"white"}
        fontWeight={600}
        fontSize={"md"}
        _hover={{ bg: "primary.200" }}
      >
        + Cadastrar cliente
      </Button>
    </Flex>
  );
}
