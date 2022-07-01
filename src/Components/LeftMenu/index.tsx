import { CheckCircle, GithubLogo, LinkedinLogo } from 'phosphor-react';
import styles from './leftMenu.module.css';

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
          <span>Age: </span>
          <p>20</p>
        </div>
        <div className='flex flex-row justify-between'>
          <span>Remote:</span>
          <p className={styles.avaiable}>Avaiable</p>
        </div>
        <div className='flex flex-row justify-between'>
          <span>Full Time: </span>
          <p className={styles.avaiable}>Avaiable</p>
        </div>
        <div className='flex flex-row justify-between'>
          <span>Address: </span>
          <p>Brazil</p>
        </div>
      </div>

      <div className={styles.languages}>
        <div>
          <span>English</span>
          <div className={styles.languagesSeparator}/>
          <CheckCircle size={24} />
        </div>
        <div>
          <span>Portuguese</span>
          <div className={styles.languagesSeparator}/>
          <CheckCircle size={32} />
        </div>
      </div>

    </div>
  )
}