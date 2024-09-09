import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

const CreateOrganisation = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <Link
          href={"/continue/create-organisation"}
          className={buttonVariants({ variant: "default" })}
        >
          Create Organisation
        </Link>
      </div>
      <p className="mt-2 text-center text-sm">
        By creating an account, you agree to our terms of service
      </p>
    </>
  );
};

export default CreateOrganisation;
