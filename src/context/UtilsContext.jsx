import { createContext } from "react";
import { useToast } from "@chakra-ui/react";

export const Utils = createContext(null);

const UtilsContext = ({ children }) => {
  const toast = useToast();
  const mostrarToast = (mensaje, tipo) => {
    toast({
      title: mensaje,
      position: "top",
      duration: 5000,
      isClosable: true,
      status: tipo,
    });
  };

  const formatPrice = (price) => Intl.NumberFormat("de-DE").format(price);

  return (
    <Utils.Provider value={{ mostrarToast, formatPrice }}>
      {children}
    </Utils.Provider>
  );
};

export default UtilsContext;
