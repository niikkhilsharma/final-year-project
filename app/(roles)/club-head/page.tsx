// @ts-nocheck

import React from "react";
import { ClubHeadLayout } from "@/components/club-head/dashboard-layout";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

const ClubHeadPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const session = await auth();
  if (!session?.user) redirect("/");

  const currentPanel = searchParams?.currentPanel as string;
  const { user } = session;

  if (!user.role) {
    await prisma.user.update({
      where: { id: user.id },
      data: { role: "CLUBHEAD" },
    });
    redirect(`/club-head/create`);
  } else {
    const userDetails = await prisma.user.findUnique({
      where: { id: user.id },
    });
    if (!userDetails?.organisationId) {
      redirect("/club-head/create");
    }
  }

  return (
    <div>
      <ClubHeadLayout
        defaultLayout={[20, 32, 48]}
        defaultCollapsed={false}
        navCollapsedSize={4}
        user={user}
        currentPanel={currentPanel}
      />
    </div>
  );
};

export default ClubHeadPage;
