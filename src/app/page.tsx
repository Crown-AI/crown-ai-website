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
            <source src="/AICulture-dream-of-the-future.mp4" type="video/mp4" />
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
            <span className="material-symbols-outlined">home</span>
            <p
              style={{
                color: "gray",
                fontFamily: "'Indie Flower', cursive",
                cursor: "pointer",
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
              onClick={(t) => {
                t.preventDefault();
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
              onClick={(e) => {
                e.preventDefault();
                router.push("/chat");
              }}
            >
              Chats & Privacy
            </p>
            <span
              className="material-symbols-outlined"
              style={{ marginLeft: 50 }}
            >
              forum
            </span>
            <p
              id="p2b"
              style={{
                color: "gray",
                fontFamily: "'Indie Flower', cursive",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault();
                router.push("/dashboard");
              }}
            >
              PrimeAI
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
            fontFamily: "'Tilt Prism', sans-serif",
          }}
          variant="h1"
          position={"absolute"}
          top={110}
          left={500}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          color={"silver"}
        >
          AICulture
        </Typography>
        <Stack
          style={{
            display: "flex",
            position: "relative",
            top: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            style={{
              display: "flex",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              WebkitBackdropFilter: "blur(1px)",
              backdropFilter: "blur(1px)",
              fontFamily: "'Hanalei', system-ui",
              color: "rebeccapurple",
            }}
          >
            Latest Updates
          </Typography>
          <Stack display={"flex"} flexDirection={"row"} gap={3}>
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                border: "1px transparent",
                padding: "10px",
                width: 170,
                boxSizing: "border-box",
                boxShadow: "0 15px 30px 0 #888888",
                margin: "8px",
              }}
            >
              <Image
                alt="Update"
                src={"/Agri-drone.jpg"}
                width={150}
                height={150}
                draggable="false"
              ></Image>
              <Typography variant="h6" style={{ color: "lightpink" }}>
                Improved the Chatbot to respond to &quot;hi&quot;
              </Typography>
            </div>
            <div
              style={{
                WebkitBackdropFilter: "blur(5px)",
                backdropFilter: "blur(5px)",
                width: 150,
                color: "gray",
              }}
            >
              <Image
                alt="upd2"
                src={"/aic.jpg"}
                width={150}
                height={150}
              ></Image>
              <Typography variant="h6" style={{ color: "lightpink" }}>
                Improved the chatbot to respond with a definition to it&apos;s
                name
              </Typography>
            </div>
          </Stack>
        </Stack>
        <footer
          style={{
            marginTop: "auto",
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
