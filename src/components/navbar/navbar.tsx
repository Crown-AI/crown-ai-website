import { Stack, Button } from "@mui/material";
import router from "next/router";
import { useEffect } from "react";
import Link from "next/link";

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
          cursor: "pointer",
        }}
        id="home"
        onClick={(e) => {
          e.preventDefault();
          router.push("/");
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
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.preventDefault();
          router.push("/contact");
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
          cursor: "pointer",
        }}
        onClick={(t) => {
          t.preventDefault();
          router.push("/about");
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
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.preventDefault();
          router.push("/chat");
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
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.preventDefault();
          router.push("/dashboard");
        }}
      >
        Chats & Privacy
      </p>
      <Stack direction="row" justifyContent="flex-end">
        <Link href={"/auth/logout"}>
          <Button
            variant="contained"
            style={{ backgroundColor: "black", left: 130 }}
          >
            Logout
          </Button>
        </Link>
      </Stack>
    </nav>
  );
}
