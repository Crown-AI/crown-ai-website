"use client";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import "../globalicons.css";
import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter();
  return (
    <Box>
      <Stack
        style={{
          backgroundImage: "url('/settings.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          cursor: "none",
        }}
        onMouseOver={(e) => {
          var mouse = document.getElementById("mouse") as HTMLElement;
          var pointer = document.getElementById("pointer") as HTMLElement;
          var current = document.getElementById(
            "current",
          ) as HTMLParagraphElement;
          current.innerHTML = `Current Username: ${localStorage.getItem(
            "uname",
          )}`;
          window.addEventListener("mousemove", (t) => {
            mouse!.style.top = `${t.clientY}px`;
            mouse!.style.left = `${t.clientX}px`;
            pointer!.style.top = `${t.clientY}px`;
            pointer!.style.left = `${t.clientX}px`;
          });
        }}
      >
        <Image
          src={"/cursor.png"}
          alt="cursor"
          id="mouse"
          width={30}
          height={30}
          style={{
            display: "block",
            zIndex: 9999,
            position: "absolute",
            pointerEvents: "none",
          }}
          onClick={(l) => {
            return true;
          }}
        ></Image>
        <Image
          src={"/pointer.png"}
          alt="cursor"
          id="pointer"
          width={20}
          height={30}
          style={{
            display: "none",
            zIndex: 9999,
            position: "absolute",
            pointerEvents: "none",
          }}
          onClick={(l) => {
            return true;
          }}
        ></Image>
        <span
          className="material-symbols-outlined"
          id="x"
          style={{ position: "absolute", zIndex: 999, right: 0, top: 0 }}
          onClick={() => {
            router.back();
          }}
          onMouseOver={() => {
            var cursor = document.getElementById("mouse") as HTMLImageElement;
            var x = document.getElementById("x") as HTMLSpanElement;
            x.style.color = "red";
            cursor.srcset = "/pointer.png";
            cursor.height = 30;
            cursor.width = 20;
          }}
          onMouseOut={() => {
            var cursor = document.getElementById("mouse") as HTMLImageElement;
            var x = document.getElementById("x") as HTMLSpanElement;
            x.style.color = "black";
            cursor.srcset = "/cursor.png";
            cursor.height = 30;
            cursor.width = 30;
          }}
        >
          close
        </span>
        <Stack
          style={{
            backgroundColor: "rgba(128, 128, 128, 0.2)",
            height: "100vh",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Stack
            style={{
              display: "flex",
              position: "relative",
              height: "100vh",
              wordSpacing: 2,
              width: 400,
              backgroundColor: "rgb(128, 128, 128)",
            }}
          >
            <Stack
              style={{
                display: "flex",
                position: "absolute",
                top: "30%",
              }}
            >
              <Typography
                style={{
                  border: "1px solid #000",
                  width: 300,
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => {
                  window.location.href = "#username";
                }}
                onMouseOver={() => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/pointer.png";
                  cursor.height = 30;
                  cursor.width = 20;
                }}
                onMouseOut={() => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/cursor.png";
                  cursor.height = 30;
                  cursor.width = 30;
                }}
              >
                Change your Username
              </Typography>
            </Stack>
          </Stack>
          <Stack
            style={{
              display: "flex",
              position: "relative",
              height: "100vh",
              width: 1500,
              backgroundColor: "white",
            }}
          >
            <Stack
              id="unameChange"
              style={{
                display: "flex",
                boxShadow: "0, 0, 30px #d4af37",
                gap: 20,
                height: 200,
              }}
            >
              <Typography
                variant="h3"
                id="username"
                style={{ fontFamily: "'Titillium Web', sans-serif" }}
              >
                Change your username
              </Typography>
              <Typography id="current">Current Username</Typography>
              <Stack id="input" style={{ display: "flex" }}>
                <TextField
                  id="uname"
                  label="Username"
                  style={{ width: 400 }}
                  onMouseOver={(j) => {
                    var uname = document.getElementById(
                      "uname",
                    ) as HTMLInputElement;
                    var mouse = document.getElementById(
                      "mouse",
                    ) as HTMLImageElement;
                    uname.style.cursor = "none";
                    mouse.srcset = "/text-cursor.png";
                  }}
                  onMouseOut={(n) => {
                    var mouse = document.getElementById(
                      "mouse",
                    ) as HTMLImageElement;
                    mouse.srcset = "/cursor.png";
                  }}
                  onInput={() => {
                    var uname = document.getElementById(
                      "uname",
                    ) as HTMLInputElement;
                    var validator = document.getElementById(
                      "validator",
                    ) as HTMLParagraphElement;
                    if (uname.value.length <= 4) {
                      validator.innerText =
                        "Username must be at least 5 characters";
                    } else {
                      validator.innerText = "";
                    }
                  }}
                ></TextField>
                <p
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "red",
                  }}
                  id="validator"
                ></p>
                <Button
                  style={{ cursor: "none" }}
                  id="change"
                  variant="contained"
                  onMouseOver={() => {
                    var mouse = document.getElementById(
                      "mouse",
                    ) as HTMLImageElement;
                    mouse.srcset = "/pointer.png";
                    mouse.height = 30;
                    mouse.width = 20;
                  }}
                  onMouseOut={() => {
                    var mouse = document.getElementById(
                      "mouse",
                    ) as HTMLImageElement;
                    mouse.srcset = "/cursor.png";
                    mouse.height = 30;
                    mouse.width = 30;
                  }}
                  onClick={() => {
                    var validator = document.getElementById(
                      "validator",
                    ) as HTMLParagraphElement;
                    var uname = document.getElementById(
                      "uname",
                    ) as HTMLInputElement;
                    var current = document.getElementById(
                      "current",
                    ) as HTMLParagraphElement;
                    var change = document.getElementById(
                      "change",
                    ) as HTMLButtonElement;
                    if (
                      validator.innerText ===
                      "Username must be at least 5 characters"
                    ) {
                      console.log("Enter a username");
                    } else {
                      change.innerHTML = "Changing...";
                      setTimeout(() => {
                        change.innerHTML = "Changed";
                        current.innerHTML = `Current Username: ${window.localStorage.getItem(
                          "uname",
                        )}`;
                      }, 5000);
                      setTimeout(() => {
                        uname.value = "";
                        change.innerHTML = `Change Username`;
                      }, 6000);
                      window.localStorage.setItem("uname", uname.value);
                      window.localStorage.setItem("gotAUsername", "true");
                    }
                  }}
                >
                  Change Username
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
