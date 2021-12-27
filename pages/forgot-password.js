import { Flex, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import SendEmail from "../components/cards/sendEmail";
import Sendotp from "../components/cards/sendOtp";

export default function ForgetPassword() {
  const [steps, setsteps] = useState(1);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      {steps === 1 && <SendEmail setsteps={setsteps} />}
      {steps === 2 && <Sendotp setsteps={setsteps} />}
    </Flex>
  );
}
