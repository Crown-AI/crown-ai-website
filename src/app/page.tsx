"use client";
import { Box, Card, Stack, Typography } from "@mui/material";
import "./globalicons.css";
import { NavBar } from "@/components/navbar/navbar";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session.status === "authenticated") {
      redirect("/auth/login");
    } else {
      console.log("Logged in");
    }
  }, [router, session.status]);
  useEffect(() => {
    let login = document.getElementById("login") as HTMLButtonElement;
    let logout = document.getElementById("logout") as HTMLButtonElement;
    if (session.data?.user) {
      console.log("Logged in");
      login.style.display = "none";
      logout.style.display = "flex";
    } else {
      console.log("Logged out");
      login.style.display = "flex";
      logout.style.display = "none";
    }
  }, [router, session.data?.user]);
  useEffect(() => {
    let images = [`/ai2.jpg`, `/back.jpg`, `/back3.jpg`, `/back4.jpg`];
    let home = document.getElementById("home") as HTMLDivElement;
    let selectedBG = Math.floor(Math.random() * images.length);
    let pickedBG = images[selectedBG];
    home.style.backgroundImage = `url("${pickedBG}")`;
  }, []);
  return (
    <Box>
      <Stack className="home" id="home">
        <Stack className="main">
          <nav>
            <NavBar />
          </nav>
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <Stack className="others">
            <Typography variant="h1" id="title">
              Crown-AI
            </Typography>
            <br />
            <Typography variant="h4" id="wisdom">
              The Crown of Luxury: Royalty in Technology and Development
            </Typography>
            <br />
            <hr />
            <br />
            <Stack
              sx={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h2">What We Do</Typography>
              <Stack
                sx={{
                  display: "flex",
                  position: "relative",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <Card variant="outlined" className="goals">
                  <Typography variant="h5">Web Apps</Typography>
                </Card>
                <Card variant="outlined" className="goals">
                  <Typography variant="h5">Mobile Apps</Typography>
                </Card>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  position: "relative",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <Card variant="outlined" className="goals">
                  <Typography variant="h5">AI Development</Typography>
                </Card>
                <Card className="goals" variant="outlined">
                  <Typography variant="h5">UX/UI Design</Typography>
                </Card>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
