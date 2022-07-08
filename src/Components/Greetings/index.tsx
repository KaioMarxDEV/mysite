import { DownloadSimple, HandWaving } from "phosphor-react";

import Resume from '../../Assets/kaio-resume.pdf';
import kaio from '../../Assets/kaio.jpeg';

export function Greetings() {
  return (
    <div className="mt-28 flex flex-row items-center justify-around">
      <div className="max-w-[34rem] ">
        <div className="flex flex-row">
          <strong className="text-3xl leading-6 text-my-blue">Hi, I'm Kaio</strong>
          <HandWaving className="ml-2 text-3xl text-my-blue" />
        </div>
        <p className="text-6xl my-4 text-gray-700 font-lob drop-shadow-xl">a Front-end Developer based in Brazil</p>
        <span className="text-gray-700 text-2xl">I am passionate about creating usable digital experiences that are impactful, enjoyable, and easy to use.</span>
        <div className="mt-8 flex flex-row justify-center items-center">
        <a
          href={Resume}
          download
          target={"_blank"}
          className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-my-gold to-my-gold-dark py-[10px] px-[40px] text-gray-700 hover:text-gray-900  hover:shadow-[0px_0px_10px] hover:shadow-[#FFB400]"
        >
          <span className="mr-3 text-[14px] font-semibold">DOWNLOAD CV</span>
          <DownloadSimple size={16} />
        </a>
        </div>
      </div>
      <div>
        <img className="w-[28rem] h-[28rem] rounded-full drop-shadow-2xl" src={kaio} alt="kaio's 3d picture"/>
      </div>
    </div>
  )
}