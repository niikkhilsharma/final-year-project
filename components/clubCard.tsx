import React from "react";
import { FaChrome } from "react-icons/fa6";

const ClubCard = () => {
  return (
    <div className="relative rounded-md border p-4">
      <div className="absolute right-1.5 top-1.5 flex w-full justify-end">
        <FaChrome />
      </div>
      <h1>
        Club Name: <span>Google Developer Student Club</span>
      </h1>
      <h1>
        Coordinator Name: <span>Pushkar Yadav</span>
      </h1>
      <h1>
        Co-Coordinator Name: <span>Pushkar Yadav</span>
      </h1>
      <h1>
        Category: <span>Technical</span>
      </h1>
      <h1>
        Created At: <span>September 2, 2024</span>
      </h1>
    </div>
  );
};

export default ClubCard;
