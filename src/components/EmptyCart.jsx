import { Image, Center, Box } from "@chakra-ui/react";
const EmptyCart = () => {
  const imgNotFound = "https://i.ibb.co/rxwGKYy/emptycart.png";
  return (
    <>
      <Box>
        <Center>
          <Image src={imgNotFound} alt="Cart not found" />
        </Center>
        <Center>
          <Box className="textCarritoVacio">¡ Carrito vacio !</Box>
        </Center>
      </Box>
    </>
  );
};

export default EmptyCart;
