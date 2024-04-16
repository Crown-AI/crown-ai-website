import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
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

  const session = await getServerSession();

  if (!session?.user?.id || !session?.user?.email) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 403,
      },
    );
  }

  const savedMessage = await prisma.chatMessage.create({
    data: {
      message: messageInput.message,
      username: messageInput.username || "",
      email: session.user.email,
    },
  });

  await pusher.trigger("chat", "message", {
    ...messageInput,
    createdAt: savedMessage.createdAt,
  });

  return NextResponse.json(savedMessage);
};

export interface GetAllChatMessagesResponse {
  messages: ChatMessage[];
}

export const GET = async (req: Request) => {
  const messages = await prisma.chatMessage.findMany();
  const session = await getServerSession();
  // Example of retrieving a user's username
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const username = user?.username || ""; // Use the retrieved username or a default value

  return NextResponse.json({
    messages,
  });
};
