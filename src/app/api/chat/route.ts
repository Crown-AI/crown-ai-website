import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { ChatMessage } from "@prisma/client";
import { NextResponse } from "next/server";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: "1761629",
  key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: "mt1",
  useTLS: true,
});

export const POST = async (req: Request) => {
  const messageInput = await req.json();

  const savedMessage = await prisma.chatMessage.create({
    data: {
      message: messageInput.message,
      username: messageInput.username,
      email: messageInput.email,
    },
  });

  await pusher.trigger("chat", "message", messageInput);

  return NextResponse.json(savedMessage);
};
