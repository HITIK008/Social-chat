import { Box, Container, Flex, VStack, Image } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        {/* //left side */}
        <Flex justifyContent={"center"} alignContent={"center"}>
        {/* <Box display={{ base: "none", md: "block" }}>
          <Image src="/auth.png" h={550} w={400} alt='Phone img'></Image>
        </Box> */}

        {/* right side */}
        <VStack spacing={4} align={"stretch"}>
         <AuthForm/>
        </VStack> 

        </Flex>
       
       
      </Container>
    </Flex>
  );
};

export default AuthPage;
