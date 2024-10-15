import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";

const TrustedBanner = () => {
  return (
    <div className="my-40">
      <Image
        src={
          "https://cdn.prod.website-files.com/59ace8427353c50001765cbd/613a9a82c2b60a4b054c3952_trust-bg-div-top.svg"
        }
        width={115}
        height={115}
        className="w-full"
        alt="banner-top"
      />

      <div className="-my-1 bg-[#158d71] py-20">
        <h3 className="text-center text-[0.83rem] font-semibold uppercase tracking-widest text-white">
          trusted by colleges
        </h3>
        <MaxWidthWrapper className="mb-20 mt-16 px-10">
          <div className="flex items-center justify-between gap-6">
            <Image
              src={
                  "/assets/images/rtu-logo.png"
              }
              width={115}
              height={115}
              alt="trusted partners"
            />
            <Image
              src={
                "/assets/images/iit-jammu-logo.png"
              }
              width={115}
              height={115}
              alt="trusted partners"
            />
            <Image
              src={
                "/assets/images/iit-bombay-logo.png"
              }
              width={115}
              height={115}
              alt="trusted partners"
            />
            <Image
              src={
                "/assets/images/nit-srinagar-logo.png"
              }
              width={115}
              height={115}
              alt="trusted partners"
            />
            <Image
              src={
                "https://gyaanarth.com/wp-content/uploads/2022/03/TRANSPARENTiitdlogo.png"
              }
              width={115}
              height={115}
              alt="trusted partners"
            />
            <Image
              src={
                "/assets/images/mit-college-logo.png"
              }
              width={115}
              height={115}
              alt="trusted partners"
            />
          </div>
        </MaxWidthWrapper>
      </div>
      <Image
        src={
          "https://cdn.prod.website-files.com/59ace8427353c50001765cbd/613a9a829ab5d6916cfb5802_trust-bg-div-bottom.svg"
        }
        width={115}
        height={115}
        className="w-full"
        alt="banner-bottom"
      />
    </div>
  );
};

export default TrustedBanner;
