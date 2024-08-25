import Image from "next/image";
import Link from "next/link";

import { FaPlus } from "react-icons/fa6";
import EmailForm from "./EmailForm";

const LoginBox = ({ loginFor }: { loginFor: string }) => {
  return (
    <div className="absolute top-32 mx-auto w-full max-w-[500px] rounded-lg border border-black bg-white p-4">
      <div className="absolute right-2 top-2 flex w-full items-center justify-end">
        <Link
          href="/continue"
          className="cursor-pointer rounded-md p-1 shadow-md transition-shadow duration-300 animate-in hover:shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)]"
        >
          <FaPlus size={24} className="rotate-45 font-bold" />
        </Link>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-6">
        <Image
          width={150}
          height={150}
          alt=""
          src={`/assets/images/${loginFor.replaceAll(" ", "-").toLocaleLowerCase()}.png`}
        />
        <h2 className="mt-4 text-center text-2xl font-medium">
          Enter your details to continue as{" "}
          <span className="block text-nowrap font-semibold underline">
            {loginFor}
          </span>
        </h2>
      </div>
      <div className="my-8 px-6">
        <EmailForm loginFor={loginFor} />
      </div>
    </div>
  );
};

export default LoginBox;
