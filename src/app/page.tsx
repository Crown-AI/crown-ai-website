"use client";
import { Box, Stack, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import "./globalicons.css";
import { NavBar } from "@/components/navbar/navbar";

export default function HomePage() {
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
          <Typography variant="h1" id="title">
            CrownAI
          </Typography>
          <Marquee className="slogan" delay={0} direction="left">
            <Typography variant="h4" id="wisdom">
              The Crown of Luxury: Royalty in Technology and Development
            </Typography>
          </Marquee>
          <br />
          <hr />
          <br />
          <Stack className="WhatWeDo">
            <Typography variant="h1" id="whatTitle">
              What We Do
            </Typography>
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
                  We develop web applications based on the specfications of our
                  clients
                </Typography>
              </Stack>
              <Stack className="dos" id="ai">
                <Typography variant="h2">AI Development</Typography>
                <br />
                <Typography variant="h4">
                  We develop AI tools using machine learning, etc.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
