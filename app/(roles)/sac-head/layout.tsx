import Image from "next/image";

import { MailComponent } from "./mail";
import { accounts, mails } from "./data";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const account = { email: "nikhil@rtu.ac.in", profileUrl: "string" };

  return (
    <>
      <div>
        <MailComponent
          account={account}
          defaultLayout={[20, 32, 48]}
          defaultCollapsed={false}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
