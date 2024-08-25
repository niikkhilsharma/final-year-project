import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LoginBox from "@/components/login/loginBox";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const page = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let loginFor: string[] | string = "";
  if (searchParams?.login) {
    loginFor = searchParams.login as string;
  }

  return (
    <>
      <Navbar />
      <div
        className={cn(
          "relative flex w-full items-center justify-center bg-secondary",
        )}
      >
        <MaxWidthWrapper
          className={cn(
            "flex h-screen items-center justify-center 2xl:h-[60vh]",
          )}
        >
          <div
            className={cn(
              "flex w-full flex-wrap items-center justify-center gap-8 p-4 xl:justify-center",
              loginFor && "opacity-50 blur",
            )}
          >
            <Link
              href={"/continue?login=SAC Head"}
              className="w-full max-w-96 rounded-lg bg-white px-10 py-4 shadow-lg transition-all hover:-translate-y-4 hover:shadow-2xl"
            >
              <Image
                src={"/assets/images/sac-head.png"}
                alt="Club Admin"
                width={200}
                height={200}
                className="h-full w-full"
              />
              <div className="mt-4 text-center">
                <p className="flex items-center justify-center gap-2 text-sm tracking-tight text-[#616161]">
                  Continue As <MoveRight />
                </p>
                <h2 className="tracking-tigh text-2xl font-bold leading-7">
                  SAC Head
                </h2>
              </div>
            </Link>
            <Link
              href={"/continue?login=Club Admin"}
              className="w-full max-w-96 rounded-lg bg-white px-10 py-4 shadow-lg transition-all hover:-translate-y-4 hover:shadow-2xl"
            >
              <Image
                src={"/assets/images/student.png"}
                alt="Club Admin"
                width={200}
                height={200}
                className="h-full w-full"
              />
              <div className="mt-4 text-center">
                <p className="flex items-center justify-center gap-2 text-sm tracking-tight text-[#616161]">
                  Continue As <MoveRight />
                </p>
                <h2 className="tracking-tigh text-2xl font-bold leading-7">
                  Club Admin
                </h2>
              </div>
            </Link>
            <Link
              href={"/continue?login=Student"}
              className="w-full max-w-96 rounded-lg bg-white px-10 py-4 shadow-lg transition-all hover:-translate-y-4 hover:shadow-2xl"
            >
              <Image
                src={"/assets/images/student.png"}
                alt="Club Admin"
                width={200}
                height={200}
                className="h-full w-full"
              />
              <div className="mt-4 text-center">
                <p className="flex items-center justify-center gap-2 text-sm tracking-tight text-[#616161]">
                  Continue As <MoveRight />
                </p>
                <h2 className="tracking-tigh text-2xl font-bold leading-7">
                  Students
                </h2>
              </div>
            </Link>
          </div>
        </MaxWidthWrapper>
        {loginFor && <LoginBox loginFor={loginFor} />}
      </div>
      <Footer />
    </>
  );
};

export default page;
