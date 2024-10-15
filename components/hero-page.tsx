import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import { Button } from "./ui/button";

const HeroPage = () => {
  return (
    <MaxWidthWrapper className="flex justify-between pt-20">
      <div className="w-full max-w-[45%] pt-5">
        <h1 className="font-mackinac text-6xl font-medium leading-tight tracking-wide text-[#093c3f]">
          We connect, We create, We achieve
        </h1>
        <p className="mt-4 text-2xl font-medium">
          Let's get connected with our college communities
        </p>
        <Button
          variant="outline"
          className="bg-button hover:bg-button/90 mt-8 px-6 py-6 font-sans text-base font-semibold text-white hover:text-white"
        >
          Sign up
        </Button>
      </div>
      <div className="flex w-full max-w-[55%] flex-1 items-start justify-end">
        <Image
          width={662}
          height={417}
          src="https://cdn.prod.website-files.com/59ace8427353c50001765cbd/6170948c762d5423326213b1_Group%20497.svg"
          alt="home image"
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroPage;
