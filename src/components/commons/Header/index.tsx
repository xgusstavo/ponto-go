import {
  Flex,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { IoPersonCircle } from "react-icons/io5";

export function Header() {
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
