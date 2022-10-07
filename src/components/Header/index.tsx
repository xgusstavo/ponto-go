import {
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";

export function Header() {
  const [isLargerThan750] = useMediaQuery("(min-width: 750px)");
  return (
    <Flex
      align={"center"}
      justify={"space-between"}
      p={"5"}
      bg={"primary.100"}
      px={30}
      position={"fixed"}
      w={"100%"}
      zIndex={1}
    >
      <Menu>
        <MenuButton
          display={isLargerThan750 ? "none" : "flex"}
          as={Button}
          bg={"primary.100"}
          color={"white"}
          fontSize={"2xl"}
          _hover={{ bg: "primary.100" }}
        >
          <AiOutlineMenu />
        </MenuButton>
        <MenuList>
          <MenuItem>Administradores</MenuItem>
          <MenuItem>Clientes</MenuItem>
          <MenuItem>Colaboradores</MenuItem>
        </MenuList>
      </Menu>
      <Heading
        fontSize={30}
        fontWeight={700}
        color={"white"}
        fontFamily={"heading"}
      >
        Ponto Go
      </Heading>
      <Menu>
        <MenuButton as={Button} colorScheme="primary.100" fontSize={50}>
          <IoPersonCircle />
        </MenuButton>
        <MenuList>
          <MenuGroup title="Perfil">
            <MenuItem>Minha Conta</MenuItem>
            <MenuItem>Pagamentos</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Ajuda">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
}
