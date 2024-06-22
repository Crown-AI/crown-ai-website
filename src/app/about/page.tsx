"use client";
import { NavBar } from "@/components/navbar/navbar";
import { Box, Stack, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "../globalicons.css";

export default function About() {
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
      <Stack style={{ backgroundColor: "beige", height: "100vh" }}>
        <nav>
          <NavBar />
        </nav>
        <Stack
          style={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h1">About Us</Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
