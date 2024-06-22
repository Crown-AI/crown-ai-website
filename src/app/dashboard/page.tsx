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
  if (session.data?.user) {
    router.push("/auth/login");
  }
  return (
    <Box>
      <Stack
        style={{
          backgroundColor: "turquoise",
          height: "100vh",
        }}
      >
        <Stack
          style={{
            display: "flex",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography variant="h1">Crown-AI</Typography>
          <Marquee>
            <Typography variant="h3">
              The Crown of Luxury: Royalty in Technology and Development
            </Typography>
          </Marquee>
        </Stack>
      </Stack>
    </Box>
  );
}
