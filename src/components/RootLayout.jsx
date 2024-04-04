import { Flex } from "@chakra-ui/react";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Flex
      boxSizing={"border-box "}
      justifyContent={"space-between"}
      flexDirection={"column"}
      //   border={"1px solid black"}
      h={"250vh"}
    >
      <Header />
      <Outlet />
      <Footer />
    </Flex>
  );
}
