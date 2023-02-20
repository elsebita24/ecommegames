import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { id, title, price, pictureUrl } = producto;

  return (
    <>
      <Card bg={"gray.200"} className="cardProductos">
        <CardBody p={4} marginTop="10px">
          <Image src={pictureUrl} alt={title} className="cardProductosImg" />
          <Stack mt="6" spacing="3" className="cardContenedorInfo">
            <Heading size="md">{title}</Heading>
            <Text color="blue.600" fontSize="2xl">
              $ {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider color={"gray.400"} />
        <CardFooter p={3}>
          <Link to={`/item/${id}`}>
            <Button colorScheme={"purple"}>Detalles</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default Item;
