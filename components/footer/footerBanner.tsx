import React from "react";
import MaxWidthWrapper from "../max-width-wrapper";

const FooterBanner = () => {
  return (
    <div className="h-12 w-full bg-[#021020] text-xs">
      <MaxWidthWrapper className="flex h-full items-center justify-between text-[#65b8a2]">
        <h4>
          © <span className="font-bold"> 2024 User Interviews Inc. </span> All
          rights reserved.
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
  );
};

export default FooterBanner;
