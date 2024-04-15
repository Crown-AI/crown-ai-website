"use client";
import { useAllMessages } from "@/modules/messages/hooks/use-all-messages/use-all-messages";
import { Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
import Image from "next/image";
import Logo from "public/Samp.png";
import { useState, useEffect, useRef } from "react";
import { MessageInput } from "../api/messages/route";
import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import Link from "next/link";
import { Train_One } from "next/font/google";
import "../globalicons.css";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/navbar/navbar";
const emptyMessage: MessageInput = {
  content: "",
};
export default function HomePage() {
  const [nmessage, setMessage] = useState<MessageInput>(emptyMessage);
  const { data: messagesResponse, mutate, isLoading } = useAllMessages();
  console.log("@@ ", messagesResponse);
  const inputStyle = {
    backgroundImage:
      "linear-gradient(to bottom right, red, blue, gold, indigo, blue)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontSize: 20,
    borderBottom: 0,
  };
  const router = useRouter();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [nmessage]);
  return (
    <Box>
      <Stack
        style={{
          backgroundImage: "url('/AI-Chatbot.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          marginTop: 10,
          cursor: "none",
          overflow: "hidden",
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
        display={"flex"}
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
        </nav>
        <Stack
          ref={chatContainerRef}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            overflow: "scroll",
          }}
          width={600}
          height={595}
          marginLeft={52}
          alignItems={"flex-start"}
          justifyContent={"center"}
          p={4}
        >
          {messagesResponse?.map((m) => (
            <div key={m.content}>
              <Link
                href={`/dashboard/message/${m.id}`}
                style={{ textDecoration: "none", cursor: "none" }}
                onMouseOver={(r) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/text-cursor.png";
                }}
                onMouseOut={(i) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/cursor.png";
                }}
              >
                <p
                  style={{
                    color: "green",
                    textDecoration: "none",
                    cursor: "none",
                  }}
                  onMouseOver={(r) => {
                    var cursor = document.getElementById(
                      "mouse",
                    ) as HTMLImageElement;
                    cursor.srcset = "/text-cursor.png";
                  }}
                  onMouseOut={(i) => {
                    var cursor = document.getElementById(
                      "mouse",
                    ) as HTMLImageElement;
                    cursor.srcset = "/cursor.png";
                  }}
                  onClick={(r) => {
                    r.preventDefault();
                  }}
                >
                  {m.content}
                </p>
              </Link>
            </div>
          ))}
          <div style={{ height: 100 }} />
          {isLoading && <CircularProgress />}
        </Stack>
        <Stack
          width={500}
          marginTop={-38}
          style={{
            height: 2,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 450,
          }}
        >
          <form
            style={{
              position: "relative",
              width: 500,
              marginTop: 540,
              backgroundColor: "silver",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
            onSubmit={async (e) => {
              e.preventDefault();
              console.log("@@ message input: ", nmessage);
              const response = await fetch("/api/messages", {
                method: "POST",
                body: JSON.stringify(nmessage),
              });
              console.log("@@response: ", response);
              await mutate();
            }}
          >
            <input
              onChange={(e) =>
                setMessage((prev) => ({ ...prev, content: e.target.value }))
              }
              type="search"
              placeholder="search"
              id="search"
              name="search"
              style={{
                borderRadius: 50,
                width: "95%",
                height: 51,
                border: "transparent",
                outline: "transparent",
                alignItems: "bottom",
                justifyContent: "bottom",
                background: "silver",
                borderBottom: 0,
                overflow: "scroll",
                cursor: "none",
              }}
              onMouseOver={(r) => {
                var cursor = document.getElementById(
                  "mouse",
                ) as HTMLImageElement;
                cursor.srcset = "/text-cursor.png";
              }}
              onMouseOut={(i) => {
                var cursor = document.getElementById(
                  "mouse",
                ) as HTMLImageElement;
                cursor.srcset = "/cursor.png";
              }}
            />
          </form>
        </Stack>
        <footer
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            right: 0,
            bottom: 0,
          }}
        >
          <p
            style={{
              color: "gold",
              fontFamily: "'Indie Flower', cursive",
              fontStyle: "italic",
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
