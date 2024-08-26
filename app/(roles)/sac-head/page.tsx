import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { DashBoardLayout } from "@/components/dashboard/dashboard-layout";

import { prisma } from "@/lib/prisma";

const SacHeadPage = async ({
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

  if (!user.role && searchParams?.role) {
    await prisma.user.update({
      where: { id: user.id },
      data: { role: searchParams.role as string },
    });
    redirect(`/sac-head?currentPanel=${searchParams.currentPanel}`);
  } else if (searchParams?.role) {
    redirect(`/sac-head?currentPanel=${searchParams.currentPanel}`);
  }

  return (
    <DashBoardLayout
      defaultLayout={[20, 32, 48]}
      defaultCollapsed={false}
      navCollapsedSize={4}
      user={user}
      currentPanel={currentPanel}
    />
  );
};

export default SacHeadPage;
