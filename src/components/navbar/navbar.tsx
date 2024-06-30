"use client";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function NavBar() {
  const router = useRouter();
  const session = useSession();
  const Login = () => {
    router.push("/auth/login");
  };
  const Logout = () => {
    router.push("/auth/logout");
  };
  return (
    <div className="links">
      <Image
        src={"/Crown.png"}
        id="navImg"
        alt="AI"
        width={110}
        height={110}
        draggable="false"
      ></Image>
      <section>
        <ul>
          <li>
            <a href="#">LATEST PRODUCT</a>
          </li>
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="/about">ABOUT US</a>
          </li>
          <li>
            <a href="/team">OUR TEAM</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
          <li>
            <a href="/dashboard">DASHBOARD</a>
          </li>
        </ul>
      </section>
      <div id="loginButton">
        <Button variant="outlined" id="login" onClick={Login}>
          Login
        </Button>
        <Button variant="outlined" id="logout" onClick={Logout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
