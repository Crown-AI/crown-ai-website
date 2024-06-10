"use client";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import { DM_Serif_Text, Train_One } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import background from "public/Sample.png";
import logo from "public/Samp.png";
import ReactPlayer from "react-player";
import "./globalicons.css";
import { NavBar } from "@/components/navbar/navbar";
import MouseHandle, { Mouse } from "@/components/mouse/mouse";
import { MenuBar } from "@/components/menubar/menubar";
import { Mice } from "@/components/mice/mouse";
import { PointBack, PointOut } from "@/components/mousecontrols/mousecontrol";
import { AuditNavbar } from "@/components/audit-navbar/audit-navbar";

export default function Home() {
  useEffect(() => {
    const imageElement = document.getElementById("mouse");
    if (imageElement) {
      console.log("Image element found:", imageElement);
    } else {
      console.log("Image element not found");
    }
  }, []);
  const multiColor = () => {
    var mainTitle = document.getElementById("mainTitle") as HTMLHeadingElement;
    mainTitle.style.color = "white";
    mainTitle.style.textShadow =
      " 0 0 10px #fff, 0 0 20px #fff, 0 0 45px purple, 0 0 75px purple, 0 0 90px purple, 0 0 150px purple";
    mainTitle.style.transition = "1s ease-in-out";
  };
  const doneGlowing = () => {
    var mainTitle = document.getElementById("mainTitle") as HTMLHeadingElement;
    mainTitle.style.color = "black";
    mainTitle.style.textShadow = "none";
    mainTitle.style.transition = "1s ease-in-out";
  };

  const router = useRouter();
  return (
    <Box>
      <Stack
        style={{
          backgroundImage: "url('/background.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          WebkitBackdropFilter: "blur(1px)",
          backdropFilter: "blur(1px)",
          cursor: "none",
        }}
        id="homeback"
        onMouseOver={(e) => {
          var mouse = document.getElementById("mouse") as HTMLElement;
          var pointer = document.getElementById("pointer") as HTMLElement;
          var check = window.localStorage.getItem("gotAUsername");
          console.log(check);
          window.addEventListener("mousemove", (t) => {
            mouse!.style.top = `${t.clientY}px`;
            mouse!.style.left = `${t.clientX}px`;
            pointer!.style.top = `${t.clientY}px`;
            pointer!.style.left = `${t.clientX}px`;
          });
          if (check === "true") {
            console.log(`No need for a username`);
          } else {
            console.log(`Need a username`);
            window.localStorage.setItem(
              "uname",
              `user${Math.floor(Math.random())}`,
            );
          }
        }}
      >
        <Stack>
          <video
            style={{
              display: "none",
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
          <Mice />
          <nav
          >
            <AuditNavbar />
          </nav>

          <Stack>
            <Button
              variant="contained"
              style={{
                backgroundColor: "purple",
                width: 110,
                display: "flex",
                position: "absolute",
                left: 5,
                top: 4,
                cursor: "none",
                zIndex: 20,
              }}
              onClick={(a) => {
                a.preventDefault();
                router.push("/auth/login");
              }}
              onMouseOver={(r) => {
                var cursor = document.getElementById("mouse") as HTMLElement;
                var pointer = document.getElementById("pointer") as HTMLElement;
                pointer!.style.display = "block";
                cursor!.style.display = "none";
              }}
              onMouseOut={(f) => {
                var cursor = document.getElementById("mouse") as HTMLElement;
                var pointer = document.getElementById("pointer") as HTMLElement;
                pointer!.style.display = "none";
                cursor!.style.display = "block";
              }}
            >
              Login
            </Button>
          </Stack>
        </Stack>
        <Typography
          variant="h1"
          id="mainTitle"
          onMouseOver={multiColor}
          onMouseOut={doneGlowing}
        >
          SYPHER GLOBE
        </Typography>
      </Stack>
    </Box>
  );
}
