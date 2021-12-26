import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { logoutAction } from "../../state/action/authenticaiton";
import Link from "next/link";
import React from "react";
function Index() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const UserLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <Link href="/">
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                Ecommerce
              </chakra.h1>
            </Link>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link href="/">
                <Button variant="ghost">Home</Button>
              </Link>

              {user.authenticated === false && (
                <>
                  <Link href="/login">
                    <Button variant="ghost">Signin</Button>
                  </Link>
                  <Link href="/register">
                    <Button variant="ghost">Signup</Button>
                  </Link>
                </>
              )}

              {user.authenticated && (
                <Link href="/profile">
                  <Button
                    variant="ghost"
                    color={useColorModeValue("blue.400", "whiteAlpha.500")}
                    borderColor="gray.300"
                    _hover={{
                      color: useColorModeValue("gray.400", "whiteAlpha.500"),
                      borderColor: "whiteAlpha.500",
                    }}
                  >
                    {user?.user?.name}
                  </Button>
                </Link>
              )}

              {user.authenticated && (
                <>
                  <Link href="/cart">
                    <Button
                      variant="ghost"
                      color="pink.300"
                      borderColor="gray.300"
                    >
                      {cart?.items?.length} Items
                    </Button>
                  </Link>

                  <Button
                    variant="ghost"
                    color={useColorModeValue("pink.400", "gray.800")}
                    onClick={UserLogout}
                  >
                    Logout
                  </Button>
                </>
              )}
            </HStack>
            <Button colorScheme="brand" size="sm">
              Get Started
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button variant="ghost">Home</Button>
                {user.authenticated === false && (
                  <>
                    <Link href="/login">
                      <Button variant="ghost">Signin</Button>
                    </Link>
                    <Link href="/register">
                      <Button variant="ghost">Signup</Button>
                    </Link>
                  </>
                )}
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}

export default Index;
