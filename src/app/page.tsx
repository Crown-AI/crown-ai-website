import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Stack>
      <Typography variant="h1">Home</Typography>
      <Link href="/auth/login">Login</Link>
    </Stack>
  );
}
