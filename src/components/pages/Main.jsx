import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Main() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/public/navbar-icon.jpg",
    "/public/navbar-icon.jpg",
    "/public/navbar-icon.jpg",
    "/public/navbar-icon.jpg",
    "/public/navbar-icon.jpg",
    "/public/navbar-icon.jpg",
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container
      // border={"1px solid yellow"}
      maxW={"100vw"}
      h={"100%"}
      m={"0%"}
      p={"0%"}
    >
      <Box
        // border={"1px solid gold"}
        position="relative"
        overflow="hidden"
        h="30%"
        w="100%"
      >
        <Box
          display="flex"
          transition="transform 0.3s ease"
          transform={`translateX(-${currentSlide * 100}%)`}
          h="100%"
        >
          {images.map((imageUrl, index) => (
            <Box key={index} flex="0 0 auto" w="100%" h="100%">
              <img
                src={imageUrl}
                alt={`Image ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          ))}
        </Box>
        <Box
          position="absolute"
          bottom="10px"
          left="50%"
          transform="translateX(-50%)"
          display="flex"
        >
          {images.map((_, index) => (
            <Box
              key={index}
              w="8px"
              h="8px"
              borderRadius="50%"
              bg={index === currentSlide ? "blue.500" : "gray.400"}
              mx="2px"
              cursor="pointer"
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </Box>
      </Box>
      <Box
        // border={"1px solid black"}
        w={"100%"}
        h={"70%"}
      >
        <Text
          align={"center"}
          fontSize={["25px", "45px"]}
          fontFamily={"bold"}
          color={"gold"}
        >
          All Our Services
        </Text>
        <Box
          // border={"1px solid black"}
          h={"93%"}
          display={"flex"}
          justifyContent={"space-evenly"}
          flexDirection={"column"}
        >
          <Box
            // border={"1px solid red"}
            h={"32%"}
            display={"flex"}
            justifyContent={"space-around"}
            flexDirection={"row"}
          >
            <Box
              // border={"1px solid blue"}
              w={"30%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              overflow={"hidden"}
              borderRadius={"10%"}
            >
              <Image
                src="/public/navbar-icon.jpg"
                w={["100%", "100%"]}
                h={["50%", "100%"]}
                borderRadius={"10%"}
              />
            </Box>
            <Box
              // border={"1px solid grey"}
              w={"60%"}
            >
              <Text
                align={"center"}
                fontWeight={"bold"}
                color={"grey"}
                fontSize={["15px", "35px"]}
              >
                Facility Management
              </Text>
              <Text
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                // alignItems={"center"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed,
                delectus, dolor quas rerum, odio sit ab optio harum dolorum
                ratione reprehenderit mollitia provident perspiciatis?Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Commodi
                laborum nisi possimus laudantium neque ipsam libero quidem
              </Text>
              <Button alignContent={"center"}> Facility Services</Button>
            </Box>
          </Box>

          <Box
            // border={"1px solid red"}
            h={"35%"}
            display={"flex"}
            align={"center"}
            justifyContent={"space-around"}
            flexDirection={"row"}
          >
            <Box
              // border={"1px solid black"}
              w={"22%"}
              h={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
              flexDirection={"column"}
              bg={"lightcyan"}
            >
              <Image
                src="/public/navbar-icon.jpg"
                w={"30%"}
                h={"30%"}
                display={"flex"}
                borderRadius={"50%"}
              />
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                porro commodi esse magnam perspiciatis tenetur unde reiciendis,
                doloribus accusantium voluptatum aliquam provident, voluptates
                iusto nostrum odit non possimus delectus autem vitae rem? Non
                expedita reprehenderit, illo pariatur fugit necessitatibus
                aspernatur?
              </Text>
              <Button w={"35%"}>Party Security</Button>
            </Box>
            <Box
              // border={"1px solid black"}
              w={"22%"}
              h={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
              flexDirection={"column"}
              bg={"lightcyan"}
            >
              <Image
                src="/public/navbar-icon.jpg"
                w={"30%"}
                h={"30%"}
                display={"flex"}
                borderRadius={"50%"}
              />
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                porro commodi esse magnam perspiciatis tenetur unde reiciendis,
                doloribus accusantium voluptatum aliquam provident, voluptates
                iusto nostrum odit non possimus delectus autem vitae rem? Non
                expedita reprehenderit, illo pariatur fugit necessitatibus
                aspernatur?
              </Text>
              <Button w={"35%"}>Event Security</Button>
            </Box>
            <Box
              // border={"1px solid black"}
              w={"22%"}
              h={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
              flexDirection={"column"}
              bg={"lightcyan"}
            >
              <Image
                src="/public/navbar-icon.jpg"
                w={"30%"}
                h={"30%"}
                display={"flex"}
                borderRadius={"50%"}
              />
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                porro commodi esse magnam perspiciatis tenetur unde reiciendis,
                doloribus accusantium voluptatum aliquam provident, voluptates
                iusto nostrum odit non possimus delectus autem vitae rem? Non
                expedita reprehenderit, illo pariatur fugit necessitatibus
                aspernatur?
              </Text>
              <Button w={"35%"}>Food Services</Button>
            </Box>
            <Box
              // border={"1px solid black"}
              w={"22%"}
              h={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
              flexDirection={"column"}
              bg={"lightcyan"}
            >
              <Image
                src="/public/navbar-icon.jpg"
                w={"30%"}
                h={"30%"}
                display={"flex"}
                borderRadius={"50%"}
              />
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                porro commodi esse magnam perspiciatis tenetur unde reiciendis,
                doloribus accusantium voluptatum aliquam provident, voluptates
                iusto nostrum odit non possimus delectus autem vitae rem? Non
                expedita reprehenderit, illo pariatur fugit necessitatibus
                aspernatur?
              </Text>
              <Button w={"35%"}>Private Sevices</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
