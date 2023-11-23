import Link from "next/link";

import { authOptions } from "@/app/api/auth/[...nextauth]/constants";
import { EmailLoginForm } from "@/modules/auth/components/email-login-form/email-login-form";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Stack, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h2">Get started for free</Typography>
      <Typography>
        Already registered? <Link href="/auth/login">Sign in</Link> to your
        account.
      </Typography>
      <EmailLoginForm />
    </Stack>
  );
}
