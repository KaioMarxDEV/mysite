import { MouseEvent, useEffect, useState } from "react";

import ProjectsArr from '../../utils/projects';

export function Projects() {
  const [projects, setProjects] = useState([] as typeof ProjectsArr)


  function handleBannerClick(e: MouseEvent<HTMLButtonElement>) {
    alert(`Pressinou ai pai, no botao: ${e.currentTarget.id}`)
  }

  useEffect(() => {
    setProjects(ProjectsArr)
  }, [])

  return (
    <div className="my-56 w-full flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-center text-5xl font-bold text-black drop-shadow-xl">
          React.js Case Study
        </h1>
        <span className="text-center text-gray-900">
          Some of my case studies, Based on personal projects, challenges, etc.
        </span>
      </div>
      <div className="mt-14 grid grid-cols-[20rem_20rem_20rem] grid-rows-[13rem_13rem_13rem] gap-3">
        {projects.map((project) => (
          <button key={project.id} id={String(project.id)} onClick={handleBannerClick} className="hover:bg-black transition-all hover:outline hover:outline-my-blue rounded-lg flex flex-col h-full items-center cursor-pointer">
            <div 
              style={{ backgroundImage: `url(${project.img})` }} 
              className="bg-cover w-[20rem] h-[13rem] rounded-lg rounded-b-none"
            />
            <div className="bg-black py-2 w-full rounded-lg rounded-t-none">
                <strong className="text-white">{project.title}</strong>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}