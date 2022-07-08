import { CheckCircle, CircleWavyCheck, Cloud } from "phosphor-react";
import { useState } from "react";

import codingSVG from '../../Assets/coding.svg';

import illustrationSVG from '../../Assets/illustration.svg';

export function Skills() {
  const [frontSkills, setFrontSkills] = useState([])

  return (
    <div className="my-52 flex flex-col items-center">
      <div className="mb-20 flex flex-col items-center">
        <h2 className="mb-4 text-center text-5xl font-bold text-black drop-shadow-xl">
          Skills
        </h2>
        <span className="text-center text-gray-900">
          Some of the FullStack tooling, frameworks and languages that I have hands-on experience.
        </span>
      </div>
      <div className="w-full flex flex-row justify-around">
        <div className="w-1/4 drop-shadow-lg py-4 px-12 items-center bg-white rounded-lg flex flex-col">
          <img className="mb-1 text-my-gold w-16 h-16" src={codingSVG} alt="Icon" />
          <h3 className="font-bold text-xl text-black mb-6">
            Back end Skills
          </h3>
          <span className="text-center text-gray-900 mb-4">
            I like to code things that are permanent, and reliable equals to my APIs.
          </span>
          <ul>
            <li className="mb-2 flex flex-row items-center">
              <CheckCircle className="mr-1 text-my-gold" size={20} />
              <span className="text-gray-900">NodeJS</span>
            </li>
          </ul>
        </div>
        <div className="w-1/4 drop-shadow-lg py-4 px-12 items-center bg-white rounded-lg flex flex-col">
          <img className="mb-1 text-my-blue w-16 h-16" src={illustrationSVG} alt="Icon" />
          <h3 className="font-bold text-xl text-black mb-6">
            Front end Skills
          </h3>
          <span className="text-center text-gray-900 mb-4">
            I like to code things from scratch, and enjoy bringin ideas to life in the browser
          </span>
          <ul>
            <li className="mb-2 flex flex-row items-center">
              <CircleWavyCheck className="mr-1 text-my-blue" size={20} />
              <span className="text-gray-900">NodeJS</span>
            </li>
          </ul>
        </div>
        <div className="w-1/4 drop-shadow-lg py-4 px-12 items-center bg-white rounded-lg flex flex-col">
          <Cloud className="mb-1 text-my-green" size={64} />
          <h3 className="font-bold text-xl text-black mb-6">
            Devops Skills
          </h3>
          <span className="text-center text-gray-900 mb-4">
          At the end of a journey I like to make the experiences created available.
          </span>
          <ul>
            <li className="mb-2 flex flex-row items-center">
              <CheckCircle className="mr-1 text-my-green" size={20} />
              <span className="text-gray-900">NodeJS</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}