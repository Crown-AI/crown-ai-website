import { NavBar } from "@/components/navbar/navbar";
import { Box, Stack, Typography } from "@mui/material";
import "../globalicons.css";

export default function About() {
  return (
    <Box>
      <Stack>
        <nav>
          <NavBar />
        </nav>
        <Stack style={{ backgroundColor: "greenyellow" }}>
          <Typography variant="h1" style={{ color: "beige" }}>
            Who We Are
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
