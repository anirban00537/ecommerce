import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendEmailForGetPasswordAction } from "../../state/action/authenticaiton";
const SendEmail = () => {
  const [email, setEmail] = useState("");

  return (
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={22} px={12}>
      <Stack align={"center"}>
        <Heading fontSize={"4xl"}>Enter your email</Heading>
      </Stack>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <Stack spacing={10}>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={() => sendEmailForGetPasswordAction(email)}
            >
              Send
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default SendEmail;
