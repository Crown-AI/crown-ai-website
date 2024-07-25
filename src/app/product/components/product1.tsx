"use client";
import { Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export function ProductCard1() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Stack
      sx={{
        border: "2px solid black",
        borderRadius: 5,
        width: "29%",
        height: 300,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          position: "absolute",
          flexDirection: "row",
          top: "11%",
          left: "14%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Skeleton
          variant="circular"
          height={140}
          width={140}
          sx={{ display: imageLoaded ? "none" : "block", position: "absolute" }}
        ></Skeleton>
        <Image
          alt="Tewax Logo"
          src={"/tewax.png"}
          onLoad={() => setImageLoaded(true)}
          draggable="false"
          title="Tewax"
          height={120}
          width={120}
          style={{
            display: "block",
            opacity: imageLoaded ? 1 : 0,
            position: "absolute",
          }}
        ></Image>
      </Stack>
      <br />
      <Stack>
        <Skeleton variant="text" width={320}></Skeleton>
        <Typography variant="h3" sx={{ display: "none" }}>
          TEWAX
        </Typography>
      </Stack>
    </Stack>
  );
}
