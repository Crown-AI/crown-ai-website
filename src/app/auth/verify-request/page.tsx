"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import "../../globalicons.css";

export default function VerifyRequest() {
  const glow = () => {
    var typography = document.getElementById(
      "typography",
    ) as HTMLHeadingElement;
    typography.style.color = "#fff";
    typography.style.textShadow =
      "0 0 10px #fff, 0 0 20px #fff, 0 0 39px silver, 0 0 67px silver";
    typography.style.transition = "1s ease-in-out";
  };
  const stop = () => {
    var typography = document.getElementById(
      "typography",
    ) as HTMLHeadingElement;
    typography.style.color = "silver";
    typography.style.textShadow = "0 0 0 silver";
    typography.style.transition = "1s ease-in-out";
  };
  return (
    <Box>
      <Stack
        width={"100%"}
        height={"100vh"}
        style={{
          backgroundImage: "url('/mail.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
          borderTop={300}
          style={{ borderColor: "transparent" }}
        >
          <Typography
            style={{
              color: "silver",
              fontFamily: "'Tilt Prism', sans-serif",
            }}
            onMouseOver={glow}
            onMouseOut={stop}
            id="typography"
            variant="h2"
          >
            Email Incoming
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
