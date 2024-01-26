"use client";
import { useAllMessages } from "@/modules/messages/hooks/use-all-messages/use-all-messages";
import { Box, CircularProgress, Stack, TextField } from "@mui/material";
import Image from "next/image";
import Logo from "public/Sample.png";
import { useState } from "react";
import { MessageInput } from "../api/messages/route";
import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import Link from "next/link";

const emptyMessage: MessageInput = {
  content: "",
};
export default function HomePage() {
  const [nmessage, setMessage] = useState<MessageInput>(emptyMessage);

  const { data: MessagesResponse, mutate, isLoading } = useAllMessages();

  const inputStyle = {
    backgroundImage:
      "linear-gradient(to bottom right, red, aqua, silver, indigo, blue)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontSize: 20,
    borderBottom: 0,
  };

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
        <Stack display={"flex"} width={220} height={50}>
          <Image alt="Logo" src={Logo}></Image>
        </Stack>
        <Stack
          style={{ backgroundColor: "white", overflow: "scroll" }}
          width={600}
          height={595}
          marginLeft={52}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {MessagesResponse?.map((m) => (
            <Link key={m.id} href={`/dashboard/message/${m.id}`}>
              <p>{m.content}</p>
            </Link>
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
              inputProps={{ disableUnderline: true, style: inputStyle }}
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
      </Stack>
    </Box>
  );
}
