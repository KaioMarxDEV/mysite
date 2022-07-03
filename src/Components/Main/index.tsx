import { ArrowsLeftRight, Code } from "phosphor-react";

export function Main() {
  return (
    <div className="container mx-auto mt-8 w-full">
      <header className="flex items-center justify-between rounded-lg border-[6px] border-[#FFB400] bg-white py-4 px-6 drop-shadow-md">
        <div className="inline-block">
          <h1 className=" text-5xl">
            I'm Kaio Marx
            <br />
            <strong className="animate-pulse font-lob text-[#FFB400] drop-shadow-md">
              Front-End
            </strong>{" "}
            Developer
          </h1>
        </div>
        <ArrowsLeftRight
          className="text-[#FFB400] hover:animate-one-spin"
          size={64}
        />
        <div>
          <p className="w-[424px] text-xl text-[#767676]">
            Reliable, energetic and resourceful Web development professional
            with a mission to build{" "}
            <span className="underline">amazing experiences</span> and an eager
            to have my skills challenged to make better.
          </p>
        </div>
      </header>
    </div>
  );
}
