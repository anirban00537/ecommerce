import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";

const AlertComponent = ({ message, status }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertTitle mr={2}>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertComponent;
