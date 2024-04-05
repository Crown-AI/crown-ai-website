"use client";

import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { Box, Stack } from "@mui/material";
import "../globalicons.css";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/navbar/navbar";
import { useSession } from "next-auth/react";
import { useAllChatMessages } from "@/modules/chat/hooks/use-all-chat-messages/use-all-chat-messages";

interface MessageData {
  message: string;
  username?: string;
  email?: string;
}

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
  cluster: "mt1",
});

export default function Chat() {
  const session = useSession();
  const [messages, setMessages] = useState<MessageData[]>([]);

  const [input, setInput] = useState<string>("");
  const router = useRouter();

  const { data: databaseChatMessages } = useAllChatMessages();

  console.log('@@ databaseChatMessages', databaseChatMessages);

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [router, session.status]);

  useEffect(() => {
    const channel = pusher.subscribe("chat");

    channel.bind("message", (data: MessageData) => {
      console.log("@@ message: ", data);
      setMessages((prevMessages) => [...prevMessages, data]);
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
          <NavBar />
        </nav>
        <Stack>
          <div
            style={{
              backgroundColor: "rgba(128, 128, 128, 0.3)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              flexDirection: "column",
              position: "relative",
              height: 500,
              width: 1000,
              left: 150,
              top: 50,
              overflow: "scroll",
            }}
          >
            {[...(databaseChatMessages || []), ...messages].map(
              (message, index) => (
                <div key={index}>
                  <p style={{ fontWeight: "bold" }}>
                    {message.username || message.email}
                  </p>
                  <p
                    style={{
                      backgroundColor: "green",
                      display: "flex",
                      position: "relative",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 50,
                      width: 250,
                      height: 50,
                    }}
                  >
                    {message.message}
                  </p>
                </div>
              )
            )}
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              flexDirection: "row",
              top: 500,
            }}
          >
            <input
              placeholder="Message"
              style={{
                display: "flex",
                position: "fixed",
                top: 640,
                marginTop: "auto",
                alignItems: "bottom",
                justifyContent: "bottom",
                borderBottom: 0,
                flexGrow: 1,
                marginRight: 10,
                backgroundColor: "rgba(128, 128, 128, 0.3)",
                height: 50,
                width: 1250,
                outline: "none",
                border: "none",
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              style={{
                display: "flex",
                position: "fixed",
                top: 645,
                background: "transparent",
                border: "transparent",
                left: 1255,
              }}
            >
              <span
                className="material-symbols-outlined"
                id="text"
                style={{
                  backgroundColor: "green",
                  width: 30,
                  cursor: "pointer",
                }}
                onClick={() => {
                  fetch("/api/chat", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      message: input,
                      username: "TJ", // Replace with actual username
                      email: "harrisjohnu@gmail.com", // Replace with actual email
                    }),
                  });
                  setInput("");
                }}
                onMouseEnter={(u) => {
                  u.preventDefault();
                  var button = document.getElementById(
                    "text"
                  ) as HTMLSpanElement;
                  button.style.backgroundColor = "aqua";
                  button.style.color = "white";
                  button.style.transition = "1s ease-in-out";
                }}
                onMouseOut={(j) => {
                  j.preventDefault();
                  var button = document.getElementById(
                    "text"
                  ) as HTMLSpanElement;
                  button.style.backgroundColor = "green";
                  button.style.color = "black";
                  button.style.transition = "1s ease-in-out";
                }}
              >
                send
              </span>
            </button>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
}
