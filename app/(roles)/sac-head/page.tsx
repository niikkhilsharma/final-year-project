// @ts-nocheck

import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { DashBoardLayout } from "@/components/dashboard/dashboard-layout";

import prisma from "@/lib/prisma";

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
    const createdOrganisation = await prisma.organisation.create({
      data: {
        createdBy: user.email,
        collegeName: searchParams.cllgName,
        city: searchParams.city,
        state: searchParams.state,
        country: searchParams.country,
        image: searchParams.cllgImageUrl,
        websiteUrl: searchParams.cllgWebsiteUrl,
        about: searchParams.description,
      },
    });

    await prisma.user.update({
      where: { id: user.id },
      data: {
        role: searchParams.role as string,
        name: searchParams.fName,
        identityDocUrl: searchParams.identityDocUrl,
        organisationId: createdOrganisation.organisationId,
      },
    });

    redirect(
      `/sac-head?currentPanel=${searchParams.currentPanel || "dashboard"}`,
    );
  } else if (searchParams?.role) {
    redirect(`/sac-head?currentPanel=${searchParams.currentPanel}`);
  }
  // You're not handling the case where the user will not be having role and will also not be having role in the searchparams. if(!user.role && !searchParams.role) this can happend when the user changes the redirect url from the mail.

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
