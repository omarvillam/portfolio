import React, { PropsWithChildren } from "react";
import {useNavigate} from "@remix-run/react";
import Turn from "../../../public/icons/Turn";

const ComponentLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(40,40,40,1)_1px,transparent_1px)]"
        style={{ backgroundSize: "20px 20px" }}
        aria-hidden="true"
      ></div>
      <div className={"rounded-full bg-black border border-solid border-secondary absolute left-8 top-8 z-10 cursor-pointer hover:bg-secondary p-4"} onClick={() => navigate('/')}>
        <Turn />
      </div>

      <div className="relative z-2 flex items-center justify-center w-full h-full">
        <div className="w-full max-w-4xl mx-auto sm:p-4 rounded-lg shadow-md border border-solid border-gray-700 bg-black">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ComponentLayout;
