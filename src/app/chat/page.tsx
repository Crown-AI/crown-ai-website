"use client";
require("dotenv").config();
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";

interface MessageData {
  message: string;
}
const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const Port = process.env.REACT_APP_PUSHER_KEY!;

  useEffect(() => {
    const pusher = new Pusher("a2a52ceae8e4bed5a902", {
      cluster: "mt1",
      encrypted: "true",
    } as any);

    const channel = pusher.subscribe("my-channel");

    channel.bind("my-event", (data: MessageData) => {
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);
  console.log("@@ process", Port);

  const sendMessage = () => {
    if (input.trim() !== "") {
      fetch("http://localhost:46399/trigger-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setInput("");
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  return (
    <div>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      <input
        placeholder="Message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
