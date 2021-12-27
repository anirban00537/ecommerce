import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Heading,
  useColorModeValue,
  CloseButton,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { deleteCartItemAction } from "../../state/action/cart";

const cartItems = ({ item }) => {
  const [cartItem, setcartItem] = useState(item);
  const dispatch = useDispatch();
  useEffect(() => {
    setcartItem(item);
  }, [item]);
  return (
    <Box
      w="60%"
      bg="white"
      padding={8}
      borderRadius="lg"
      border={`1px solid ${useColorModeValue("gray.200", "gray.300")}`}
      boxShadow="lg"
    >
      {!item && "no items in cart"}
      <Flex
        align="space-between"
        justify="space-between"
        direction="row"
        width="100%"
        boxShadow={"blackAlpha.100"}
      >
        <Heading
          as="h2"
          fontSize="lg"
          fontWeight="bold"
          color={"blackAlpha.900"}
        >
          {cartItem?.product?.title}
        </Heading>
        <Heading
          as="h3"
          fontSize="lg"
          fontWeight="bold"
          color={"blackAlpha.900"}
        >
          {cartItem?.product?.sale_price}$
        </Heading>
        <CloseButton
          size="sm"
          onClick={() => dispatch(deleteCartItemAction(item?.id))}
        />
      </Flex>
    </Box>
  );
};

export default cartItems;
