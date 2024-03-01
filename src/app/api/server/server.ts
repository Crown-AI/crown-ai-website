const express = require("express");
const Pusher = require("pusher");

const app = express();

// Pusher setup
const pusher = new Pusher({
  appId: "1761629",
  key: "a2a52ceae8e4bed5a902",
  secret: "c22842e22328d1c8adf1",
  cluster: "mt1",
  encrypted: true,
});

// Endpoint to trigger a Pusher event
app.post("/trigger-event", (res) => {
  try {
    pusher.trigger("my-channel", "my-event", {
      message: "Hello world!",
    });
    res.send("Event triggered");
  } catch (error) {
    console.error("Error triggering event:", error);
    res.status(500).send("Failed to trigger event");
  }
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
