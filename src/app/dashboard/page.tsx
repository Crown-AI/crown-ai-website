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
import { Graph } from "@/components/graph/graph";
import { useSession } from "next-auth/react";
const emptyMessage: MessageInput = {
  content: "",
};
export default function HomePage() {
  const router = useRouter();
  const session = useSession();
  if (!session.data?.user) {
    router.push("/auth/login");
  }
  const logout = () => {
    router.push("/auth/logout");
  };
  return (
    <Box>
      <Stack className="dashboard">
        <Stack className="main">
          <nav>
            <div className="links" id="links">
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
                <Button variant="outlined" id="logout" onClick={logout}>
                  Logout
                </Button>
              </div>
            </div>
          </nav>
          <Stack>
            <Graph />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
