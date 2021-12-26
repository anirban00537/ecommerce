import { Flex, useColorModeValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import SendEmail from "../components/cards/sendEmail";

export default function ForgetPassword() {
  const { forgetPasswordStep } = useSelector((state) => state.user);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      {forgetPasswordStep === 1 && <SendEmail />}
    </Flex>
  );
}
