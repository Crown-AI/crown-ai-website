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
          <Stack
            style={{
              backgroundColor: "rgba(128, 128, 128, 0.4)",
              width: 1000,
              height: 500,
              marginTop: 50,
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
              <TextField
                label="Email"
                id="email"
                name="email"
                required
                style={{ marginLeft: 190, marginTop: 50 }}
              ></TextField>
              <input
                type="date"
                name="dob"
                id="dob"
                style={{
                  height: 50,
                  width: 130,
                  backgroundColor: "rgba(128, 128, 128, 0.4)",
                  marginTop: 50,
                  marginLeft: 170,
                }}
              />
              <select
                id="Country"
                name="Country"
                style={{
                  backgroundColor: "rgba(128, 128, 128, 0.4)",
                  width: 250,
                  height: 50,
                  marginTop: 50,
                  marginLeft: 50,
                }}
              >
                <option value={""} selected disabled>
                  --Please-select-a-country--
                </option>
                <option value={"Afghaistan"}>Afghanistan</option>
                <option value={"USA"}>United States of America</option>
                <option value={"Canada"}>Canada</option>
                <option value={"Nigeria"}>Nigeria</option>
                <option value={"Malaysia"}>Malaysia</option>
              </select>
            </form>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
