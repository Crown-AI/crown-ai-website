"use client";
import { Box, Stack, Typography } from "@mui/material";
import { ProductCard1 } from "./components/product1";
import { NavBar } from "@/components/navbar/navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import "../globalicons.css";

export default function Products() {
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    let login = document.getElementById("login") as HTMLButtonElement;
    let logout = document.getElementById("logout") as HTMLButtonElement;
    if (session.data?.user) {
      console.log("Logged in");
      login.style.display = "none";
      logout.style.display = "flex";
    } else {
      console.log("Logged out");
      login.style.display = "flex";
      logout.style.display = "none";
    }
  }, [router, session.data?.user]);
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/auth/login");
    } else {
      console.log("Logged in");
    }
  }, [router, session.status]);
  return (
    <Box>
      <Stack
        sx={{
          backgroundColor: "rgb(242, 242, 242)",
          height: "100vh",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <nav>
          <NavBar />
        </nav>
        {/* Product cards go here */}
        <Stack className="ProductCards">
          <Typography
            variant="h2"
            sx={{
              display: "flex",
              position: "relative",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Josefin Sans', sans-serif",
              fontOpticalSizing: "auto",
              fontWeight: 300,
              fontStyle: "normal",
            }}
          >
            Projects
          </Typography>
          {/* Product card 1 */}
          <Stack className="cardContainer">
            <ProductCard1 />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
