import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authPageRequireCheck } from "../middleware/authCheck";
import { signupAction } from "../state/action/authenticaiton";

export default function Signup() {
  const [credential, setcredential] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
    phone: "",
    password_confirmation: "",
  });
  const [alertMessage, setalertMessage] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const Signup = async () => {
    setalertMessage({
      username: "",
      password: "",
      email: "",
      phone: "",
    });
    const result = await dispatch(signupAction(credential));
    if (!result) return;
    const { username, password, email, phone, name, password_confirmation } =
      result;
    if (
      username ||
      password ||
      email ||
      phone ||
      name ||
      password_confirmation
    ) {
      setalertMessage({
        ...alertMessage,
        username: username,
        password: password,
        email: email,
        phone: phone,
        name: name,
        password_confirmation: password_confirmation,
      });
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Register your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="Username">
              <FormLabel>Username </FormLabel>
              <Input
                type="text"
                placeholder="Username"
                value={credential.username}
                onChange={(e) => {
                  setcredential({ ...credential, username: e.target.value });
                }}
              />
              {alertMessage.username && (
                <Text color="red.500">{alertMessage.username}</Text>
              )}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                value={credential.password}
                onChange={(e) => {
                  setcredential({ ...credential, password: e.target.value });
                }}
              />
              {alertMessage.password && (
                <Text color="red.500">{alertMessage.password}</Text>
              )}
            </FormControl>
            <FormControl id="confirmPassword">
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                value={credential.password_confirmation}
                onChange={(e) => {
                  setcredential({
                    ...credential,
                    password_confirmation: e.target.value,
                  });
                }}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                value={credential.email}
                onChange={(e) => {
                  setcredential({ ...credential, email: e.target.value });
                }}
              />
              {alertMessage.email && (
                <Text color="red.500">{alertMessage.email}</Text>
              )}
            </FormControl>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Name"
                value={credential.name}
                onChange={(e) => {
                  setcredential({ ...credential, name: e.target.value });
                }}
              />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone</FormLabel>
              <Input
                type="text"
                placeholder="Phone"
                value={credential.phone}
                onChange={(e) => {
                  setcredential({ ...credential, phone: e.target.value });
                }}
              />
              {alertMessage.phone && (
                <Text color="red.500">{alertMessage.phone}</Text>
              )}
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Link href="/login">
                  <Text isExternal color="blue.500">
                    Already have an account?
                  </Text>
                </Link>
              </Stack>

              <Button
                bg={"blue.400"}
                color={"white"}
                // disabled={
                //   credential.username === "" ||
                //   credential.password === "" ||
                //   credential.email === "" ||
                //   credential.phone === "" ||
                //   credential.name === "" ||
                //   credential.password_confirmation === ""
                // }
                _hover={{
                  bg: "blue.500",
                }}
                onClick={Signup}
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
Signup.getInitialProps = async (ctx) => {
  authPageRequireCheck(ctx);
  return {};
};
