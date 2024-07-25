import { Box, Stack } from "@mui/material";
import { ProductCard1 } from "./components/product1";

export default function Products() {
  return (
    <Box>
      <Stack>
        {/* Product cards go here */}
        <Stack className="ProductCards">
          {/* Product card 1 */}
          <ProductCard1 />
        </Stack>
      </Stack>
    </Box>
  );
}
