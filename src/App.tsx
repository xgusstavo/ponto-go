import { Flex, Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { ClientList } from "./components/clientList/ClientList";
import { Card } from "./components/clientList/Card";
import { MenuSide } from "./components/menu/MenuSide";
import { BoxFixed } from "./components/menu/BoxFixed";

function App() {
  const [isLargerThan750] = useMediaQuery("(min-width: 750px)");

  return (
    <div>
      <Grid
        templateAreas={`"header header header"
            "nav clientList clientList"
            "nav main main"
            "nav footer footer"`}
      >
        <GridItem area={"header"} mb={100}>
          <Header />
        </GridItem>
        <GridItem area={"nav"}>
          <MenuSide />
          <BoxFixed />
        </GridItem>
        <GridItem area={"clientList"}>
          <ClientList />
        </GridItem>
        <GridItem area={"main"} w={"100%"} pb={10}>
          <Flex
            wrap={"wrap"}
            gap={5}
            direction={isLargerThan750 ? "row" : "column"}
          >
            <Card
              name="Filipe Xavier"
              email="Xavier@email.com"
              number="(53) 9 0000-0000"
            />
            <Card
              name="Gustavo Silva"
              email="Gustavo@email.com"
              number="(53) 9 0000-0000"
            />
            <Card
              name="Amanda Manduca"
              email="Manduca@email.com"
              number="(53) 9 0000-0000"
            />
            <Card
              name="Jones Radtke"
              email="Jones@email.com"
              number="(53) 9 0000-0000"
            />
            <Card
              name="Andressa Melo"
              email="Andressa@email.com"
              number="(53) 9 0000-0000"
            />
            <Card
              name="Guilherme Tessmann"
              email="Guilherme@email.com"
              number="(53) 9 0000-0000"
            />
            <Card
              name="Gabriel Brito"
              email="Brito@email.com"
              number="(53) 9 0000-0000"
            />
            <Card
              name="Carlos Vinicius"
              email="CarlosBraga@email.com"
              number="(53) 9 0000-0000"
            />
            <Card
              name="Angelo Luz"
              email="Lampada@email.com"
              number="(53) 9 0000-0000"
            />
            <Card
              name="Arthur Ropke"
              email="Ropke@email.com"
              number="(53) 9 0000-0000"
            />
            <Card
              name="Lucas Ferreira"
              email="Ferreira@email.com"
              number="(53) 9 0000-0000"
            />
            <Card
              name="Gabriel Alves"
              email="Alves@email.com"
              number="(53) 9 0000-0000"
            />
          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
