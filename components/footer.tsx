import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Image
        src={
          "https://cdn.prod.website-files.com/59ace8427353c50001765cbd/613a9a8141a7d973da3c5f64_footer-bg-div-top.svg"
        }
        width={100}
        height={100}
        className="w-full"
        alt="footer-top"
      />
      <div className="bg-[#011936] py-20">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between">
            <div className="w-1/2 pl-5">
              <h1 className="font-mackinac text-[2.5rem] leading-tight tracking-wide text-white">
                Talk to users today. Seriously, we&apos;re fast.
              </h1>
              <div className="mt-4 flex items-center gap-4">
                <Link
                  href={"/continue"}
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "bg-white p-6 font-sans font-medium",
                  )}
                >
                  Sign up
                </Link>
                <Button
                  variant={"link"}
                  className="p-6 font-sans font-medium text-white underline decoration-solid decoration-[2.5px]"
                >
                  Book a demo
                </Button>
              </div>
            </div>
            <div className="flex w-1/2 justify-end">
              <Image
                src={
                  "https://cdn.prod.website-files.com/59ace8427353c50001765cbd/660debe67a040a272ad15a48_cta-image.png"
                }
                width={450}
                height={450}
                alt="footer banner"
              />
            </div>
          </div>
          <div className="mt-28 flex items-start justify-between gap-28">
            <div className="">
              <Image
                src={
                  "https://cdn.prod.website-files.com/59ace8427353c50001765cbd/613fb693f3320e648484a654_ui-logo-light.svg"
                }
                width={250}
                height={250}
                alt="logo"
              />
            </div>
            <div className="grid w-full justify-between gap-28 lg:grid-cols-4">
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase leading-loose tracking-widest text-[#65B8A2]">
                  solutions
                </h3>
                <ul className="space-y-2 text-sm leading-loose text-white">
                  <li>Recruit</li>
                  <li>Research Hub</li>
                  <li>Pricing</li>
                  <li>Integrations</li>
                  <li>Product Updates</li>
                  <li>Security</li>
                  <li className="leading-snug">
                    User Interviews vs. <br /> UserTesting
                  </li>
                  <li>User Interviews vs. UserZoom</li>
                  <li>🌟 Get a Demo</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase leading-tight tracking-widest text-[#65B8A2]">
                  Researcher Resources
                </h3>
                <ul className="space-y-2 text-sm leading-loose text-white">
                  <li>Recruit</li>
                  <li>Research Hub</li>
                  <li>Pricing</li>
                  <li>Integrations</li>
                  <li>Product Updates</li>
                  <li>Security</li>
                  <li className="leading-snug">
                    User Interviews vs. <br /> UserTesting
                  </li>
                  <li>Incentive Calculator</li>
                  <li>🌟 Get a Demo</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase leading-tight tracking-widest text-[#65B8A2]">
                  Participant Resources
                </h3>
                <ul className="space-y-2 text-sm leading-loose text-white">
                  <li>Recruit</li>
                  <li>Research Hub</li>
                  <li>Pricing</li>
                  <li>Integrations</li>
                  <li>Product Updates</li>
                  <li>Security</li>
                  <li className="leading-snug">
                    User Interviews vs. <br /> UserTesting
                  </li>
                  <li>User Interviews vs. UserZoom</li>
                  <li>🌟 Get a Demo</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase leading-tight tracking-widest text-[#65B8A2]">
                  Company
                </h3>
                <ul className="space-y-2 text-sm leading-loose text-white">
                  <li>About Us</li>
                  <li>Case Studies</li>
                  <li>Partnerships</li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="h-12 w-full bg-[#021020] text-xs">
        <MaxWidthWrapper className="flex h-full items-center justify-between text-[#65b8a2]">
          <h4>
            © <span className="font-bold"> 2024 User Interviews Inc. </span>{" "}
            All rights reserved.
          </h4>
          <div className="font-medium">
            Researcher Terms | Participant Terms | Privacy Policy | CA Privacy
            Notice
          </div>
          <div className="rounded-md border border-[#65b8a2] px-4 py-1.5 text-[0.55rem] font-medium tracking-wide hover:cursor-pointer">
            Coockies Settings
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Footer;
