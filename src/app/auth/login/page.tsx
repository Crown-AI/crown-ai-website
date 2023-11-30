import Link from "next/link";

import { authOptions } from "@/app/api/auth/[...nextauth]/constants";
import { EmailLoginForm } from "@/modules/auth/components/email-login-form/email-login-form";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Duru_Sans, Fira_Sans, Train_One } from "next/font/google";

export const metadata: Metadata = {
  title: "Sign In",
};

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <Box width="100%" minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
      <img src="https://s3-alpha-sig.figma.com/img/ae5f/7f58/8faecdbb231fe63b721f73222fa2c17e?Expires=1702252800&Signature=Di53c0PDb98bDre5sVkZKgUtECnKFzJqB~NDw~UDoExQwPPCkAoEImtQVKT6f80FBG9YgggsKMiAiedshYPeYJHv067hPssKdxXAv8PerXSGcYF7nRZGLCwBx3xnTWvRtiBW9Pmm2rA83DgtlS2aTmMyFQJucT3oYxqHqCzdfXJqXxHOKthvXc7znHLZ7M9lM8r3FVAVFWDIWmo0h5QYkRLQ7oL6je4lU0KSqAVeIS~JQqLfpNBrTgjckgIZQnSlaUrsngJwN0JikWF88UOvmFCaCgTcWuw66ljkHKzm~ORQhRwOqf~g4K1ilIBzPBfstPDuq5YpZ2HSIqNUbxceQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" height="75px" width="91px" style={{float: "left"}} />
      <Stack direction={"column"} style={{ width: 220, height: "100vh"}} spacing={4}>
        <Typography variant="h1" fontFamily="Train_One">AICULTURE</Typography>
        <Typography variant="h2" fontFamily="cursive">Fill the boxes below to proceed</Typography>
      <fieldset>
        <legend>Username or email</legend>
        <TextField placeholder="Username" />
      </fieldset>
      <fieldset>
        <legend>Password</legend>
        <TextField type="password" placeholder="Password" />
      </fieldset>
      <Button variant="contained" border-radius="50%" style={{fontFamily: "Train_One"}}>Login</Button>
    </Stack>
    </Box>
  )
}