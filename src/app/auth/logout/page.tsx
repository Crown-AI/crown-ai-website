"use client";

import { Stack, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
        backgroundImage: "url('/D108.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
          backgroundImage:
            "linear-gradient(to bottom right, red, gold, silver, aqua, purple)",
          WebkitBackgroundClip: "text",
          MozBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          fontFamily: "'Reddit Mono', monospace",
        }}
      >
        Logging you out...
      </Typography>
    </Stack>
  );
}
