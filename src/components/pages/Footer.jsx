import { Button, Container, Stack, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container
      // border={"1px solid red"}
      maxW={"100vw"}
      h={"18%"}
      boxSizing={"border-box"}
      bgColor={"grey"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack>
        <VStack>
          <Text fontSize={["18px", "20px"]} fontWeight={"bold"} color={"red"}>
            Important Links
          </Text>

          <Button variant={"unstyled"}>
            <Text
              fontSize={["14px", "20px"]}
              _hover={{
                color: "pink.500",
              }}
            >
              Home
            </Text>
          </Button>
          <Button variant={"unstyled"}>
            <Text
              fontSize={["14px", "20px"]}
              _hover={{
                color: "pink.500",
              }}
            >
              Solution
            </Text>
          </Button>
          <Button variant={"unstyled"}>
            <Text
              fontSize={["14px", "20px"]}
              _hover={{
                color: "pink.500",
              }}
            >
              Contact Us
            </Text>
          </Button>
          <Button variant={"unstyled"}>
            <Text
              fontSize={["14px", "20px"]}
              _hover={{
                color: "pink.500",
              }}
            >
              About Us
            </Text>
          </Button>

          <Text>&copy; 2023 All Right are Reserved</Text>
        </VStack>
      </Stack>
    </Container>
  );
}
