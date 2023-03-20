import { useParams } from "react-router-dom";
import { Image, Center, Box, Text } from "@chakra-ui/react";

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
    </>
  );
};

export default FinishedOrder;
