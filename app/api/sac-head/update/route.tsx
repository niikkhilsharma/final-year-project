import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const details = await req.json();

  const newUser = await prisma.user.update({
    where: { email: details.email },
    data: {
      name: details.name,
      image: details.image,
    },
  });
  console.log(newUser);
  return NextResponse.json(newUser);
}
