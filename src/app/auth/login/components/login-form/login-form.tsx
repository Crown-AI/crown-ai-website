"use client";

import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import email from "next-auth/providers/email";
import { signIn } from "next-auth/react";
import Image from "next/image";
import AICulture from "/public/Samp.png";
import Link from "next/link";
import { useState } from "react";
import { NavBar } from "@/components/navbar/navbar";
import "../../../../globalicons.css";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const inputStyle = {
    color: "red",
    fontFamily: "'Indie Flower', cursive",
  };
  return (
    <Box>
      <Stack
        style={{
          backgroundImage: "url('/login.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
        width="100%"
        minHeight="100vh"
        display={"flex"}
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
          </div>
        </nav>
        <Stack
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            width: 410,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form
            onSubmit={(p) => {
              p.preventDefault();
              signIn("email", { email: (p.target as any).email.value });
              setSubmitted(true);
            }}
          >
            <Stack
              direction={"column"}
              style={{ height: "30vh" }}
              spacing={5}
              borderTop={90}
              borderColor={"transparent"}
            >
              <Typography
                fontSize={22}
                style={{ fontFamily: "monospace" }}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight="normal"
              >
                Sign into your account
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              style={{ width: 220, height: "30vh" }}
              borderBottom={50}
              borderColor={"transparent"}
            >
              <TextField
                name="email"
                id="email"
                label="Email"
                inputProps={{ style: inputStyle }}
                style={{
                  width: 220,
                  flexDirection: "column",
                  borderRadius: 50,
                }}
                value={email}
                onChange={(o) => setEmail(o.target.value)}
                required
              ></TextField>
            </Stack>
            <Stack
              borderTop={10}
              borderColor={"transparent"}
              direction={"column"}
              display={"flex"}
              style={{ width: 220, position: "relative", bottom: 50 }}
            >
              <Button
                variant="outlined"
                type="submit"
                style={{
                  fontFamily: "Train_One",
                  width: 220,
                  borderRadius: 50,
                  borderColor: "silver",
                  color: "gold",
                }}
              >
                <span>Login</span>
              </Button>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Box>
  );
}
