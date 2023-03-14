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
import { useContext } from "react";
import { Utils } from "../context/UtilsContext";

const Item = ({ producto }) => {
  const { id, title, price, pictureUrl } = producto;
  const { formatPrice } = useContext(Utils);

  return (
    <>
      <Card bg={"gray.200"} className="cardProductos">
        <CardBody p={4} marginTop="10px">
          <Image src={pictureUrl} alt={title} className="cardProductosImg" />
          <Stack mt="6" spacing="3" className="cardContenedorInfo">
            <Heading size="md">{title}</Heading>
            <Text color="blue.600" fontSize="2xl">
              $ {formatPrice(price)}
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
