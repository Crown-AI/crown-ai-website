import { NavBar } from "@/components/navbar/navbar";
import { Box, Stack, Typography } from "@mui/material";
import "../globalicons.css";
import { useSession } from "next-auth/react";

export default function About() {
  const session = useSession();
  const redemption = () => {
    let login = document.getElementById("login") as HTMLButtonElement;
    let logout = document.getElementById("logout") as HTMLButtonElement;
    if (session.data?.user) {
      console.log("Status: Logged in");
      login.style.display = "none";
      logout.style.display = "flex";
    } else {
      console.log("Status: Logged out");
      login.style.display = "flex";
      logout.style.display = "none";
    }
  };
  window.addEventListener("mouseover", redemption);
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
