import { Flex } from "@chakra-ui/react";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import Main from "../pages/Main";

export default function Home() {
  return (
    <Flex
      boxSizing={"border-box "}
      justifyContent={"space-between"}
      flexDirection={"column"}
      //   border={"1px solid black"}
      h={"250vh"}
    >
      <Header />
      <Main />
      <Footer />
    </Flex>
  );
}
