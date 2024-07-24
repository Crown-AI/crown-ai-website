"use client";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function LatestProduct() {
  const [isLoading, setIsLoading] = useState("none");
  const [skeletonLoader, setSkeletonLoader] = useState("flex");
  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setIsLoading("flex");
        setSkeletonLoader("none");
      }, 5000);
    };
    fetchData();
  }, []);
  function Product() {
    return (
      <Stack style={{ display: isLoading }}>
        <Typography variant="h1" id="latestTitle">
          Latest Product
        </Typography>
        <br />
        <hr />
        <br />
        <Stack className="latestProduct">
          <img src="/latestProduct.jpg" alt="Latest Product" />
          <br />
          <br />
          <Typography variant="h2" id="latestProductName">
            Product Name
          </Typography>
          <br />
          <Typography variant="h4" id="latestProductDescription">
            Product Description
          </Typography>
        </Stack>
      </Stack>
    );
  }
  return (
    <Box>
      <Stack>
        <Skeleton
          variant={"circular"}
          height={500}
          width="50%"
          sx={{ display: skeletonLoader }}
        />
        <Product />
      </Stack>
    </Box>
  );
}
