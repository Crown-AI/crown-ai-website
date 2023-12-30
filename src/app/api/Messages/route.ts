import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { UUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { Message } from "@prisma/client";

export interface MessageInput {
  content: string;
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  const newMessage: MessageInput = await req.json();
  console.log("@@ nmessage: ", newMessage);
  const created = await prisma.message.create({
    data: newMessage,
  });
  console.log("@@messages: ", created);
  return NextResponse.json(newMessage);
};
export const GET = async (req: NextRequest, res: NextResponse) => {
  const Messages = await prisma.message.findMany();
  return NextResponse.json(Messages);
};
