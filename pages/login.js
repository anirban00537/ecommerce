import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Text,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
import { loginAction } from "../state/action/authenticaiton";
import { useDispatch } from "react-redux";
import { authPageRequireCheck } from "../middleware/authCheck";

export default function Login() {
  const [credential, setcredential] = useState({
    username: "",
    password: "",
  });
  const [alertMessage, setalertMessage] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const Login = async () => {
    setalertMessage({
      username: "",
      password: "",
    });
    const { username, password } = await dispatch(loginAction(credential));
    if (username || password) {
      setalertMessage({
        ...alertMessage,
        username: username,
        password: password,
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
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
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

              {/* red error message */}

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
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link
                  href={{
                    pathname: "/forgot-password",
                  }}
                  color={"blue.400"}
                >
                  Forgot password?
                </Link>
              </Stack>

              <Button
                bg={"blue.400"}
                color={"white"}
                disabled={!credential.username || !credential.password}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={Login}
              >
                Sign in
              </Button>
              <Link href="/signup">
                <Text isExternal color="blue.500">
                  Dont have an account?
                </Text>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

Login.getInitialProps = async (ctx) => {
  authPageRequireCheck(ctx);
  return {};
};
