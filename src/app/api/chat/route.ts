import { NextResponse } from "next/server";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: "1764237",
  key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: "mt1",
  useTLS: true,
});

export const POST = async (req: Request) => {
  const messageInput = await req.json();

  await pusher.trigger("chat", "message", messageInput);

  return NextResponse.json(messageInput);
};
