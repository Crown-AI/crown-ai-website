"use client";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import { DM_Serif_Text, Train_One } from "next/font/google";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import background from "public/Sample.png";
import logo from "public/Samp.png";
import ReactPlayer from "react-player";
import "./globalicons.css";

export default function Home() {
  const router = useRouter();
  return (
    <Box>
      <Stack
        style={{
          backgroundImage:
            "url('https://suntrics.com/wp-content/uploads/2023/05/Drones-Help-Farmers.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          WebkitBackdropFilter: "blur(1px)",
          backdropFilter: "blur(1px)",
        }}
      >
        <Stack>
          <video
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              minHeight: "100%",
              minWidth: "100%",
            }}
            autoPlay
            muted
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          >
            <source src="/AI-intro.mp4" type="video/mp4" />
          </video>
        </Stack>
        <Stack style={{ position: "relative", display: "flex" }}>
          <nav
            style={{
              display: "flex",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              wordSpacing: 2,
              gap: 5,
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ position: "relative" }}
            >
              home
            </span>
            <p
              style={{
                fontFamily: "'Indie Flower', cursive",
                color: "gray",
                cursor: "pointer",
                position: "relative",
              }}
              id="home"
              onClick={(e) => {
                e.preventDefault();
                router.push("/");
              }}
            >
              Home
            </p>
            <span
              className="material-symbols-outlined"
              id="contacts"
              style={{ marginLeft: 40 }}
            >
              contacts_product
            </span>
            <p
              style={{
                color: "gray",
                fontFamily: "'Indie Flower', cursive",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault();
                router.push("/contact");
              }}
            >
              Contact us
            </p>
            <span
              className="material-symbols-outlined"
              style={{ marginLeft: 30 }}
            >
              local_library
            </span>
            <p
              style={{
                color: "gray",
                fontFamily: "'Indie Flower', cursive",
                cursor: "pointer",
              }}
              onClick={(y) => {
                y.preventDefault();
                router.push("/about");
              }}
            >
              About us
            </p>
            <span
              className="material-symbols-outlined"
              style={{ marginLeft: 50 }}
            >
              chat
            </span>
            <p
              id="chats"
              style={{
                color: "gray",
                fontFamily: "'Indie Flower', cursive",
                cursor: "pointer",
              }}
              onClick={(c) => {
                c.preventDefault();
                router.push("/chat");
              }}
            >
              Chats & Privacy
            </p>
          </nav>
        </Stack>
        <Image
          alt="Logo"
          src={logo}
          width={100}
          height={100}
          draggable="false"
          style={{
            WebkitBackdropFilter: "blur(1px)",
            backdropFilter: "blur(1px)",
          }}
        ></Image>
        <Typography
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, red, aqua, silver, indigo, blue)",
            WebkitBackgroundClip: "text",
            MozBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontFamily: "'Dancing Script', cursive",
          }}
          variant="h1"
          position={"absolute"}
          top={110}
          left={500}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          fontFamily={"Cinzel"}
          color={"silver"}
        >
          AICulture
        </Typography>
        <Link href={"/auth/register"}>
          <Button
            style={{
              backgroundColor: "purple",
              top: 260,
              left: 150,
              color: "silver",
              width: 363,
              display: "flex",
              position: "absolute",
              flexDirection: "column",
              padding: 8,
              justifyContent: "center",
              height: 70,
              alignItems: "center",
              flexShrink: 0,
              marginLeft: 350,
              marginRight: -380,
              borderRadius: 50,
              fontFamily: "'Indie Flower', cursive",
              fontSize: 20,
            }}
          >
            Sign up
          </Button>
        </Link>
        <Link href="/auth/login">
          <Button
            style={{
              backgroundColor: "silver",
              borderColor: "green",
              color: "gold",
              top: 380,
              left: 500,
              display: "flex",
              position: "absolute",
              width: 363,
              height: 70,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              borderRadius: 50,
              fontFamily: "'Indie Flower', cursive",
              fontSize: 20,
            }}
          >
            Login
          </Button>
        </Link>
        <footer
          style={{
            borderTop: 9,
            marginTop: 370,
            position: "relative",
            display: "flex",
            flexDirection: "row",
            float: "right",
          }}
        >
          <p
            style={{
              color: "gold",
              fontFamily: "'Indie Flower', cursive",
              fontStyle: "italic",
            }}
          >
            Powered by{" "}
            <a
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, red, indigo, gold, silver, blue, aqua)",
                MozBackgroundClip: "text",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontStyle: "normal",
              }}
            >
              Prime Cobra
            </a>
            <sup style={{ color: "black" }}>&reg;</sup>
          </p>
        </footer>
      </Stack>
    </Box>
  );
}
