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
          trusted by research teams at
        </h3>
        <MaxWidthWrapper className="mb-20 mt-16 px-10">
          <div className="flex items-center justify-between gap-6">
            <Image
              src={
                "https://cdn.prod.website-files.com/59ace8427353c50001765cbd/6153695dec7fa273df80f330_adobe.svg"
              }
              width={115}
              height={115}
              alt="trusted partners"
            />
            <Image
              src={
                "https://cdn.prod.website-files.com/59ace8427353c50001765cbd/615369e995415c3701d3391d_spotify.svg"
              }
              width={115}
              height={115}
              alt="trusted partners"
            />
            <Image
              src={
                "https://cdn.prod.website-files.com/59ace8427353c50001765cbd/613bdbf6ba5cf7e09493fbef_pinterest.svg"
              }
              width={115}
              height={115}
              alt="trusted partners"
            />
            <Image
              src={
                "https://cdn.prod.website-files.com/59ace8427353c50001765cbd/613bdbf54fc6057579ed1e05_intuit.svg"
              }
              width={115}
              height={115}
              alt="trusted partners"
            />
            <Image
              src={
                "https://cdn.prod.website-files.com/59ace8427353c50001765cbd/613bdbf54fc6057579ed1e05_intuit.svg"
              }
              width={115}
              height={115}
              alt="trusted partners"
            />
            <Image
              src={
                "https://cdn.prod.website-files.com/59ace8427353c50001765cbd/615369e9e2245cc559b270e2_amazon.svg"
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
