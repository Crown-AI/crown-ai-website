"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import "./globalicons.css";
import { NavBar } from "@/components/navbar/navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/auth/login");
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
  return (
    <Box>
      <Stack className="home">
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
              CrownAI
            </Typography>
            <br />
            <Typography variant="h4" id="wisdom">
              The Crown of Luxury: Royalty in Technology and Development
            </Typography>
            <br />
            <hr />
            <br />
            <Stack className="WhatWeDo">
              <Typography variant="h1" id="whatTitle">
                What We Do
              </Typography>
              <br />
              <Stack className="values">
                <Stack className="dos" id="api">
                  <Typography variant="h2">API Development</Typography>
                  <br />
                  <Typography variant="h4">
                    We develop APIs based on the specifications of our clients
                  </Typography>
                </Stack>
                <Stack className="dos" id="web">
                  <Typography variant="h2">Web App Development</Typography>
                  <br />
                  <Typography variant="h4">
                    We develop web applications based on the specfications of
                    our clients
                  </Typography>
                </Stack>
                <Stack className="dos" id="ai">
                  <Typography variant="h2">AI Development</Typography>
                  <br />
                  <Typography variant="h4">
                    We develop AI tools using machine learning, etc. to build AI
                    applications
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
