import {
  Button,
  Container,
  HStack,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Container
      // border={"1px solid blue"}
      maxW={"100vw"}
      h={["5%", "8%"]}
      alignContent={"center"}
      bgColor={"lightblue"}
    >
      <Stack
        boxSizing={"border-box"}
        justifyContent={"space-around"}
        display={"flex"}
        flexDirection={"row"}
        w={"100%"}
        h={"100%"}
        align={"center"}
      >
        <Button
          // border={"1px solid red"}
          w={["20%", "12%"]}
          h={["100%", "80%"]}
          variant={"unstyled"}
          alignContent={"center"}
          overflow={"hidden"}
          // borderRadius={"10%"}
        >
          <Image src="/public/navbar-icon.jpg" w={"100%"} h={"100%"} />
        </Button>
        <HStack
          // border={"1px solid pink"}
          w={["80%", "50%"]}
          justifyContent={"space-evenly"}
        >
          <Button variant={"unstyled"}>
            <Text
              fontSize={["14px", "20px"]}
              _hover={{
                color: "blue.500",
              }}
              fontWeight={"bold"}
            >
              Home
            </Text>
          </Button>
          <Button variant={"unstyled"}>
            <Text
              fontSize={["14px", "20px"]}
              _hover={{
                color: "blue.500",
              }}
            >
              <Select
                placeholder="Solutions"
                variant={"unstyled"}
                fontSize={["14px", "20px"]}
                fontWeight={"bold"}
              >
                <option value="option1">Facility Management</option>
                <option value="option2">Privet services</option>
                <option value="option3">Food services</option>
              </Select>
            </Text>
          </Button>
          <Button variant={"unstyled"}>
            <Text
              fontSize={["14px", "20px"]}
              _hover={{
                color: "blue.500",
              }}
              fontWeight={"bold"}
            >
              Contact Us
            </Text>
          </Button>
          <Button variant={"unstyled"}>
            <Text
              fontSize={["14px", "20px"]}
              _hover={{
                color: "blue.500",
              }}
              fontWeight={"bold"}
            >
              About Us
            </Text>
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
}
