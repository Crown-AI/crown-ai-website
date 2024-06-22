"use client";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";

export function NavBar() {
  const Login = () => {
    window.location.href = "/auth/login";
  };
  const Logout = () => {
    window.location.href = "/auth/logout";
  };
  return (
    <div className="links" id="links">
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
            <a href="#">OUR TEAM</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </section>
      <div id="loginButton">
        <Button variant="outlined" id="login" onClick={Login}>
          Login
        </Button>
        <Button variant="outlined" id="logout" onClick={Logout}>
          Login
        </Button>
      </div>
    </div>
  );
}
