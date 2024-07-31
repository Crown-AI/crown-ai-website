"use client";

import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import email from "next-auth/providers/email";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavBar } from "@/components/navbar/navbar";
import "../../../../globalicons.css";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const inputStyle = {
    color: "red",
    fontFamily: "monospace",
  };
  return (
    <Box>
      <Stack
        style={{
          backgroundImage: "url('/login.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
        width="100%"
        minHeight="100vh"
        display={"flex"}
      >
        <Stack
          style={{
            backgroundColor: "rgba(72.55, 94.9, 100, 0.3)",
            width: 410,
          }}
        >
          <form
            onSubmit={(p) => {
              p.preventDefault();
              signIn("email", { email: (p.target as any).email.value });
              setSubmitted(true);
            }}
          >
            <Stack
              direction={"column"}
              style={{ height: "30vh" }}
              spacing={5}
              borderColor={"transparent"}
            >
              <br />
              <Typography
                fontSize={22}
                style={{
                  fontFamily: "monospace",
                  display: "flex",
                  position: "relative",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight="normal"
              >
                Sign in to your account
              </Typography>
              <br />
              <TextField
                name="email"
                id="email"
                label="Email"
                inputProps={{ style: inputStyle }}
                fullWidth
                style={{
                  borderRadius: 50,
                }}
                value={email}
                onChange={(o) => setEmail(o.target.value)}
                required
              ></TextField>
            </Stack>
            <br />
            <br />
            <Stack
              direction={"column"}
              display={"flex"}
              style={{
                width: "100%",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                type="submit"
                style={{
                  width: "90%",
                  fontFamily: "Train_One",
                  borderRadius: 10,
                  borderColor: "silver",
                  color: "gold",
                }}
              >
                <span>Login</span>
              </Button>
            </Stack>
            <br />
            <hr id="differenciator" />
            <br />
            <Stack
              direction={"column"}
              display={"flex"}
              style={{
                width: "100%",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                href={"/auth/register"}
                style={{
                  display: "flex",
                  position: "relative",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="outlined"
                  style={{
                    width: "90%",
                    fontFamily: "Train_One",
                    borderRadius: 10,
                    borderColor: "aqua",
                    color: "silver",
                  }}
                >
                  <span>Signup</span>
                </Button>
              </Link>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Box>
  );
}
