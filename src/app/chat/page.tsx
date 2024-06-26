"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Pusher from "pusher-js";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import "../globalicons.css";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/navbar/navbar";
import { useSession } from "next-auth/react";
import { useAllChatMessages } from "@/modules/chat/hooks/use-all-chat-messages/use-all-chat-messages";
import { getAllChatMessages } from "@/modules/chat/lib/get-all-chat-messages/get-all-chat-messages";
import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import Link from "next/link";
import Image from "next/image";
import About from "../about/page";
import Contact from "../contact/page";
import Home from "../page";
import { matchesMiddleware } from "next/dist/shared/lib/router/router";
import { GetAllMessagesResponse } from "../api/messages/route";
import { GetAllChatMessagesResponse } from "../api/chat/route";
import { Mice } from "@/components/mice/mouse";
import { MenuBar } from "@/components/menubar/menubar";
import { PointBack, PointOut } from "@/components/mousecontrols/mousecontrol";
import { rotarySwitch, rotaryUnit } from "@/components/rotary-unit/rotary-unit";

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
  cluster: "mt1",
});

export default function Chat() {
  const session = useSession();
  const [messages, setMessages] = useState<
    GetAllChatMessagesResponse["messages"]
  >([]);
  const [username, setUsername] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const generator = `${Math.floor(Math.random() * 10000)}`;
  const send = useCallback(
    (e: any) => {
      e.preventDefault();
      fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username || `user${Math.floor(Math.random() * 2)}`,
        }),
      });
      setUsername("");
    },
    [username],
  );

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

    channel.bind(
      "message",
      (data: GetAllChatMessagesResponse["messages"][number]) => {
        console.log("@@ message: ", data);
        setMessages((prevMessages) => [...prevMessages, data]);
      },
    );

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);
  useEffect(() => {
    async function Update() {
      if (!session.data?.user) {
        return;
      }
      const response = await fetch("/api/user");
      const user = await response.json();
      console.log("@@ user: ", user);
      setUsername(user.user.username || "user");
    }
    Update();
  }, [session.data?.user]);

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
          window.addEventListener("mousemove", (t) => {
            mouse!.style.top = `${t.clientY}px`;
            mouse!.style.left = `${t.clientX}px`;
            pointer!.style.top = `${t.clientY}px`;
            pointer!.style.left = `${t.clientX}px`;
          });
        }}
      >
        <Mice />
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
              onMouseOver={PointOut}
              onMouseOut={PointBack}
              onClick={() => {
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
                cursor: "none",
              }}
              onMouseOver={PointOut}
              onMouseOut={PointBack}
              onClick={() => {
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
                cursor: "none",
              }}
              onMouseOver={PointOut}
              onMouseOut={PointBack}
              onClick={() => {
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
                cursor: "none",
              }}
              onMouseOver={PointOut}
              onMouseOut={PointBack}
              onClick={() => {
                router.push("/chat");
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
              onMouseOver={PointOut}
              onMouseOut={PointBack}
              onClick={() => {
                router.push("/dashboard");
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
                onClick={() => {
                  window.location.href = "/auth/logout";
                }}
                onMouseOver={() => {
                  var mouse = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
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
                  var mouse = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
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
          <MenuBar />
          <span
            className="material-symbols-outlined"
            id="settings"
            style={{ color: "white", position: "absolute", right: 7, top: 10 }}
            onClick={() => {
              var div = document.getElementById("popup-1") as HTMLDivElement;
              div.classList.toggle("active");
            }}
            onMouseOver={PointOut}
            onMouseEnter={rotaryUnit}
            onMouseOut={PointBack}
            onMouseLeave={rotarySwitch}
          >
            settings
          </span>
        </Stack>
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
                      {message.owner?.username}
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
                    email: session.data?.user?.email || "harrisjohnu@gmail.com",
                    username:
                      username || `user${Math.floor(Math.random() * 2)}`,
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
                  right: 0,
                  background: "transparent",
                  border: "transparent",
                  bottom: "1%",
                }}
              >
                <span
                  className="material-symbols-outlined"
                  id="text"
                  onClick={() => {
                    fetch("/api/chat", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        message: input,
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
        <div id="popup-1" className="popup">
          <div className="popup-content">
            <span
              style={{ cursor: "none" }}
              onClick={() => {
                var div = document.getElementById("popup-1") as HTMLDivElement;
                div.classList.toggle("active");
              }}
              onMouseOver={() => {
                var cursor = document.getElementById(
                  "mouse",
                ) as HTMLImageElement;
                cursor.srcset = "/pointer.png";
                cursor.height = 30;
                cursor.width = 20;
              }}
              onMouseOut={() => {
                var cursor = document.getElementById(
                  "mouse",
                ) as HTMLImageElement;
                cursor.srcset = "/cursor.png";
                cursor.height = 30;
                cursor.width = 30;
              }}
              className="close"
            >
              &times;
            </span>
            <h2>Change Username</h2>
            <form action="" onSubmit={send}>
              <TextField
                label="Change Username"
                id="change"
                value={username}
                onChange={(r) => setUsername(r.target.value)}
                onMouseOver={() => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  var change = document.getElementById(
                    "change",
                  ) as HTMLInputElement;
                  cursor.srcset = "/text-cursor.png";
                  change.style.cursor = "none";
                }}
                onMouseOut={() => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/cursor.png";
                }}
              ></TextField>
              <Button
                type="submit"
                variant="contained"
                id="clicker"
                style={{ cursor: "none" }}
                onMouseOver={() => {
                  var mouse = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  mouse.srcset = "/pointer.png";
                  mouse.height = 30;
                  mouse.width = 20;
                }}
                onMouseOut={() => {
                  var mouse = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  mouse.srcset = "/cursor.png";
                  mouse.height = 30;
                  mouse.width = 30;
                }}
                onClick={() => {
                  var button = document.getElementById(
                    "clicker",
                  ) as HTMLButtonElement;
                  button.innerHTML = "Changed";
                  setTimeout(() => {
                    button.innerHTML = "Change";
                  }, 2000);
                }}
              >
                Change
              </Button>
            </form>
          </div>
        </div>
      </Stack>
    </Box>
  );
}
