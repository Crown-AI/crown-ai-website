import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { Stack, Typography } from "@mui/material";

export default async function NotFound() {
  const session = await getServerSession();

  return (
    <Stack>
      <Typography variant="h1">Not Found</Typography>
    </Stack>
  );
}
