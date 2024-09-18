import { headers } from "next/headers";
// import { auth } from "@/auth";

export default async function SacHeadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = headers().get("x-next-href") as string;
  const url = new URL(pathname);
  console.log(url);

  // const session = await auth();
  // const user = session?.user;
  // console.log(user);

  return <>{children}</>;
}
