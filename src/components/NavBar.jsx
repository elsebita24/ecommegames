import React from "react";
import logo from "/src/assets/logoEcommegames.png";
import { Box, Flex, Spacer, Button, Avatar } from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const menus = [
    { nombre: "Playstation", icon: "fa-brands fa-playstation paddingIcons" },
    { nombre: "Nintendo", icon: "fa-solid fa-ghost paddingIcons" },
    { nombre: "Xbox", icon: "fa-brands fa-xbox paddingIcons" },
    { nombre: "PC", icon: "fa-solid fa-desktop paddingIcons" },
    { nombre: "Retro", icon: "fa-solid fa-gamepad paddingIcons" },
  ];
  return (
    <>
      <Box className="navBar">
        <Flex>
          <Box pt="3" pl="1">
            <Avatar size="lg" name="logoEcommegames" src={logo} />
          </Box>
          <Box p="5" w="250px">
            <h3 className="textoLogo">Ecommegames</h3>
          </Box>
          <Box p="6">
            <Flex>
              {menus.map(({ nombre, icon }, index) => (
                <Box pl="4" key={index}>
                  <Button colorScheme="whiteAlpha" variant="outline" size="sm">
                    <i className={icon}></i> {nombre}
                  </Button>
                </Box>
              ))}
            </Flex>
          </Box>
          <Spacer />
          <CartWidget />
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
