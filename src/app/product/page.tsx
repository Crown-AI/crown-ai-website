"use client";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { fetchData } from "next-auth/client/_utils";
import _logger from "next-auth/utils/logger";
import Image from "next/image";
import path from "path";
import { useEffect, useState } from "react";

export default function LatestProduct() {
  const [isLoading, setIsLoading] = useState(true);
  const [skeletonLoader, setSkeletonLoader] = useState("flex");

  function Product() {
    const [imageLoaded, setImageLoaded] = useState(false);
    return (
      <Stack>
        <Typography variant="h1" id="latestTitle">
          Latest Product
        </Typography>
        <br />
        <hr />
        <br />
        <Stack className="latestProduct">
          <Skeleton
            variant="circular"
            width={300}
            height={300}
            animation="wave"
            sx={{ display: imageLoaded ? "none" : "flex" }}
          ></Skeleton>
          <Image
            src={"/bw.jpg"}
            alt="profile"
            width={300}
            height={300}
            onLoad={() => {
              console.log("profile loaded");
              setImageLoaded(true); // Ensure this line is inside the onLoad function
            }}
            style={{
              display: "block",
              visibility: imageLoaded ? "visible" : "hidden",
              borderRadius: "50%",
            }}
          />
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
        <Product />
      </Stack>
    </Box>
  );
}
