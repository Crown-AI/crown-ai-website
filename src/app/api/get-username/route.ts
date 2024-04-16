import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { getServerSession } from "next-auth";

export default async function Get() {
  const session = await getServerSession();

  // Example of retrieving a user's username
  const user = await prisma.user.findUnique({
    where: {
      name: session.user?.name,
    },
  });

  const username = user?.username || ""; // Use the retrieved username or a default value
}
