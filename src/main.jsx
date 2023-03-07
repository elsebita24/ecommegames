import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMjSBYgM-NysRPgfKB4ZKRV4v0Ym0Skic",
  authDomain: "ecommegames.firebaseapp.com",
  projectId: "ecommegames",
  storageBucket: "ecommegames.appspot.com",
  messagingSenderId: "910197087317",
  appId: "1:910197087317:web:4b00b4c09e6c899c3788dc",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.300",
        color: "gray.600",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
