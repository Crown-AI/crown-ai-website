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
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import { NavBar } from "@/components/navbar/navbar";
import MouseHandle, { Mouse } from "@/components/mouse/mouse";

export default function Home() {
  useEffect(() => {
    const imageElement = document.getElementById("mouse");
    if (imageElement) {
      console.log("Image element found:", imageElement);
    } else {
      console.log("Image element not found");
    }
  }, []);
  const router = useRouter();
  return (
    <Box>
      <Stack
        style={{
          backgroundImage: "url('/D108.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          WebkitBackdropFilter: "blur(1px)",
          backdropFilter: "blur(1px)",
          cursor: "none",
        }}
        onMouseOver={(e) => {
          var mouse = document.getElementById("mouse") as HTMLElement;
          var pointer = document.getElementById("pointer") as HTMLElement;
          console.log(mouse);
          window.addEventListener("mousemove", (t) => {
            mouse!.style.top = `${t.clientY}px`;
            mouse!.style.left = `${t.clientX}px`;
            pointer!.style.top = `${t.clientY}px`;
            pointer!.style.left = `${t.clientX}px`;
          });
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
          <Image
            src={"/cursor.png"}
            alt="cursor"
            id="mouse"
            width={30}
            height={30}
            style={{
              display: "block",
              zIndex: 9999,
              position: "absolute",
              pointerEvents: "none",
            }}
            onClick={(l) => {
              return true;
            }}
          ></Image>
          <Image
            src={"/pointer.png"}
            alt="cursor"
            id="pointer"
            width={20}
            height={30}
            style={{
              display: "none",
              zIndex: 9999,
              position: "absolute",
              pointerEvents: "none",
            }}
            onClick={(l) => {
              return true;
            }}
          ></Image>
          <nav
            style={{
              display: "flex",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              wordSpacing: 2,
              gap: 5,
              cursor: "none",
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
              onClick={(v) => {
                v.preventDefault();
                router.push("/");
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
              onClick={(y) => {
                y.preventDefault();
                router.push("/contact");
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
              onClick={(u) => {
                u.preventDefault();
                router.push("/about");
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
              onClick={(l) => {
                router.push("/chat");
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
              onClick={(i) => {
                router.push("/dashboard");
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
              Chats & Privacy
            </p>
          </nav>

          <Stack>
            <Button
              variant="contained"
              style={{
                backgroundColor: "purple",
                width: 110,
                display: "flex",
                position: "absolute",
                right: 0,
                top: 4,
                cursor: "none",
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
        <span
          className="material-symbols-outlined"
          style={{
            display: "flex",
            position: "absolute",
            WebkitBackdropFilter: "blur(1px)",
            backdropFilter: "blur(1px)",
            cursor: "none",
          }}
          id="menu"
          onMouseEnter={(m) => {
            m.preventDefault();
            var cursor = document.getElementById("mouse") as HTMLElement;
            var pointer = document.getElementById("pointer") as HTMLElement;
            var menu = document.getElementById("menu") as HTMLElement;
            pointer!.style.display = "block";
            cursor!.style.display = "none";
            menu.style.backgroundColor = "black";
            menu.style.color = "white";
            menu.style.borderRadius = "20px";
          }}
          onMouseOut={(u) => {
            u.preventDefault();
            var cursor = document.getElementById("mouse") as HTMLElement;
            var pointer = document.getElementById("pointer") as HTMLElement;
            var menu = document.getElementById("menu") as HTMLElement;
            pointer!.style.display = "none";
            cursor!.style.display = "block";
            menu.style.backgroundColor = "transparent";
            menu.style.color = "black";
            menu.style.borderRadius = "10px";
          }}
          onClick={(m) => {
            m.preventDefault();
            var health = document.getElementById("health") as HTMLElement;
            var safety = document.getElementById("safety") as HTMLElement;
            var end = document.getElementById("back") as HTMLElement;
            var times = document.getElementById("x") as HTMLElement;
            var menu = document.getElementById("menu") as HTMLElement;
            var support = document.getElementById("support") as HTMLElement;
            var help = document.getElementById("help") as HTMLElement;
            health.style.color = "red";
            health.style.transition = "2s ease-in-out";
            safety.style.color = "red";
            safety.style.transition = "2s ease-in-out";
            end.style.width = "230px";
            end.style.transition = "2s ease-in-out";
            support.style.color = "red";
            support.style.transition = "2s ease-in-out";
            help.style.color = "red";
            help.style.transition = "2s ease-in-out";
            times.style.display = "flex";
            times.style.color = "gray";
            times.style.fontSize = "20px";
            times.style.transition = "3s ease-in-out";
            menu.style.display = "none";
          }}
        >
          menu
        </span>
        <div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              top: 0,
              height: "100vh",
              backgroundColor: "black",
              width: 0,
            }}
            id="back"
          >
            <span
              className="material-symbols-outlined"
              style={{
                display: "flex",
                position: "relative",
                fontSize: 0,
                top: -330,
                left: 173,
                cursor: "none",
                color: "transparent",
              }}
              id="x"
              onMouseOver={(r) => {
                var cursor = document.getElementById("mouse") as HTMLElement;
                var pointer = document.getElementById("pointer") as HTMLElement;
                pointer!.style.display = "block";
                cursor!.style.display = "none";
              }}
              onMouseEnter={(r) => {
                r.preventDefault();
                var cursor = document.getElementById("mouse") as HTMLElement;
                var pointer = document.getElementById("pointer") as HTMLElement;
                var times = document.getElementById("x") as HTMLElement;
                pointer!.style.display = "block";
                cursor!.style.display = "none";
                times.style.color = "red";
                times.style.transition = "0s";
              }}
              onMouseOut={(b) => {
                b.preventDefault();
                var cursor = document.getElementById("mouse") as HTMLElement;
                var pointer = document.getElementById("pointer") as HTMLElement;
                var times = document.getElementById("x") as HTMLElement;
                pointer!.style.display = "none";
                cursor!.style.display = "block";
                times.style.color = "grey";
                times.style.transition = "0s";
              }}
              onClick={(h) => {
                h.preventDefault();
                var health = document.getElementById("health") as HTMLElement;
                var safety = document.getElementById("safety") as HTMLElement;
                var end = document.getElementById("back") as HTMLElement;
                var support = document.getElementById("support") as HTMLElement;
                var help = document.getElementById("help") as HTMLElement;
                var times = document.getElementById("x") as HTMLElement;
                var menu = document.getElementById("menu") as HTMLElement;
                health.style.color = "transparent";
                health.style.transition = "1s ease-in-out";
                safety.style.color = "transparent";
                safety.style.transition = "1s ease-in-out";
                end.style.width = "0";
                end.style.transition = "2s ease-in-out";
                support.style.color = "transparent";
                support.style.transition = "1s ease-in-out";
                help.style.color = "transparent";
                help.style.transition = "1s ease-in-out";
                times.style.fontSize = "0";
                times.style.color = "transparent";
                times.style.transition = "1s ease-in-out";
                menu.style.display = "flex";
              }}
            >
              close
            </span>
            <span
              className="material-symbols-outlined"
              id="health"
              style={{ color: "transparent", position: "relative", top: -220 }}
            >
              health_and_safety
            </span>
            <h5
              style={{
                color: "transparent",
                position: "relative",
                top: -220,
                cursor: "pointer",
              }}
              id="safety"
            >
              Safety
            </h5>
            <span
              className="material-symbols-outlined"
              id="support"
              style={{
                color: "transparent",
                position: "relative",
                top: -160,
                left: -65,
              }}
            >
              help
            </span>
            <h5
              style={{
                color: "transparent",
                position: "relative",
                top: -160,
                left: -63,
                cursor: "pointer",
              }}
              id="help"
            >
              Support
            </h5>
          </div>
        </div>
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
            top: 170,
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
              fontFamily: "'Italiana', sans-serif",
              color: "rebeccapurple",
            }}
          >
            Upcoming Updates
          </Typography>
          <Stack display={"flex"} flexDirection={"row"} gap={3}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
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
                src={"/plant-detector.jpg"}
                width={150}
                height={170}
                draggable="false"
                style={{ position: "relative", top: -15 }}
              ></Image>
              <Typography
                variant="h6"
                style={{
                  color: "lightpink",
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                }}
              >
                A plant-detection API
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                WebkitBackdropFilter: "blur(5px)",
                backdropFilter: "blur(5px)",
                width: 170,
                color: "gray",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                border: "1px transparent",
                padding: "10px",
                boxSizing: "border-box",
                boxShadow: "0 15px 30px 0 #888888",
                margin: "8px",
              }}
            >
              <Image
                alt="upd2"
                src={"/cursor.png"}
                width={150}
                height={150}
                draggable={"false"}
                style={{ position: "relative", top: -35 }}
              ></Image>
              <Typography
                variant="h6"
                style={{
                  color: "lightpink",
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                }}
              >
                A new cursor
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                WebkitBackdropFilter: "blur(5px)",
                backdropFilter: "blur(5px)",
                width: 170,
                color: "gray",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                border: "1px transparent",
                padding: "10px",
                boxSizing: "border-box",
                boxShadow: "0 15px 30px 0 #888888",
                margin: "8px",
              }}
            >
              <Image
                alt="upd3"
                src={"/UI.jpg"}
                width={150}
                height={170}
                draggable={"false"}
                style={{ position: "relative", top: -30 }}
              ></Image>
              <Typography
                variant="h6"
                style={{
                  color: "lightpink",
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                }}
              >
                New UIs
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                WebkitBackdropFilter: "blur(5px)",
                backdropFilter: "blur(5px)",
                width: 170,
                height: 300,
                color: "gray",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                border: "1px transparent",
                padding: "10px",
                boxSizing: "border-box",
                boxShadow: "0 15px 30px 0 #888888",
                margin: "8px",
              }}
            >
              <Image
                alt="upd4"
                src={"/botanical.jpg"}
                width={150}
                height={170}
                draggable={"false"}
                style={{ position: "relative", top: -22 }}
              ></Image>
              <Typography
                variant="h6"
                style={{
                  color: "lightpink",
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                }}
              >
                A new Botanical translator
              </Typography>
            </div>
          </Stack>
        </Stack>
        <footer
          style={{
            marginTop: "auto",
            marginLeft: "auto",
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
              float: "right",
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
