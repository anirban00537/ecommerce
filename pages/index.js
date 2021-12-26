import styles from "../styles/Home.module.css";
import Cover from "../components/cover";
import Product from "../components/cards";
import { Box, chakra, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { getProductsAction } from "../state/action/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(getProductsAction(1));
  }, []);
  return (
    <div className={styles.container}>
      <Cover />
      <Box margin={8} mt={55}>
        <Box textAlign={{ lg: "center" }}>
          <chakra.p
            mt={2}
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color={useColorModeValue("gray.900")}
          >
            Latest Products
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{ lg: "auto" }}
            color={useColorModeValue("gray.500", "gray.400")}
          >
            Choose from a wide range of products
          </chakra.p>
        </Box>
        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={10}>
          {products.map((product) => (
            <Product key={product.id} details={product} />
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
}
