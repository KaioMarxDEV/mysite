import { HandWaving } from "phosphor-react";

import kaio from '../../Assets/kaio.jpeg';

export function Greetings() {
  return (
    <div className="mt-28 flex flex-row items-center justify-around">
      <div className="max-w-[34rem] ">
        <div className="flex flex-row">
          <strong className="text-3xl leading-6 text-my-blue">Hi, I'm Kaio</strong>
          <HandWaving className="ml-2 text-3xl text-my-blue" />
        </div>
        <h1 className="text-6xl my-4 text-black font-lob drop-shadow-xl">a Front-end Developer based in Brazil</h1>
        <span className="text-gray-900 text-2xl">I am passionate about creating usable digital experiences that are impactful, enjoyable, and easy to use.</span>
        <div className="mt-8 flex flex-row justify-center items-center">
        </div>
      </div>
      <div>
        <img className="rounded-full w-80 h-80 drop-shadow-2xl" src={kaio} alt="kaio's 3d picture"/>
      </div>
    </div>
  )
}