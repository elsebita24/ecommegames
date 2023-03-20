import { createContext, useState } from "react";
import { useToast } from "@chakra-ui/react";

export const Utils = createContext(null);

const UtilsContext = ({ children }) => {
  const [loading, setLoading] = useState(false);

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

  const controlTelefono = (telefono) => {
    let comprobacion =
      (!/^(09)/.test(telefono) || telefono.length != 9) &&
      (!/^(2)/.test(telefono) || telefono.length != 8) &&
      (!/^(4)/.test(telefono) || telefono.length != 8)
        ? false
        : true;

    return comprobacion;
  };

  const controlEmail = (email) => {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      email
    );
  };

  return (
    <Utils.Provider
      value={{
        mostrarToast,
        formatPrice,
        controlTelefono,
        controlEmail,
        loading,
        setLoading,
      }}
    >
      {children}
    </Utils.Provider>
  );
};

export default UtilsContext;
