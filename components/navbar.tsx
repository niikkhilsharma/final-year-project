import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const navMenu = [
    { itemName: "Home", link: "/" },
    { itemName: "About US", link: "/#about-us" },
    { itemName: "Testimonials", link: "/#testimonials" },
  ];

  return (
    <div className="sticky top-0 z-25 w-full border-b border-primary bg-white">
      <MaxWidthWrapper className="flex items-center justify-between px-4 py-5">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src={
                "/assets/images/main-logo1.png"
              }
              width={120}
              height={120}
              alt="logo"
            />
            <p className="text-center font-sans text-base font-medium mt-2">
      Student Activity Center
    </p>
          </Link>
          <div className="ml-20">
            <ul className="text-md flex items-center gap-10 font-sans text-base font-medium">
              {navMenu.map((item, i) => (
                <li className="hover:cursor-pointer hover:underline" key={i}>
                  <Link href={item.link} scroll={false}>
                    {item.itemName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <Link
            href={"/continue"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "bg-[#156152] px-6 py-6 font-sans text-base font-semibold text-white hover:bg-[#156152]/90 hover:text-white",
            )}
          >
            Continue <ArrowRight className="ml-2" />
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
