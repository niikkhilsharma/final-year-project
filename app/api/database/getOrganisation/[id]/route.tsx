import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const id = req.url.split("/getOrganisation")[1].split("/")[1];
  const organisationDetails = await prisma.organisation.findUnique({
    where: { organisationId: id },
  });

  const users = await prisma.user.findMany({
    where: { organisationId: organisationDetails?.organisationId },
  });

  return NextResponse.json({ organisationDetails, users });
}
