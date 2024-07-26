"use client";
import { Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import "../../globalicons.css";
import { useRouter } from "next/navigation";

export function ProductCard1() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();
  const tewax = () => {
    router.push("https://tewax.vercel.app");
  };
  return (
    <Stack className="products" onClick={tewax}>
      <Stack
        sx={{
          display: "flex",
          position: "absolute",
          flexDirection: "row",
          top: "26%",
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
        <Skeleton
          variant="text"
          width={160}
          height={66}
          animation="wave"
          sx={{
            display: imageLoaded ? "none" : "block",
            position: "absolute",
            top: "48%",
            left: "8%",
          }}
        ></Skeleton>
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            position: "absolute",
            top: "49%",
            left: "8%",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 200,
            fontStyle: "normal",
            opacity: imageLoaded ? 1 : 0,
          }}
        >
          TEWAX
        </Typography>
        <Stack>
          <Skeleton
            variant="text"
            width={"26.6%"}
            height={66}
            animation="wave"
            sx={{
              display: imageLoaded ? "none" : "block",
              position: "absolute",
              top: "68%",
              left: "0.5%",
            }}
          ></Skeleton>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              position: "absolute",
              top: "69%",
              left: "0.5%",
              width: "29%",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 300,
              fontStyle: "normal",
              opacity: imageLoaded ? 1 : 0,
            }}
          >
            Tech-Powered Digital Learning Community
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
