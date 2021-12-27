import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { verifyEmailOtpAction } from "../../state/action/authenticaiton";

const Sendotp = ({ setsteps }) => {
  const [credential, setcredential] = useState({
    email: "",
    otp: "",
    password: "",
    password_confirmation: "",
  });
  const toast = useToast();
  return (
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={22} px={12}>
      <Stack align={"center"}>
        <Heading fontSize={"4xl"}>Enter your otp</Heading>
      </Stack>

      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <FormControl id="Number">
            <FormLabel>Enter otp</FormLabel>
            <Input
              type="number"
              value={credential.otp}
              onChange={(e) =>
                setcredential({ ...credential, otp: e.target.value })
              }
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={credential.email}
              onChange={(e) =>
                setcredential({ ...credential, email: e.target.value })
              }
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={credential.password}
              onChange={(e) =>
                setcredential({ ...credential, password: e.target.value })
              }
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              value={credential.password_confirmation}
              onChange={(e) =>
                setcredential({
                  ...credential,
                  password_confirmation: e.target.value,
                })
              }
            />
          </FormControl>

          <Stack spacing={10}>
            <Button
              bg={"blue.400"}
              color={"white"}
              disabled={!credential.otp}
              _hover={{
                bg: "blue.500",
              }}
              onClick={() => {
                verifyEmailOtpAction(
                  credential.otp,
                  credential.email,
                  credential.password,
                  credential.password_confirmation,
                  toast,
                  setsteps
                );
              }}
            >
              Send
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Sendotp;
