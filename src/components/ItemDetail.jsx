import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Badge,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  const { title, description, pictureUrl, price, stock } = producto;
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        className="cardProductDetail"
        bg={"gray.200"}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "500px" }}
          src={pictureUrl}
          alt={title}
          className="imgItemDetail"
        />

        <Stack>
          <CardBody>
            <Heading size="2xl" className="titleProductDetail">
              {title}
            </Heading>
            <Text py="10">{description}</Text>
            <Badge colorScheme="green" variant="subtle">
              <Text color="blue.400" fontSize="4xl">
                $ {price}
              </Text>
            </Badge>
          </CardBody>

          <CardFooter>
            <ItemCount stockDisponible={stock} />
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};

export default ItemDetail;
