import { HandWaving } from "phosphor-react";

export function Header() {
  return (
    <header className="flex flex-row h-20 justify-between mt-8 items-center bg-white drop-shadow-md px-4 rounded-lg">
      <h1 className="text-my-blue px-4 py-2 text-3xl font-semibold">
        {'<'}Welcome{'>'}
      </h1>
      <div className="flex flex-row items-center">
        <ul className="m-0 p-0 list-none overflow-hidden bg-transparent">
          <li className="float-left mr-4 block px-4 py-2">
            <a href="#home" className=" text-gray-900 hover:font-bold hover:text-my-blue">
              Home
            </a>
          </li>
          <li className="float-left mr-4 block px-4 py-2">
            <a href="#skills" className="text-gray-900 hover:font-bold hover:text-my-blue">
              Skills
            </a>
          </li>
          <li className="float-left mr-4 block px-4 py-2">
            <a href="#projects" className=" text-gray-900 hover:font-bold hover:text-my-blue">
              Projects
            </a>
          </li>
          <li className="float-left mr-4 block px-4 py-2">
            <a href="#socials" className=" text-gray-900 hover:font-bold hover:text-my-blue">
              Socials
            </a>
          </li>
        </ul>
        <div className="block animate-pulse hover:animate-none">
          <a href="#hello" className="flex flex-row items-center ml-4 bg-my-blue/75 px-8 py-3 cursor-pointer hover:bg-my-blue rounded-3xl font-semibold text-gray-100">
            Say Hello
            <HandWaving className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </header>
  )
}