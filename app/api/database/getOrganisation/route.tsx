import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // Fetch all organisations from the database
    const organisationDetails = await prisma.organisation.findMany();

    // Return the fetched data as a JSON response
    return NextResponse.json(organisationDetails);
  } catch (error) {
    // Handle errors if any
    console.error("Error fetching organisations:", error);
    return NextResponse.json(
      { error: "Failed to fetch organisations" },
      { status: 500 },
    );
  }
}
