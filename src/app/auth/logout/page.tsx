"use client";

import { Stack, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      await signOut({
        callbackUrl: "/",
      });
    })();
  }, [router]);

  return (
    <Stack
      height="100vh"
      style={{
        backgroundColor: "turquoise",
        display: "flex",
        height: "100vh",
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h2"
        style={{
          color: "blueviolet",
          fontFamily: "monospace",
        }}
      >
        Logging you out...
      </Typography>
    </Stack>
  );
}
