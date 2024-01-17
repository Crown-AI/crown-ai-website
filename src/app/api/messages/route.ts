import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { Message } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export interface MessageInput {
  content: string;
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  const session = await getServerSession();
  const newMessage: MessageInput = await req.json();
  console.log("@@ nmessage: ", newMessage);
  const created = await prisma.message.create({
    data: {
      ...newMessage,
      ownerId: session.user.id,
    },
  });
  console.log("@@messages: ", created);
  return NextResponse.json(newMessage);
};

export interface GetAllMessagesResponse {
  messages: Message[];
}

export const GET = async (req: NextRequest, res: NextResponse) => {
  const session = await getServerSession();
  const messages = await prisma.message.findMany({
    where: {
      ownerId: session.user.id,
    }
  });
  return NextResponse.json<GetAllMessagesResponse>({
    messages,
  });
};
