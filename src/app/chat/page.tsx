"use client";

import React, { useEffect, useState, useRef } from "react";
import Pusher from "pusher-js";
import { Box, Stack } from "@mui/material";
import "../globalicons.css";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/navbar/navbar";
import { useSession } from "next-auth/react";
import { useAllChatMessages } from "@/modules/chat/hooks/use-all-chat-messages/use-all-chat-messages";
import { getAllChatMessages } from "@/modules/chat/lib/get-all-chat-messages/get-all-chat-messages";
import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import Link from "next/link";
import Image from "next/image";

interface MessageData {
  message: string;
  username?: string;
  email: string;
  createdAt: Date;
}

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
  cluster: "mt1",
});

export default function Chat() {
  const session = useSession();
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [email, setEmail] = useState<MessageData[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState<string>("");
  const router = useRouter();

  const { data: databaseChatMessages } = useAllChatMessages();

  console.log("@@ databaseChatMessages", databaseChatMessages);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
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
          }}
        >
          <NavBar />
          <span
            className="material-symbols-outlined"
            style={{ color: "white", position: "absolute", right: 3 }}
            onMouseOver={(e) => {
              var cursor = document.getElementById("mouse") as HTMLImageElement;
              cursor.srcset = "/pointer.png";
            }}
            onMouseOut={(v) => {
              var cursor = document.getElementById("mouse") as HTMLImageElement;
              cursor.srcset = "/cursor.png";
            }}
          >
            settings
          </span>
        </nav>
        <Stack>
          <div
            ref={chatContainerRef}
            style={{
              backgroundColor: "rgba(128, 128, 128, 0.3)",
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              height: 500,
              width: 1000,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              overflowY: "scroll",
            }}
          >
            {[...(databaseChatMessages || []), ...messages].map(
              (message, index) => (
                <div key={index}>
                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.5)",
                      borderRadius: 20,
                      width: 300,
                      height: "auto",
                    }}
                  >
                    <h6
                      style={{
                        display: "flex",
                        position: "relative",
                        top: 10,
                        left: 20,
                        fontWeight: "bold",
                        backgroundColor: "transparent",
                      }}
                    >
                      {message.username}
                    </h6>
                    <h6
                      style={{
                        display: "flex",
                        position: "relative",
                        top: -30,
                        right: -170,
                        color: "rgba(50.2, 50.2, 50.2, 0.5)",
                        height: 2,
                      }}
                    >
                      {new Date(message.createdAt).toLocaleString()}
                    </h6>
                    <h4
                      style={{
                        backgroundColor: "transparent",
                        display: "flex",
                        position: "relative",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 50,
                        width: 250,
                        fontFamily: "'Indie Flower', cursive",
                      }}
                    >
                      {message.message}
                    </h4>
                  </div>
                </div>
              ),
            )}
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              flexDirection: "row",
              top: 500,
              cursor: "none",
            }}
          >
            <form
              onSubmit={(r) => {
                r.preventDefault();
                fetch("/api/chat", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    message: input,
                    username: window.localStorage.getItem("uname"),
                    email:
                      session.data?.user?.email ||
                      window.localStorage.getItem("uname"),
                  }),
                });
                setInput("");
              }}
            >
              <input
                placeholder="Message"
                id="message"
                style={{
                  display: "flex",
                  position: "fixed",
                  bottom: 0,
                  cursor: "none",
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
                onMouseOver={(e) => {
                  var mouse = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  mouse.srcset = "/text-cursor.png";
                }}
                onMouseOut={(e) => {
                  var mouse = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  mouse.srcset = "/cursor.png";
                }}
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
                    cursor: "none",
                  }}
                  onClick={() => {
                    fetch("/api/chat", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        message: input,
                        username: window.localStorage.getItem("uname"),
                        email:
                          session.data?.user?.email || "harrisjohnu@gmail.com",
                      }),
                    });
                    setInput("");
                  }}
                  onMouseEnter={(u) => {
                    u.preventDefault();
                    var button = document.getElementById(
                      "text",
                    ) as HTMLSpanElement;
                    var mouse = document.getElementById(
                      "mouse",
                    ) as HTMLImageElement;
                    mouse.srcset = "/pointer.png";
                    mouse.height = 30;
                    mouse.width = 20;
                    button.style.backgroundColor = "aqua";
                    button.style.color = "white";
                    button.style.transition = "1s ease-in-out";
                  }}
                  onMouseOut={(j) => {
                    j.preventDefault();
                    var button = document.getElementById(
                      "text",
                    ) as HTMLSpanElement;
                    var mouse = document.getElementById(
                      "mouse",
                    ) as HTMLImageElement;
                    mouse.srcset = "/cursor.png";
                    mouse.height = 30;
                    mouse.width = 30;
                    button.style.backgroundColor = "green";
                    button.style.color = "black";
                    button.style.transition = "1s ease-in-out";
                  }}
                >
                  send
                </span>
              </button>
            </form>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
}
