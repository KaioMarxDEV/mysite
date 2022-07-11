import { XSquare } from "phosphor-react";
import { useEffect, useState } from "react";

import Modal from 'react-modal';

import ProjectsArr from '../../utils/projects';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#f2f3f5'
  },
};

interface IProject{
  id: number;
  img: string;
  gif: string;
  title: string;
  desc: string;
}

export function Projects() {
  const [project, setProject] = useState<IProject>({} as IProject)
  const [modal, setModal] = useState(false)
  const [projects, setProjects] = useState<IProject[]>([])

  function handleModalOpen() {
    setModal(true)
  }

  function handleModalClose() {
    setModal(false)
  }

  function handleBannerClick(project: IProject) {
    setProject(project)
    handleModalOpen()
  }

  useEffect(() => {
    setProjects(ProjectsArr)
  }, [])

  return (
    <div className="my-56 w-full flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-center text-5xl font-bold text-black drop-shadow-xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
            React.js
          </span>{' '}
          Case Study
        </h1>
        <span className="text-center text-gray-900">
          Some of my case studies, Based on personal projects, challenges, etc.
        </span>
      </div>
      <div className="mt-14 grid grid-cols-[20rem_20rem_20rem] grid-rows-[13rem_13rem_13rem] gap-3">
        {projects.map((project) => (
          <button key={project.id} id={String(project.id)} onClick={() => handleBannerClick(project)} className="hover:bg-black transition-all hover:outline hover:outline-my-blue rounded-lg flex flex-col h-full items-center cursor-pointer">
            <div 
              style={{ backgroundImage: `url(${project.img})` }} 
              className="bg-cover w-[20rem] h-[13rem] rounded-lg rounded-b-none"
            />
            <div className="bg-black py-2 w-full rounded-lg rounded-t-none">
                <strong className="text-white">{project.title}</strong>
            </div>
          </button>
        ))}
        <Modal
          isOpen={modal}
          onRequestClose={handleModalClose}
          contentLabel="project details"
          style={customStyles}
          ariaHideApp={false}
        >
          <div className="flex flex-col rounded-xl border-0 outline-none py-5 px-8 bg-my-gray">
            <div className="flex flex-row gap-4 items-start">
              <div className="flex flex-col w-[24rem] px-4 py-2">
                <button onClick={handleModalClose} className="absolute left-3 top-3 transition text-gray-700 hover:text-my-blue">
                  <XSquare size={32} />
                </button>
                <h3 className="text-3xl font-rc font-bold text-gray-900 mb-8">
                  {project.title}
                </h3>
                <p className="text-xl font-inter text-gray-700 pr-8 py-2 mb-8">
                  {project.desc}
                </p>
              </div>
              <img src={project.gif} className="w-[32rem] rounded-lg" />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}