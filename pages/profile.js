import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { ssrAuthCheck } from "../middleware/authCheck";
import { useSelector } from "react-redux";

export default function Profile() {
  const { authenticated, user } = useSelector((state) => state.user);

  return (
    <Center py={6}>
      <Box
        maxW={"620px"}
        w={"full"}
        h={{ base: "100%", sm: "400px", lg: "500px" }}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar name={user?.name} src="https://bit.ly/dan-abramov" />

        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {user?.name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @{user?.username}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {user?.email}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #music
          </Badge>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            Message
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}

Profile.getInitialProps = async (ctx) => {
  await ssrAuthCheck(ctx, "profile");
  return {};
};
