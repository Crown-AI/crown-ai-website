"use client";
import { Box, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";

export default function Settings() {
  return (
    <Box>
      <Stack
        style={{
          backgroundImage: "url('/settings.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          cursor: "none",
        }}
        onMouseOver={(e) => {
          var mouse = document.getElementById("mouse") as HTMLElement;
          var pointer = document.getElementById("pointer") as HTMLElement;
          console.log(mouse);
          window.addEventListener("mousemove", (t) => {
            mouse!.style.top = `${t.clientY}px`;
            mouse!.style.left = `${t.clientX}px`;
            pointer!.style.top = `${t.clientY}px`;
            pointer!.style.left = `${t.clientX}px`;
          });
        }}
      >
        <Image
          src={"/cursor.png"}
          alt="cursor"
          id="mouse"
          width={30}
          height={30}
          style={{
            display: "block",
            zIndex: 9999,
            position: "absolute",
            pointerEvents: "none",
          }}
          onClick={(l) => {
            return true;
          }}
        ></Image>
        <Image
          src={"/pointer.png"}
          alt="cursor"
          id="pointer"
          width={20}
          height={30}
          style={{
            display: "none",
            zIndex: 9999,
            position: "absolute",
            pointerEvents: "none",
          }}
          onClick={(l) => {
            return true;
          }}
        ></Image>
        <Stack
          style={{
            backgroundColor: "rgba(128, 128, 128, 0.2)",
            height: "100vh",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Stack
            style={{
              display: "flex",
              position: "relative",
              height: "100vh",
              wordSpacing: 2,
              width: 400,
              backgroundColor: "rgb(128, 128, 128)",
            }}
          >
            <Stack
              style={{
                display: "flex",
                position: "absolute",
                top: "30%",
              }}
            >
              <Typography
                style={{
                  border: "1px solid #000",
                  width: 300,
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Change your Username
              </Typography>
            </Stack>
          </Stack>
          <Stack
            style={{
              display: "flex",
              position: "relative",
              height: "100vh",
              width: 1500,
              backgroundColor: "white",
            }}
          >
            <Typography variant="h2">Change your username</Typography>
            <TextField
              id="uname"
              label="Username"
              style={{ width: 400 }}
            ></TextField>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
