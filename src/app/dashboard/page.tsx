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
const emptyMessage: MessageInput = {
  content: "",
};
export default function HomePage() {
  const router = useRouter();
  const disobeyDefaultFunction = () => {
    router.back();
  };
  setTimeout(() => {
    router.push("/chat");
  }, 5000);
  return (
    <Box>
      <Stack
        style={{
          backgroundImage:
            "url('https://th.bing.com/th/id/OIP.hsRdiWZZHcRgmHD1n_Cy-wHaEK?rs=1&pid=ImgDetMain')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          marginTop: 10,
          overflow: "hidden",
        }}
      >
        <Stack id="poorResult">
          <Typography variant="h2" id="poorResultTitle">
            It&apos;s not you. It&apos;s us
          </Typography>
          <Typography variant="h5" id="poorResultContent">
            Please continue with other features while we work on this problem
          </Typography>
        </Stack>
        <FontAwesomeIcon
          icon={faArrowCircleLeft}
          id="returnBack"
          onClick={disobeyDefaultFunction}
        />
      </Stack>
    </Box>
  );
}
