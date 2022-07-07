export function Footer() {
  return (
    <div id="socials" className="flex flex-col items-center border-t-2 border-my-blue">
      <div className="my-12 flex flex-row items-center justify-evenly py-4 px-12">
        <h1 className="text-my-blue px-4 py-2 text-3xl font-bold">
          Leaving? Visit my social medias {"=>"}
        </h1>
        <div>
          <ul className="flex flex-row items-center m-0 p-0">
            <li className="float-left mr-4 block py-2 bg-gradient-to-b from-white/20 to-white/60 px-4 rounded-lg">
              <a href="https://github.com/KaioMarxDEV" target={"_blank"}>
                <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#16BFFD] to-[#CB3066]">Github</span>
              </a>
            </li>
            <li className="float-left mr-4 block py-2 bg-gradient-to-b from-white/20 to-white/60 px-4 rounded-lg">
              <a href="https://www.linkedin.com/in/kaiomarxdev/" target={"_blank"}>
                <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff4b1f] to-[#ff9068]">Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span>Built using React.js</span>
    </div>
  )
}