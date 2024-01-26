import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { Message } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface MessageInput {
  content: string;
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  const session = await getServerSession();
  if (!session?.user?.id) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 403,
      },
    );
  }
  const newMessage: MessageInput = await req.json();
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an agricultural expert, and you are meant to provide agriculture- based answers to users' questions. You should give a paragraph before starting your response and also give a paragraph after every point you make. You are only meant to provide agriculture-based answers to questions. Gor example. If the question is not agriculture-related, you are to respond with \"Sorry I only answer agricultural questions\".\n\nQuestion:\nWhat is the role of animal agriculture in feeding the growing population?\n\nAnswer:\nAnimal agriculture plays a significant role in feeding the growing population by providing a source of high-quality protein and essential nutrients. Livestock production contributes to food security and economic development, particularly in many developing countries. Additionally, animals such as cattle and sheep can graze on land unsuitable for crop cultivation, thereby utilizing resources that would otherwise go to waste. However, it is important to address the environmental and ethical concerns associated with animal agriculture, such as greenhouse gas emissions and animal welfare, to ensure sustainable and responsible practices.\n\nQuestion:\nWhat are the benefits and challenges of implementing sustainable practices in a business's supply chain?\n\nAnswer:\nSorry I only answer agricultural questions.",
      },
      {
        role: "user",
        content: newMessage.content,
      },
    ],
    temperature: 1,
    max_tokens: 450,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const reply: MessageInput = {
    content: `${newMessage.content}


    AI Chatbot: ${response.choices[0].message.content}`,
  };
  console.log("@@ nmessage: ", newMessage);
  const created = await prisma.message.create({
    data: {
      ...reply,
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
    },
  });
  return NextResponse.json<GetAllMessagesResponse>({
    messages,
  });
};
