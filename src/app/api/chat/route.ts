import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { ChatMessage } from "@prisma/client";
import { NextResponse } from "next/server";
import Pusher from "pusher";
import { NextRequest } from "next/server";

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
  return NextResponse.json({
    messages,
  });
};
export const DELETE = async (req: Request) => {
  const url = new URL(req.url);

  // Access query parameters using searchParams
  const id = url.searchParams.get("id");

  // Ensure the message ID is provided
  if (!id) {
    return NextResponse.json(
      { message: "Message ID is required" },
      { status: 400 },
    );
  }

  // Delete the message
  const deletedMessage = await prisma.chatMessage.delete({
    where: { id: Number(id) },
  });

  // Optionally, you can broadcast the deletion to connected clients using Pusher
  await pusher.trigger("chat", "messageDeleted", { id: Number(id) });

  return NextResponse.json({ message: "Message deleted successfully" });
};
