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
  return (
    <Box>
      <Stack
        style={{
          backgroundColor: "turquoise",
          height: "100vh",
          width: "100%",
        }}
      >
        <nav>
          <div className="links">
            <Image
              src={"/Crown.png"}
              id="navImg"
              alt="AI"
              width={110}
              height={110}
              draggable="false"
            ></Image>
            <section>
              <ul>
                <li>
                  <a href="#">LATEST PRODUCT</a>
                </li>
                <li>
                  <a href="#">SERVICES</a>
                </li>
                <li>
                  <a href="#">ABOUT US</a>
                </li>
                <li>
                  <a href="#">OUR TEAM</a>
                </li>
                <li>
                  <a href="#">CONTACT US</a>
                </li>
              </ul>
            </section>
            <div id="loginButton">
              <Button variant="outlined" id="login">
                Login
              </Button>
              <Button variant="outlined" id="logout">
                Logout
              </Button>
            </div>
          </div>
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
          <Typography variant="h1">Crown-AI</Typography>
          <br />
          <Typography variant="h3">
            The Crown of Luxury: Royalty in Technology and Development
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
