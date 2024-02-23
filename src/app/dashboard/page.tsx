"use client";
import { useAllMessages } from "@/modules/messages/hooks/use-all-messages/use-all-messages";
import { Box, CircularProgress, Stack, TextField } from "@mui/material";
import Image from "next/image";
import Logo from "public/Samp.png";
import { useState } from "react";
import { MessageInput } from "../api/messages/route";
import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import Link from "next/link";
import { Train_One } from "next/font/google";
import "../globalicons.css";
import { useRouter } from "next/navigation";

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

  return (
    <Box>
      <Stack
        style={{
          backgroundImage:
            "url('https://suntrics.com/wp-content/uploads/2023/05/Drones-Help-Farmers.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          marginTop: 10,
        }}
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
              fontFamily: "monospace",
              color: "gray",
              cursor: "pointer",
            }}
            id="home"
            onClick={(e) => {
              e.preventDefault();
              router.push("#");
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
            style={{ fontFamily: "monospace", color: "gray" }}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "page.tsx";
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
          <p style={{ fontFamily: "monospace", color: "gray" }}>About us</p>
        </nav>
        <Stack display={"flex"} width={200} height={30}>
          <Image
            alt="Logo"
            src={Logo}
            width={123}
            height={123}
            draggable="false"
          ></Image>
        </Stack>
        <Stack
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            overflow: "scroll",
            WebkitBackdropFilter: "blur(5px)",
            backdropFilter: "blur(5px)",
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
              <Link href={`/dashboard/message/${m.id}`}>
                <p>{m.content}</p>
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
            <TextField
              onChange={(e) =>
                setMessage((prev) => ({ ...prev, content: e.target.value }))
              }
              type="search"
              placeholder="search"
              id="search"
              name="search"
              variant="standard"
              inputProps={{ style: inputStyle }}
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
              }}
            ></TextField>
          </form>
        </Stack>
        <footer
          style={{
            borderTop: 9,
            marginTop: 290,
            position: "relative",
            display: "flex",
            flexDirection: "row",
            float: "right",
          }}
        >
          <p
            style={{
              color: "gold",
              fontFamily: "Train_One",
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
            <a style={{ color: "black" }}>&reg;</a>
          </p>
        </footer>
      </Stack>
    </Box>
  );
}
