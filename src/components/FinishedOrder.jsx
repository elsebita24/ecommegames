import { useParams } from "react-router-dom";
import { Image, Center, Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FinishedOrder = () => {
  const { orderId } = useParams();
  const imgCongratulations = "https://i.ibb.co/ZxvTBSy/congratulations.png";

  return (
    <>
      <Center>
        <Image
          src={imgCongratulations}
          alt="Img congratulations"
          className="imgCongratulations"
        />
      </Center>
      <Center>
        <Box className="boxCongratulations">
          <Text>🎉 🎁 ¡Felicitaciones! 🎊 🥳</Text>
          <Text>Su número de orden es:</Text>
          <Text className="orderNumber">{orderId}</Text>
        </Box>
      </Center>
      <Center mt={5}>
        <Link to={`/`}>
          <Button colorScheme="orange" size="lg">
            Seguir comprando
          </Button>
        </Link>
      </Center>
    </>
  );
};

export default FinishedOrder;
