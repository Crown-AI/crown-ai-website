import { Box, Stack, TextField } from "@mui/material";

export default function Contact() {
  return (
    <Box>
      <Stack
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 0, 0, 0.3), rgba(255, 0, 255, 0.3), rgba(0, 0, 255, 0.3)),url('https://wallpapercave.com/wp/wp6944127.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <Stack
          style={{
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "monospace",
          }}
        >
          <h1>Contact us</h1>
          <Stack
            style={{
              backgroundColor: "rgba(128, 128, 128, 0.4)",
              width: 1000,
              height: 500,
            }}
          >
            <h1
              style={{
                marginLeft: 350,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Contact Us
            </h1>
            <form action="#" method="post">
              <TextField
                label="First Name"
                id="fname"
                className="fname"
                required
                style={{ left: 100, top: 50 }}
              ></TextField>
              <TextField
                label="Last Name"
                id="lname"
                className="lname"
                required
                style={{ left: 150, top: 50 }}
              ></TextField>
            </form>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
