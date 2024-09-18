import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function POST(req: Request) {
  const session = await auth();
  const user = session?.user;

  const data = await req.json();

  const updatedResponse = await prisma.user.update({
    where: { id: user?.id },
    data: {
      name: data.fullName,
      organisationId: data.organisationId,
      image: data.profilePicture,
    },
  });

  console.log(updatedResponse);

  return NextResponse.json(updatedResponse);
}
