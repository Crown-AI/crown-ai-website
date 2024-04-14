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
    backgroundImage:
      "linear-gradient(to bottom right, red, aqua, silver, indigo, blue)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontFamily: "'Indie Flower', cursive",
  };
  return (
    <Box>
      <Stack
        style={{
          backgroundImage: "url('/Login.jpg')",
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
              cursor: "none",
            }}
            id="home"
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
            onMouseOver={(s) => {
              var mouse = document.getElementById("mouse") as HTMLImageElement;
              mouse.srcset = "/pointer.png";
              (mouse.height = 30), (mouse.width = 20);
            }}
            onMouseOut={(u) => {
              var mouse = document.getElementById("mouse") as HTMLImageElement;
              mouse.srcset = "/cursor.png";
              (mouse.height = 30), (mouse.width = 30);
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
              cursor: "none",
            }}
            onClick={(e) => {
              e.preventDefault();
              router.push("/contact");
            }}
            onMouseOver={(s) => {
              var mouse = document.getElementById("mouse") as HTMLImageElement;
              mouse.srcset = "/pointer.png";
              (mouse.height = 30), (mouse.width = 20);
            }}
            onMouseOut={(u) => {
              var mouse = document.getElementById("mouse") as HTMLImageElement;
              mouse.srcset = "/cursor.png";
              (mouse.height = 30), (mouse.width = 30);
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
              cursor: "none",
            }}
            onClick={(t) => {
              t.preventDefault();
              router.push("/about");
            }}
            onMouseOver={(s) => {
              var mouse = document.getElementById("mouse") as HTMLImageElement;
              mouse.srcset = "/pointer.png";
              (mouse.height = 30), (mouse.width = 20);
            }}
            onMouseOut={(u) => {
              var mouse = document.getElementById("mouse") as HTMLImageElement;
              mouse.srcset = "/cursor.png";
              (mouse.height = 30), (mouse.width = 30);
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
              cursor: "none",
            }}
            onClick={(e) => {
              e.preventDefault();
              router.push("/chat");
            }}
            onMouseOver={(s) => {
              var mouse = document.getElementById("mouse") as HTMLImageElement;
              mouse.srcset = "/pointer.png";
              (mouse.height = 30), (mouse.width = 20);
            }}
            onMouseOut={(u) => {
              var mouse = document.getElementById("mouse") as HTMLImageElement;
              mouse.srcset = "/cursor.png";
              (mouse.height = 30), (mouse.width = 30);
            }}
          >
            P2P Chat
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
              cursor: "none",
            }}
            onClick={(e) => {
              e.preventDefault();
              router.push("/dashboard");
            }}
            onMouseOver={(s) => {
              var mouse = document.getElementById("mouse") as HTMLImageElement;
              mouse.srcset = "/pointer.png";
              (mouse.height = 30), (mouse.width = 20);
            }}
            onMouseOut={(u) => {
              var mouse = document.getElementById("mouse") as HTMLImageElement;
              mouse.srcset = "/cursor.png";
              (mouse.height = 30), (mouse.width = 30);
            }}
          >
            Chats & Privacy
          </p>
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
                style={{ fontFamily: "'Indie Flower', cursive" }}
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
                label="Username or email"
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
              style={{ width: 220, position: "relative" }}
            >
              <Button
                variant="contained"
                type="submit"
                style={{
                  fontFamily: "Train_One",
                  width: 220,
                  borderRadius: 50,
                  backgroundColor: "purple",
                }}
              >
                <span>Login</span>
              </Button>
            </Stack>
            <Typography
              marginTop={5}
              borderColor={"transparent"}
              fontFamily={"Duru_Sans"}
              width={255}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexShrink={0}
              fontSize={14}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"normal"}
            >
              Sign up
            </Typography>
          </form>
        </Stack>
      </Stack>
    </Box>
  );
}
