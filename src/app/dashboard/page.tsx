"use client";
import { useAllMessages } from "@/modules/messages/hooks/use-all-messages/use-all-messages";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Logo from "public/Samp.png";
import { useState, useEffect, useRef } from "react";
import { MessageInput } from "../api/messages/route";
import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import Link from "next/link";
import { Train_One } from "next/font/google";
import "../globalicons.css";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";
import { useSession } from "next-auth/react";
const emptyMessage: MessageInput = {
  content: "",
};
export default function HomePage() {
  const router = useRouter();
  const session = useSession();
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
    if (session.status === "unauthenticated") {
      router.push("/auth/login");
    } else {
      console.log("Logged in");
    }
  }, [router, session.status]);
  useEffect(() => {
    let images = [`/ai2.jpg`, `/back.jpg`, `/back3.jpg`, `/back4.jpg`];
    let home = document.getElementById("home") as HTMLDivElement;
    let selectedBG = Math.floor(Math.random() * images.length);
    let pickedBG = images[selectedBG];
    home.style.backgroundImage = `url("${pickedBG}")`;
  }, []);
  return (
    <Box>
      <Stack
        style={{
          backgroundColor: "turquoise",
          height: "100vh",
          width: "100%",
        }}
        id="home"
        className="home"
      >
        <nav>
          <NavBar />
        </nav>
        <Stack
          style={{
            display: "flex",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <Typography variant="h1" id="dtitle">
            Crown-AI
          </Typography>
          <br />
          <Typography variant="h4" id="dslogan">
            The Crown of Luxury: Royalty in Technology and Development
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
