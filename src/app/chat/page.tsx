"use client";

import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import "../globalicons.css";

interface MessageData {
  message: string;
}

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
  cluster: "mt1",
});

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const channel = pusher.subscribe("chat");

    channel.bind("message", (data: MessageData) => {
      console.log("@@ message: ", data);
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  return (
    <Box>
      <Stack
        style={{
          backgroundImage: "url('/Cht.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
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
          <span
            className="material-symbols-outlined"
            style={{ position: "relative" }}
          >
            home
          </span>
          <p
            style={{
              fontFamily: "'Indie Flower', cursive",
              color: "gray",
              cursor: "pointer",
              position: "relative",
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
              cursor: "pointer",
            }}
            onClick={(y) => {
              y.preventDefault();
              router.push("/about");
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
              cursor: "pointer",
            }}
            onClick={(c) => {
              c.preventDefault();
              router.push("/chat");
            }}
          >
            Chats & Privacy
          </p>
        </nav>
        <Stack
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            alignItems: "baseline",
            justifyContent: "space-between",
            backgroundColor: "rgba(128, 128, 128, 0.3)",
            height: 600,
            width: 1000,
            left: 150,
            top: 30,
            overflow: "scroll",
          }}
        >
          <div style={{ marginTop: 450, marginLeft: 400 }}>
            {messages.map((message, index) => (
              <p
                key={index}
                style={{
                  backgroundColor: "green",
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 50,
                  height: 50,
                }}
              >
                {message}
              </p>
            ))}
            <input
              placeholder="Message"
              style={{
                marginTop: "auto",
                alignItems: "bottom",
                justifyContent: "bottom",
                borderBottom: 0,
                backgroundColor: "grey",
                width: 500,
                height: 50,
                border: 0,
                outline: 0,
                borderRadius: 50,
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={() => {
                fetch("/api/chat", {
                  method: "POST",
                  body: JSON.stringify({
                    message: input,
                  }),
                });
                setInput("");
              }}
            >
              Send
            </button>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
}
