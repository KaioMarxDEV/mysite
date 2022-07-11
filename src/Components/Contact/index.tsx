import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from "react";
import * as Yup from "yup";

import Modal from 'react-modal';

const customStyles = {
  content: {
    borderRadius: '12px',
    padding: 0,
    margin: 0,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const validationSchema = Yup.object().shape({
  user_name: Yup.string().required(),
  user_email: Yup.string().email().required(),
  message: Yup.string(),
  user_id: Yup.string(),
  template_id: Yup.string(),
  service_id: Yup.string(),
  contact_number: Yup.number(),
})

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

    const isValid = await validationSchema.validate(newEmail)

    if (!isValid) {
      alert('Please retry with correct information.')
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
    <div className="my-24 max-w-full backdrop-blur-md drop-shadow-md rounded-lg flex flex-col items-center justify-center py-28">
      <div className="max-w-[40rem] flex flex-col items-center">
        <strong className="text-4xl text-center leading-6 block">
          Interested{' '} 
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500'>
            working
          </span>{' '}
          with me?
        </strong>
        <span className="mt-4 text-xl text-center block">
          On the lookout for a fast learner developer that shows passion in their work? 
           I'd love to hear from you!
        </span>
        <button onClick={handleModalOpen} className="mt-8 w-1/2 px-8 py-3 cursor-pointer rounded-3xl font-semibold text-center text-my-blue border border-my-blue hover:bg-my-blue hover:text-white transition">
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
          <form className="w-[35rem] rounded-xl bg-gradient-to-r from-[#7928ca] to-[#ff0080] p-1" onSubmit={handleSubmit}>
            <div className='bg-white w-full h-full p-6 rounded-xl flex flex-col'>
              <h2 className="mb-12 text-3xl font-bold text-gray-900">
                Leave Me a{' '} 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4b1f] to-[#ff9068]">
                  Message
                </span>
              </h2>
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
            </div>
          </form>
      </Modal>
    </div>
  )
}