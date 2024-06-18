import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default async function NotFound() {
  const session = await getServerSession();

  return (
    <Stack
      style={{
        backgroundImage: "url('/notfound.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    ></Stack>
  );
}
