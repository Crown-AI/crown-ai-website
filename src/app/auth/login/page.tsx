import Link from "next/link";

import { authOptions } from "@/app/api/auth/[...nextauth]/constants";
import { EmailLoginForm } from "@/modules/auth/components/email-login-form/email-login-form";
import { Stack, Typography } from "@mui/material";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
};

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h2">Sign in to your account</Typography>
      <Typography>
        Don’t have an account?{" "}
        <Link
          href="/auth/register"
          className="font-medium text-green-600 hover:underline"
        >
          Sign up
        </Link>{" "}
        for a free trial.
      </Typography>
      <EmailLoginForm />
    </Stack>
  );
}
