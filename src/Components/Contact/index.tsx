export function Contact() {
  return (
    <div className="my-52 max-w-full bg-gradient-to-b from-white/20 to-white/60 rounded-lg flex flex-col items-center justify-center py-28">
      <div className="max-w-[40rem] flex flex-col items-center">
        <strong className="text-4xl text-center leading-6 block">Interested working with me?</strong>
        <span className="mt-4 text-xl text-center block">
          On the lookout for a fast learner developer that shows passion in their work? 
          Are you interested in collaborating? I'd love to hear from you!
        </span>
        <a className="mt-8 w-1/2 bg-my-blue/75 px-8 py-3 cursor-pointer hover:bg-my-blue rounded-3xl font-semibold text-gray-100 text-center">
          Email Me
        </a>
      </div>
    </div>
  )
}