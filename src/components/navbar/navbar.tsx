import { Stack, Button } from "@mui/material";
import router from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import { rotarySwitch, rotaryUnit } from "../rotary-unit/rotary-unit";

export function NavBar() {
  const Home = () => {
    window.location.href = "/";
  };
  const Contact = () => {
    window.location.href = "/contact";
  };
  const About = () => {
    window.location.href = "/about";
  };
  const Chat = () => {
    window.location.href = "/chat";
  };
  const Bot = () => {
    window.location.href = "/dashboard";
  };
  return (
    <Stack>
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
          onClick={Home}
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
          onClick={Contact}
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
        <span className="material-symbols-outlined" style={{ marginLeft: 30 }}>
          local_library
        </span>
        <p
          style={{
            color: "gray",
            fontFamily: "'Indie Flower', cursive",
            cursor: "none",
          }}
          onClick={About}
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
        <span className="material-symbols-outlined" style={{ marginLeft: 50 }}>
          chat
        </span>
        <p
          id="chats"
          style={{
            color: "gray",
            fontFamily: "'Indie Flower', cursive",
            cursor: "none",
          }}
          onClick={Chat}
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
        <span className="material-symbols-outlined" style={{ marginLeft: 50 }}>
          forum
        </span>
        <p
          id="p2b"
          style={{
            color: "gray",
            fontFamily: "'Indie Flower', cursive",
            cursor: "none",
          }}
          onClick={Bot}
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
        <Stack
          direction="row"
          justifyContent="flex-end"
          style={{ cursor: "none" }}
        >
          <Button
            variant="contained"
            id="button"
            style={{ backgroundColor: "black", left: 130, cursor: "none" }}
            onClick={(r) => {
              window.location.href = "/auth/logout";
            }}
            onMouseOver={(s) => {
              var mouse = document.getElementById("mouse") as HTMLImageElement;
              var button = document.getElementById(
                "button",
              ) as HTMLButtonElement;
              button.style.backgroundColor = "red";
              button.style.color = "black";
              button.style.transition = "1s ease-in-out";
              mouse.srcset = "/pointer.png";
              (mouse.height = 30), (mouse.width = 20);
            }}
            onMouseOut={(u) => {
              var mouse = document.getElementById("mouse") as HTMLImageElement;
              var button = document.getElementById(
                "button",
              ) as HTMLButtonElement;
              button.style.backgroundColor = "black";
              button.style.color = "white";
              button.style.transition = "1s ease-in-out";
              mouse.srcset = "/cursor.png";
              (mouse.height = 30), (mouse.width = 30);
            }}
          >
            Logout
          </Button>
        </Stack>
      </nav>
      <span
        id="settings"
        className="material-symbols-outlined"
        style={{ color: "white", position: "absolute", right: 7, top: 10 }}
        onClick={(j) => {
          window.location.href = "/settings";
        }}
        onMouseOver={(e) => {
          var cursor = document.getElementById("mouse") as HTMLImageElement;
          cursor.srcset = "/pointer.png";
          cursor.height = 30;
          cursor.width = 20;
        }}
        onMouseEnter={rotaryUnit}
        onMouseLeave={rotarySwitch}
        onMouseOut={(v) => {
          var cursor = document.getElementById("mouse") as HTMLImageElement;
          cursor.srcset = "/cursor.png";
          cursor.height = 30;
          cursor.width = 30;
        }}
      >
        settings
      </span>
    </Stack>
  );
}
