import {
  CheckCircle,
  DownloadSimple,
  GithubLogo,
  LinkedinLogo,
} from "phosphor-react";
import { ExtraSkills } from "../ExtraSkills";
import { SkillBar } from "../SkillBar";

export function LeftMenu() {
  return (
    <div className="mt-0 ml-0 flex w-full flex-col rounded-lg bg-white pt-[3.124rem] pr-[2.875rem] pb-[1.56rem] pl-[2.5rem]">
      <div className="flex w-full flex-col items-center justify-center">
        <img
          className="mb-[1.93rem] block h-[9.3rem] w-[9.3rem] rounded-full outline outline-[#FFB400]"
          src="http://github.com/kaiomarxdev.png"
          alt="Kaio Marx picture"
        />

        <strong className="bold mb-[0.93rem] block text-base text-gray-900">
          Kaio Marx Alves{" "}
        </strong>
        <span className="mb-[0.93rem] block text-base text-gray-500">
          Front-End Developer
        </span>

        <div className="flex w-full justify-evenly border-b border-solid pb-6">
          <a
            className="flex items-center justify-center rounded-full bg-[#FFB400] p-1 outline-[#FFB400] duration-150 hover:text-white hover:outline hover:outline-offset-4 hover:ease-in-out"
            href="https://github.com/KaioMarxDEV"
            target="_blank"
            title="Kaio's Github"
          >
            <GithubLogo size={24} />
          </a>
          <a
            className="flex items-center justify-center rounded-full bg-[#FFB400] p-1 outline-[#FFB400] duration-150 hover:text-white hover:outline hover:outline-offset-4 hover:ease-in-out"
            href="https://www.linkedin.com/in/kaiomarxdev/"
            target="_blank"
            title="Kaio's LinkedIn"
          >
            <LinkedinLogo size={24} />
          </a>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col gap-[10px] border-b border-solid pb-6">
        <div className="flex flex-row justify-between">
          <span className="bg-[#FFB400]">Age: </span>
          <p>20</p>
        </div>
        <div className="flex flex-row justify-between">
          <span className="bg-[#FFB400]">Remote:</span>
          <p className="text-[#7EB942]">Avaiable</p>
        </div>
        <div className="flex flex-row justify-between">
          <span className="bg-[#FFB400]">Full Time: </span>
          <p className="text-[#7EB942]">Avaiable</p>
        </div>
        <div className="flex flex-row justify-between">
          <span className="bg-[#FFB400]">Address: </span>
          <p>Brazil</p>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col gap-[10px]  border-b border-solid pb-6 ">
        <h3 className="mb-[5px] text-lg font-bold leading-5">Languages</h3>
        <div className="flex items-center justify-between">
          <span>English</span>
          <CheckCircle size={24} />
        </div>
        <div className="flex items-center justify-between">
          <span>Portuguese</span>
          <CheckCircle size={24} />
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col border-b border-solid pb-6 ">
        <h3 className="mb-[15px] text-lg font-bold leading-5">Skills</h3>
        <SkillBar />
      </div>

      <div className="mt-6 flex w-full flex-col border-b border-solid pb-6 ">
        <h3 className="mb-[15px] text-lg font-bold leading-5">Extra Skills</h3>
        <ExtraSkills />
      </div>

      <div className="mt-6 w-full hover:text-white hover:shadow-[0px_0px_10px] hover:shadow-[#FFB400]">
        <a
          href="https://www.google.com"
          target={"_blank"}
          className="flex items-center justify-center bg-[#FFB400]  py-[10px] px-[40px]"
        >
          <span className="mr-5 text-[14px] font-semibold">DOWNLOAD CV</span>
          <DownloadSimple size={16} />
        </a>
      </div>
    </div>
  );
}
