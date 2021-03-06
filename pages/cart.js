import { Flex, Text, Button, useColorModeValue } from "@chakra-ui/react";
import CartItems from "../components/cards/cartItems";
import { useSelector } from "react-redux";
import { ssrAuthCheck } from "../middleware/authCheck";
import { useEffect } from "react";

const cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div>
      <Flex
        align="center"
        justify="flex-start"
        direction="column"
        w="90%"
        h="100vh"
        margin={8}
      >
        {cart?.items?.length <= 0
          ? "no items in cart"
          : cart?.items.map((item, i) => <CartItems key={i} item={item} />)}

        <Flex
          align="center"
          justify="space-between"
          direction="row"
          w="60%"
          bg="white"
          padding={8}
          borderRadius="lg"
          border={`1px solid ${useColorModeValue("gray.200", "gray.300")}`}
          boxShadow="lg"
        >
          <Text fontSize="lg" fontWeight="bold">
            Total
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            {cart?.gross_total}$
          </Text>
          <Button
            size="lg"
            height="48px"
            width="200px"
            border="2px"
            disabled={cart?.items.length <= 0}
            borderColor="green.500"
          >
            Checkout
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default cart;

cart.getInitialProps = async (ctx) => {
  await ssrAuthCheck(ctx, "cart");
  return {};
};
