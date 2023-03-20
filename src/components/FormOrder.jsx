import { useState, useContext } from "react";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { CartContext } from "../context/ShoppingCartContext";
import {
  Input,
  Box,
  FormLabel,
  SimpleGrid,
  Button,
  Center,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { Utils } from "../context/UtilsContext";
import { useNavigate } from "react-router-dom";

const FormOrder = () => {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const { cart, setCart } = useContext(CartContext);
  const { mostrarToast, controlTelefono, controlEmail, setLoading } =
    useContext(Utils);

  const order = {
    name,
    telefono,
    email,
    cart,
    fecha: serverTimestamp(),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!order.name || !order.telefono || !order.email)
      return mostrarToast(
        "Debe completar todos los campos para finalizar la compra",
        "error"
      );

    if (!controlTelefono(order.telefono))
      return mostrarToast("Teléfono/celular incorrecto", "error");

    if (!controlEmail(order.email))
      return mostrarToast("Email incorrecto", "error");

    try {
      const db = getFirestore();
      const ordersCollection = collection(db, "Orden");
      await addDoc(ordersCollection, order).then(({ id }) => finishOrder(id));
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const finishOrder = (id) => {
    setOrderId(id);
    setCart([]);
    navigate(`/FinishedOrder/${id}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box className="cartFormOrder">
          <SimpleGrid columns={1} spacing={2}>
            <Alert status="success">
              <AlertIcon />¡ El pedido ya casi son tuyos !
            </Alert>
            <Box>
              <FormLabel>Nombre y apellido</FormLabel>
              <Input
                type="text"
                placeholder="Nombre y apellido"
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box>
              <FormLabel>Teléfono</FormLabel>
              <Input
                type="number"
                placeholder="Teléfono"
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Box>
            <Box>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box>
              <Center>
                <Button type="submit" colorScheme="whatsapp" size="lg">
                  Finalizar compra
                </Button>
              </Center>
            </Box>
          </SimpleGrid>
        </Box>
      </form>
    </>
  );
};

export default FormOrder;
