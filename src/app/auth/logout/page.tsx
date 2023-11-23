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
    <Stack height="100vh">
      <Typography variant="h1">Logging you out...</Typography>
    </Stack>
  );
}
