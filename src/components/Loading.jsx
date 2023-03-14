import { Spinner, Center } from "@chakra-ui/react";

const Loading = () => {
  return (
    <>
      <Center>
        <Spinner
          margin="5em"
          thickness="5px"
          speed="0.30s"
          emptyColor="gray.100"
          color="#ef42f5"
          size="xl"
        />
      </Center>
    </>
  );
};

export default Loading;
