"use client";
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { Box, Stack } from "@mui/material";
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
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          style={{
            flexGrow: 1,
            overflowY: "auto",
            backgroundColor: "rgba(128, 128, 128, 0.3)",
            width: 1000,
            marginLeft: 150,
            padding: "20px 0",
          }}
        >
          {messages.map((message, index) => (
            <p
              key={index}
              style={{
                backgroundColor: "gray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                height: 50,
                marginBottom: 10,
              }}
            >
              {message}
            </p>
          ))}
        </Stack>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            placeholder="Message"
            style={{ flexGrow: 1, marginRight: 10 }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <span
            className="material-symbols-outlined"
            style={{
              backgroundColor: "green",
              width: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              fetch("/api/chat", {
                method: "POST",
                body: JSON.stringify({ message: input }),
              });
              setInput("");
            }}
          >
            send
          </span>
        </div>
      </Stack>
    </Box>
  );
}
