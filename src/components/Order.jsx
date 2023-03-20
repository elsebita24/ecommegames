import { useContext } from "react";
import ItemCart from "./ItemCart";
import Loading from "./Loading";
import FormOrder from "./FormOrder";
import { Utils } from "../context/UtilsContext";

const Order = () => {
  const { loading } = useContext(Utils);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ItemCart />
          <FormOrder />
        </>
      )}
    </>
  );
};

export default Order;
