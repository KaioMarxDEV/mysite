import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from "react";

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [modalStatus, setModalStatus] = useState(false);

  function handleInputName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.currentTarget.value)
  }
  function handleInputEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value)
  }
  function handleInputMessage(e: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.currentTarget.value)
  }

  async function handleSubmit(e: FormEvent) {    
    e.preventDefault()
  
    const newEmail = {
      user_id: 'dFSLX9Xitm8MW0XN5',
      template_id: 'contact_form',
      service_id: 'service_2ln1lsa',
      contact_number: Math.random() * 100000 | 0,
      user_name:name,
      user_email:email,
      message
    }
    
    try {
      await axios({
        method: "post",
        url: "https://api.emailjs.com/api/v1.0/email/send-form",
        data: newEmail,
        headers: {
          'content-type': 'multipart/form-data'
        },
      }).then(() => alert('Your email is sent!'))
    } catch (e) {
      console.log(`Tivemos um Erro ${e}`)
    }

    handleModalClose()
  }

  function handleModalClose() {
    setModalStatus(false)
  }

  function handleModalOpen() {
    setModalStatus(true)
  }
  
  return (
    <div className="my-52 max-w-full bg-gradient-to-b from-white/20 to-white/60 rounded-lg flex flex-col items-center justify-center py-28">
      <div className="max-w-[40rem] flex flex-col items-center">
        <strong className="text-4xl text-center leading-6 block">Interested working with me?</strong>
        <span className="mt-4 text-xl text-center block">
          On the lookout for a fast learner developer that shows passion in their work? 
          Are you interested in collaborating? I'd love to hear from you!
        </span>
        <button onClick={handleModalOpen} className="mt-8 w-1/2 bg-my-blue/75 px-8 py-3 cursor-pointer hover:bg-my-blue rounded-3xl font-semibold text-gray-100 text-center">
          Email Me
        </button>
      </div>
      <Modal
          isOpen={modalStatus}
          onRequestClose={handleModalClose}
          contentLabel="email submit"
          style={customStyles}
          ariaHideApp={false}
        >
          <h2 className="mb-12 text-3xl font-bold text-gray-900">
            Leave Me a{' '} 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4b1f] to-[#ff9068]">
              Message
            </span>
          </h2>
          <form className="w-[35rem] p-6 bg-white flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col items-start mb-4">
              <strong>Your Full Name (Required)</strong>
              <input onChange={handleInputName} className="bg-gray-200 rounded-lg text-gray-700 p-2 outline-none w-full mt-2" type="text" />
            </div>
            <div className="flex flex-col items-start mb-4">
              <strong>Your Email (Required)</strong>
              <input onChange={handleInputEmail} className="bg-gray-200 rounded-lg text-gray-700 p-2 outline-none w-full mt-2" type="text" />
            </div>
            <div className="flex flex-col items-start mb-4">
              <strong>Message</strong>
              <textarea onChange={handleInputMessage} className="h-[13rem] resize-none rounded-lg bg-gray-200 text-gray-700 p-2 outline-none w-full mt-2" />
            </div>
            <button className="mt-1 p-2 bg-my-blue/75 hover:bg-my-blue rounded-lg text-xl font-bold text-white/90 hover:text-white" type="submit">
              Send this message
            </button>
          </form>
        </Modal>
    </div>
  )
}