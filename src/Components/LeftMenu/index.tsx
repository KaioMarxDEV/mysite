import { CheckCircle, DownloadSimple, GithubLogo, LinkedinLogo } from 'phosphor-react';
import { ExtraSkills } from '../ExtraSkills';
import { SkillBar } from '../SkillBar';

export function LeftMenu() {
  return (
    <div className='w-full bg-white mt-0 ml-0 rounded-lg pt-[3.124rem] pr-[2.875rem] pb-[1.56rem] pl-[2.5rem] flex flex-col'>
      <div className='w-full flex flex-col items-center justify-center'>
        <img className='h-[9.3rem] w-[9.3rem] block rounded-full mb-[1.93rem] outline outline-[#FFB400]' src="http://github.com/kaiomarxdev.png" alt="Kaio Marx picture" />
        
        <strong className='block text-base text-gray-900 bold mb-[0.93rem]' >Kaio Marx Alves </strong>
        <span className='block text-base text-gray-500 mb-[0.93rem]'>Front End Developer</span>

        <div className='w-full flex justify-evenly border-b border-solid pb-6'>
          <a className='bg-[#FFB400] rounded-full p-1 flex items-center justify-center hover:text-white hover:ease-in-out duration-150 hover:outline-offset-4 hover:outline outline-[#FFB400]' href="https://github.com/KaioMarxDEV" target='_blank' title="Kaio's Github">
            <GithubLogo size={24} />
          </a>
          <a className='bg-[#FFB400] rounded-full p-1 flex items-center justify-center hover:text-white hover:ease-in-out duration-150 hover:outline-offset-4 hover:outline outline-[#FFB400]' href="https://www.linkedin.com/in/kaiomarxdev/" target='_blank' title="Kaio's LinkedIn">
            <LinkedinLogo size={24} />
          </a>
        </div>
      </div>

      <div className='mt-6 w-full flex flex-col border-b border-solid pb-6 gap-[10px]'>
        <div className='flex flex-row justify-between'>
          <span className='bg-[#FFB400]'>Age: </span>
          <p>20</p>
        </div>
        <div className='flex flex-row justify-between'>
          <span className='bg-[#FFB400]'>Remote:</span>
          <p className='text-[#7EB942]'>Avaiable</p>
        </div>
        <div className='flex flex-row justify-between'>
          <span className='bg-[#FFB400]'>Full Time: </span>
          <p className='text-[#7EB942]'>Avaiable</p>
        </div>
        <div className='flex flex-row justify-between'>
          <span className='bg-[#FFB400]'>Address: </span>
          <p>Brazil</p>
        </div>
      </div>

      <div className='mt-6 w-full flex flex-col gap-[10px]  border-b border-solid pb-6 '>
        <h3 className='text-lg leading-5 font-bold mb-[5px]'>Languages</h3>
        <div className='flex items-center justify-between'>
          <span>English</span>
          <CheckCircle size={24} />
        </div>
        <div className='flex items-center justify-between'>
          <span>Portuguese</span>
          <CheckCircle size={24} />
        </div>
      </div>

      <div className='mt-6 w-full flex flex-col border-b border-solid pb-6 '>
        <h3 className='text-lg leading-5 font-bold mb-[15px]'>Skills</h3>
        <SkillBar />
      </div>

      <div className='mt-6 w-full flex flex-col border-b border-solid pb-6 '>
        <h3 className='text-lg leading-5 font-bold mb-[15px]'>Extra Skills</h3>
        <ExtraSkills />
      </div>

      <div className='mt-6 w-full hover:text-white hover:shadow-[0px_0px_10px] hover:shadow-[#FFB400]' >
        <a href='https://www.google.com' target={'_blank'} 
          className='flex items-center justify-center bg-[#FFB400]  py-[10px] px-[40px]'
        >
          <span className='mr-5 text-[14px] font-semibold'>
            DOWNLOAD CV
          </span>
          <DownloadSimple size={16} />
        </a>
      </div>
    </div>
  )
}