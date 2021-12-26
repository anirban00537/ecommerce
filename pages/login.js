import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import AlertBox from "../components/alert/Alert";
import { useState } from "react";
import { loginAction } from "../state/action/authenticaiton";
import { useDispatch, useSelector } from "react-redux";
import { authPageRequireCheck } from "../middleware/authCheck";

export default function Login() {
  const [credential, setcredential] = useState({
    username: "",
    password: "",
  });
  const { LoginErrorStatus, message } = useSelector(
    (state) => state.user.error
  );
  const dispatch = useDispatch();
  const Login = () => {
    dispatch(loginAction(credential));
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
              <Input
                type="text"
                placeholder="Username"
                value={credential.username}
                onChange={(e) => {
                  setcredential({ ...credential, username: e.target.value });
                }}
              />
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
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
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
                Sign in{LoginErrorStatus}
              </Button>
            </Stack>
          </Stack>
        </Box>
        {LoginErrorStatus && <AlertBox message={message} status="error" />}
      </Stack>
    </Flex>
  );
}

Login.getInitialProps = async (ctx) => {
  authPageRequireCheck(ctx);
  return {};
};
