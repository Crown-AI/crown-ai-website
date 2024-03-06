"use client";
import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import { useNavigation } from "react-router-dom";
import { useRouter } from "next/navigation";
import "../../globalicons.css";

export default function VerifyContact() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/contact/verified");
  }, 10000);
  setTimeout(() => {
    var hider = document.getElementById("process") as HTMLElement;
    var show = document.getElementById("pipe") as HTMLElement;
    hider.style.display = "none";
    show.style.display = "flex";
  }, 4000);
  setTimeout(() => {
    var hider = document.getElementById("process") as HTMLElement;
    var show = document.getElementById("pipe") as HTMLElement;
    const pipe = document.getElementById("initialize") as HTMLElement;
    pipe.style.display = "flex";
    show.style.display = "none";
    hider.style.display = "none";
  }, 7000);
  return (
    <Box>
      <Stack
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 0, 0, 0.3), rgba(255, 0, 255, 0.3), rgba(0, 0, 255, 0.3)),url('https://wallpapercave.com/wp/wp6944127.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <Stack>
          <p
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, red, gold, blue, pink, green)",
              WebkitBackgroundClip: "text",
              MozBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontFamily: "'Dancing Script', cursive",
              fontSize: 70,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              top: 200,
            }}
            id="prime"
          >
            AICULTURE
          </p>
          <div>
            <p
              id="process"
              style={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 30,
                top: 100,
                backgroundImage:
                  "linear-gradient(to bottom left, gold, aqua, silver, purple, red)",
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Processing Information
            </p>
            <p
              id="pipe"
              style={{
                display: "none",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 30,
                top: 100,
                backgroundImage:
                  "linear-gradient(to bottom left, gold, aqua, silver, purple, red)",
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Checking connection pipes
            </p>
            <p
              id="initialize"
              style={{
                display: "none",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 30,
                top: 100,
                backgroundImage:
                  "linear-gradient(to bottom left, gold, aqua, silver, purple, red)",
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Initializing...
            </p>
          </div>
          <div
            style={{
              width: 250,
              display: "block",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "8%",
              marginLeft: "40%",
            }}
          >
            <LinearProgress />
          </div>
        </Stack>
      </Stack>
    </Box>
  );
}
